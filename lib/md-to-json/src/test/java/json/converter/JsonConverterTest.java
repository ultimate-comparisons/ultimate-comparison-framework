package json.converter;

import com.vladsch.flexmark.ast.Node;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataSet;
import json.converter.internal.JsonConverterNodeRenderer;
import org.eclipse.collections.impl.factory.Maps;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

public class JsonConverterTest {

    private String loadResource(String name) throws Exception {
        Path path = Paths.get(this.getClass().getClassLoader().getResource(name).toURI());
        return new String(Files.readAllBytes(path));
    }

    @Test
    public void test() throws Exception {
        MutableDataSet options = new MutableDataSet();
        options.set(Parser.EXTENSIONS, Arrays.asList(JsonConverterExtension.create()));
        options.set(HtmlRenderer.INDENT_SIZE, 2);
        options.set(JsonConverterNodeRenderer.PLAIN_CHILDREN, Maps.mutable.with("item", Maps.mutable.with("1", true)));
        options.set(JsonConverterNodeRenderer.CHILDREN, Maps.mutable.with("item", Maps.mutable.with("1", false)));

        Parser parser = Parser.builder(options).build();
        HtmlRenderer renderer = HtmlRenderer.builder(options).build();

        Node document = parser.parse(loadResource("test.md"));

        String json = renderer.render(document);

        Assertions.assertEquals(loadResource("test.json"), json);
    }
}
