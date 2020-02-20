package json.converter.internal;

import com.vladsch.flexmark.html.HtmlWriter;
import org.apache.commons.text.StringEscapeUtils;

import java.util.stream.Stream;

public class MarkdownWriter {
    private final HtmlWriter html;
    private String STRING_START = "\"";
    private String STRING_END = "\"";

    public MarkdownWriter(HtmlWriter html) {
        this.html = html;
    }

    private boolean endsWith(String... list) {
        String content = this.html.getAppendable().toString().trim();
        return Stream.of(list).anyMatch(content::endsWith);
    }

    public MarkdownWriter line() {
        this.html.line();
        return this;
    }

    public MarkdownWriter raw(String s) {
        this.html.raw(s);
        return this;
    }

    public MarkdownWriter indent() {
        this.html.indent();
        return this;
    }

    public MarkdownWriter unIndent() {
        this.html.unIndent();
        return this;
    }

    public MarkdownWriter startObject() {
        if (this.endsWith("}")) {
            this.html.raw(",");
        }
        this.html.line().raw("{").line().indent();
        return this;
    }

    public MarkdownWriter endObject() {
        this.html.unIndent().line().raw("}");
        return this;
    }

    public MarkdownWriter startList(Boolean inline) {
        this.html.raw("[");
        if (!inline) {
            this.line().indent();
        }
        return this;
    }

    public MarkdownWriter startList() {
        return this.startList(false);
    }

    public MarkdownWriter endList(Boolean inline) {
        if (!inline) {
            this.unIndent().line();
        }
        this.html.raw("]");
        return this;
    }

    public MarkdownWriter endList() {
        return this.endList(false);
    }

    public MarkdownWriter comma() {
        if (!this.endsWith("[", "{")) {
            this.html.raw(",");
        }
        return this;
    }

    public MarkdownWriter key(String key) {
        this.comma().line();
        this.html.raw(STRING_START).raw(key).raw(STRING_END).raw(": ");
        return this;
    }

    public MarkdownWriter value(String value) {
        // value needs to be escaped
        // unescaped: results to following JSON
        //   "content": Default 1 - http://default-1-entry.example.com,
        this.html.raw('"' + StringEscapeUtils.escapeJson(value) + '"');
        return this;
    }

    public MarkdownWriter valueStart() {
        this.html.raw(STRING_START);
        return this;
    }

    public MarkdownWriter valueEnd() {
        this.html.raw(STRING_END);
        return this;
    }

    public MarkdownWriter keyValue(String key, String value) {
        return this.key(key).value(value);
    }

    public MarkdownWriter keyValue(String key, String value, Boolean condition) {
        if (condition) {
            this.key(key).value(value);
        }
        return this;
    }

    public MarkdownWriter keyValue(String key, int value) {
        this.key(key);
        this.html.raw(String.valueOf(value));
        return this;
    }
}
