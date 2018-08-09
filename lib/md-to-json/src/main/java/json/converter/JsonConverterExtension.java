package json.converter;

import com.vladsch.flexmark.Extension;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataHolder;
import json.converter.internal.JsonConverterNodeRenderer;

public class JsonConverterExtension implements Parser.ParserExtension, HtmlRenderer.HtmlRendererExtension {
    private JsonConverterExtension() {

    }

    public static Extension create() {
        return new JsonConverterExtension();
    }

    @Override
    public void rendererOptions(MutableDataHolder options) {
        final String rendererType = HtmlRenderer.TYPE.getFrom(options);
        if (rendererType.equals("HTML")) {
            options.set(HtmlRenderer.TYPE, "JSON");
        } else if (!rendererType.equals("JSON")) {
            throw new IllegalStateException("Non HTML Renderer is already set to " + rendererType);
        }
    }

    @Override
    public void extend(HtmlRenderer.Builder rendererBuilder, String rendererType) {
        if (rendererType.equals("JSON")) {
            rendererBuilder.nodeRendererFactory(new JsonConverterNodeRenderer.Factory());
        } else {
            throw new IllegalStateException("JSON Converter Extension used with non JSON Renderer " + rendererType);
        }
    }

    @Override
    public void parserOptions(MutableDataHolder options) {

    }

    @Override
    public void extend(Parser.Builder parserBuilder) {

    }

}
