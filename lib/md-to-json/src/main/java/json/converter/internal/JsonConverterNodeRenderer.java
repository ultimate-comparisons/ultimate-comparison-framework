package json.converter.internal;

import com.vladsch.flexmark.ast.*;
import com.vladsch.flexmark.html.HtmlWriter;
import com.vladsch.flexmark.html.renderer.NodeRenderer;
import com.vladsch.flexmark.html.renderer.NodeRendererContext;
import com.vladsch.flexmark.html.renderer.NodeRendererFactory;
import com.vladsch.flexmark.html.renderer.NodeRenderingHandler;
import com.vladsch.flexmark.util.collection.iteration.ReversiblePeekingIterable;
import com.vladsch.flexmark.util.options.DataHolder;
import com.vladsch.flexmark.util.options.DataKey;
import com.vladsch.flexmark.util.sequence.BasedSequence;
import org.eclipse.collections.impl.factory.Maps;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class JsonConverterNodeRenderer implements NodeRenderer {

    public static DataKey<Map<String, Map<String, Boolean>>> PLAIN_CHILDREN =
            new DataKey<>("PLAIN_CHILDREN", Maps.mutable.with());
    public static DataKey<Map<String, Map<String, Boolean>>> CHILDREN =
            new DataKey<>("CHILDREN", Maps.mutable.with());

    private final Map<String, Map<String, Boolean>> renderPlainChildren;
    private final Map<String, Map<String, Boolean>> renderChildren;

    private int level = 0;

    public JsonConverterNodeRenderer(DataHolder options) {
        this.renderPlainChildren = options.get(PLAIN_CHILDREN);
        this.renderChildren = options.get(CHILDREN);
    }

    @Override
    public Set<NodeRenderingHandler<?>> getNodeRenderingHandlers() {
        return new HashSet<>(Arrays.asList(
                new NodeRenderingHandler<>(BulletList.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(BulletListItem.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(Document.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(Heading.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(OrderedList.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(OrderedListItem.class, JsonConverterNodeRenderer.this::render),
                new NodeRenderingHandler<>(Paragraph.class, JsonConverterNodeRenderer.this::render)
        ));
    }

    private Boolean shouldPrint(Map<String, Map<String, Boolean>> map, String type, Integer level, Boolean def) {
        String lvl = String.valueOf(level);
        if (Objects.nonNull(map) && map.containsKey(type) && map.get(type).containsKey(lvl)) {
            return map.get(type).get(lvl);
        }

        return def;
    }

    /**
     * Refactor flat markdown structure to hierarchical structure
     * This means e.g. that Text always belongs to previous headers and higher level header belong to a
     * preceding lower level header
     */
    private Node refactorNode(Node node) {
        ReversiblePeekingIterable<Node> iterable = node.getChildren();
        List<Node> children = new ArrayList<>();
        iterable.forEach(children::add);

        ListIterator<Node> iterator = children.listIterator();

        node.removeChildren();

        while (iterator.hasNext()) {
            Node child = iterator.next();
            node.appendChild(child);

            if (child instanceof Heading) {
                while (iterator.hasNext()) {
                    Node next = iterator.next();
                    if (!(next instanceof Heading) || ((Heading) child).getLevel() < ((Heading) next).getLevel()) {
                        // Child added to the belonging header instead of the result node
                        child.appendChild(next);
                    } else {
                        iterator.previous();
                        break;
                    }
                }
            }
        }

        iterable = node.getChildren();
        children = new ArrayList<>();
        iterable.forEach(children::add);

        node.removeChildren();

        children.stream()
                .map(this::refactorNode)
                .forEach(node::appendChild);

        return node;
    }

    private void render(Document node, NodeRendererContext context, HtmlWriter html) {
        MarkdownWriter writer = new MarkdownWriter(html);

        Document document = (Document) refactorNode(node);

        writer.startList();
        context.renderChildren(document);
        writer.endList();
    }

    private void render(Heading node, NodeRendererContext context, HtmlWriter html) {
        MarkdownWriter writer = new MarkdownWriter(html);

        ReversiblePeekingIterable<Node> iterable = node.getChildren();
        List<Node> children = new ArrayList<>();
        iterable.forEach(children::add);

        Text firstChild = (Text) children.remove(0);
        node.removeChildren();
        children.forEach(node::appendChild);

        writer.startObject()
                .keyValue("type", "header")
                .keyValue("level", node.getLevel())
                .keyValue("content", firstChild.getChars().unescape());

        if (shouldPrint(renderPlainChildren, "header", node.getLevel(), false)) {
            writer.keyValue("plainChildren", getPlainChildren(node, context));
        }

        if (shouldPrint(renderChildren, "header", node.getLevel(), true)) {
            int tmpLevel = this.level;
            this.level = node.getLevel();
            writer.key("children").startList();
            context.renderChildren(node);
            writer.endList();
            this.level = tmpLevel;
        }

        writer.endObject();
    }

    private String getPlainChildren(Node node, NodeRendererContext context) {
        String plainChildren = "";

        if (node.hasChildren()) {
            int startOffset = node.getFirstChild().getStartOffset();

            BasedSequence plain = context.getDocument().getChars();

            while (startOffset > 0 && plain.subSequence(startOffset - 1, startOffset).unescape().equals(" ")) {
                startOffset--;
            }

            plainChildren = plain.subSequence(
                    startOffset,
                    node.getLastChild().getEndOffset()
            ).unescape();

            int spaces = node.getFirstChild().getStartOffset() - startOffset;

            StringBuilder prefix = new StringBuilder("\n");
            for (int i = 0; i < spaces; i++) {
                prefix.append(" ");
            }

            return plainChildren.replaceAll(prefix.toString(), "\n").trim();
        }
        return plainChildren;
    }

    private void renderList(Node node, NodeRendererContext context, HtmlWriter html) {
        MarkdownWriter writer = new MarkdownWriter(html);

        writer.startObject()
                .keyValue("type", "list")
                .keyValue("level", this.level);

        if (shouldPrint(renderPlainChildren, "list", this.level, false)) {
            writer.keyValue("plainChildren", getPlainChildren(node, context), true);
        }

        if (shouldPrint(renderChildren, "list", this.level, true)) {
            writer.key("children").startList();
            context.renderChildren(node);
            writer.endList();
        }

        writer.endObject();
    }

    private void render(BulletList node, NodeRendererContext context, HtmlWriter html) {
        renderList(node, context, html);
    }

    private void render(OrderedList node, NodeRendererContext context, HtmlWriter html) {
        renderList(node, context, html);
    }

    private void renderListItem(Node node, NodeRendererContext context, HtmlWriter html, int level) {
        MarkdownWriter writer = new MarkdownWriter(html);

        ReversiblePeekingIterable<Node> iterable = node.getChildren();
        List<Node> children = new ArrayList<>();
        iterable.forEach(children::add);

        List<Node> textChildren = new ArrayList<>();
        String text = children.stream()
                .filter(child -> child instanceof Paragraph)
                .map(child -> {
                    textChildren.add(child);
                    return ((Paragraph) child).getContentChars().toString().trim();
                })
                .collect(Collectors.joining("\n\n"));

        textChildren.forEach(children::remove);

        node.removeChildren();
        children.forEach(node::appendChild);

        writer.startObject()
                .keyValue("type", "item")
                .keyValue("level", level)
                .keyValue("content", text);

        if (shouldPrint(renderPlainChildren, "item", level, false)) {
            writer.keyValue("plainChildren", getPlainChildren(node, context), true);
        }

        if (shouldPrint(renderChildren, "item", level, true)) {
            writer.key("children").startList();

            iterable = node.getChildren();
            StreamSupport.stream(iterable.spliterator(), false)
                    .filter(Objects::nonNull)
                    .filter(child -> child instanceof BulletList || child instanceof OrderedList)
                    .flatMap(child -> StreamSupport.stream(child.getChildren().spliterator(), false))
                    .filter(child -> child instanceof BulletListItem || child instanceof OrderedListItem)
                    .forEach(item -> renderListItem(item, context, html, level + 1));

            writer.endList();
        }

        writer.endObject();
    }

    private void render(BulletListItem node, NodeRendererContext context, HtmlWriter html) {
        renderListItem(node, context, html, 1);
    }

    private void render(OrderedListItem node, NodeRendererContext context, HtmlWriter html) {
        renderListItem(node, context, html, 1);
    }

    private void render(Paragraph node, NodeRendererContext context, HtmlWriter html) {
        MarkdownWriter writer = new MarkdownWriter(html);

        writer.startObject()
                .keyValue("type", "text")
                .keyValue("content", node.getContentChars().toString().trim())
                .endObject();

    }

    public static class Factory implements NodeRendererFactory {
        @Override
        public NodeRenderer create(final DataHolder options) {
            return new JsonConverterNodeRenderer(options);
        }
    }
}
