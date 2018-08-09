package wrapper;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializer;
import com.google.gson.reflect.TypeToken;
import com.vladsch.flexmark.ast.Node;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataSet;
import json.converter.JsonConverterExtension;
import json.converter.internal.JsonConverterNodeRenderer;
import org.apache.commons.cli.*;
import org.apache.log4j.PropertyConfigurator;
import org.eclipse.collections.impl.factory.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Converter {
    private static final Logger LOGGER = LoggerFactory.getLogger(Converter.class);

    private final Path input;
    private final Boolean multiple;
    private final Gson gson;
    private Path output;
    private Path tmp;
    private Map<String, Map<String, Map<String, Boolean>>> options = Maps.mutable.with();

    private Converter(Path input) {
        PropertyConfigurator.configure(Converter.class.getClassLoader().getResource("log4j.properties"));

        this.input = input;

        if (Files.isDirectory(input)) {
            this.multiple = true;
            this.output = input.resolve("data.json");
            createTmpDirectory(null);
        } else {
            this.multiple = false;
            this.output = convertFileName(input);
        }

        this.gson = new GsonBuilder().
                registerTypeAdapter(Double.class, (JsonSerializer<Double>) (src, typeOfSrc, context) -> {
                    if (src == src.longValue())
                        return new JsonPrimitive(src.longValue());
                    return new JsonPrimitive(src);
                }).create();
    }

    public static void main(String args[]) {
        Options options = new Options();
        options
                .addOption(Option.builder("i")
                        .required(true)
                        .desc("Select a markdown file or a folder containing markdown file")
                        .longOpt("input")
                        .hasArg()
                        .build())
                .addOption(Option.builder("o")
                        .required(false)
                        .desc("Select the output file (if input is a folder this file will contain all converted markdown files")
                        .longOpt("output")
                        .hasArg()
                        .build())
                .addOption(Option.builder("t")
                        .required(false)
                        .desc("Select a temporary directory for converted files")
                        .longOpt("tmp")
                        .hasArg()
                        .build())
                .addOption(Option.builder("c")
                        .required(false)
                        .desc("Select which children should (not) be rendered: --children '{type:{level:boolean}}' " +
                                "with type= header|item|list, level= integer and default is true")
                        .longOpt("children")
                        .hasArg()
                        .build())
                .addOption(Option.builder("p")
                        .required(false)
                        .desc("Select which plainChildren should not be rendered: --plainChildren '{type:{level:boolean}}' " +
                                "with type= header|item|list, level= integer and default is false")
                        .longOpt("plainChildren")
                        .hasArg()
                        .build());

        CommandLineParser parser = new DefaultParser();

        try {
            CommandLine commandLine = parser.parse(options, args);

            Converter converter = new Converter(Paths.get(commandLine.getOptionValue("i")));

            if (commandLine.hasOption("o")) {
                converter.setOutput(Paths.get(commandLine.getOptionValue("o")));
            }

            if (commandLine.hasOption("t")) {
                converter.setTmp(Paths.get(commandLine.getOptionValue("t")));
            }

            if (commandLine.hasOption("c")) {
                converter.setOptions("children", commandLine.getOptionValue("c"));
            }

            if (commandLine.hasOption("p")) {
                converter.setOptions("plainChildren", commandLine.getOptionValue("p"));
            }

            converter.convert();

        } catch (ParseException e) {
            LOGGER.error("Parse error ", e);
        }

    }

    private void setTmp(Path tmp) {
        this.tmp = tmp;
        if (!Files.exists(tmp)) {
            try {
                Files.createDirectories(tmp);
            } catch (IOException e) {
                LOGGER.error("Could not create tmp directory: ", e);
            }
        }
    }

    private void setOptions(String name, String value) {
        options.put(name, gson.fromJson(value, new TypeToken<Map<String, Map<String, Boolean>>>() {
        }.getType()));
    }

    private void setOutput(Path output) {
        this.output = output;
    }

    private void convert() {
        if (multiple) {
            createTmpDirectory(tmp);

            List list = getMarkdownFiles(input)
                    .map(this::convert)
                    .map(value -> gson.fromJson(value, List.class))
                    .flatMap(List::stream)
                    .collect(Collectors.toList());
            writeFile(output, gson.toJson(list));
        } else {
            convert(input, output);
        }
    }

    private String convert(Path in) {
        return convert(in, null);
    }

    private String convert(Path in, Path out) {
        MutableDataSet flexmarkOptions = new MutableDataSet();
        flexmarkOptions.set(Parser.EXTENSIONS, Collections.singletonList(JsonConverterExtension.create()));
        flexmarkOptions.set(HtmlRenderer.INDENT_SIZE, 2);
        flexmarkOptions.set(JsonConverterNodeRenderer.PLAIN_CHILDREN, options.get("plainChildren"));
        flexmarkOptions.set(JsonConverterNodeRenderer.CHILDREN, options.get("children"));

        Parser parser = Parser.builder(flexmarkOptions).build();
        HtmlRenderer renderer = HtmlRenderer.builder(flexmarkOptions).build();

        Node document = parser.parse(readFile(in));
        String result = renderer.render(document);

        List list = gson.fromJson(result, List.class);
        result = gson.toJson(list);

        if (!multiple) {
            writeFile(out, result);
        } else if (Objects.nonNull(tmp)) {
            writeFile(tmp.resolve(convertFileName(in).getFileName()), result);
        }

        return result;
    }

    private Path convertFileName(Path path) {
        String filename = path.getFileName().toString();
        filename = filename.substring(0, filename.lastIndexOf("."));
        return path.resolveSibling(filename + ".json");
    }

    private String readFile(Path path) {
        String result = "";
        try {
            result = new String(Files.readAllBytes(path));
        } catch (IOException e) {
            LOGGER.error("Could not read file {}", path);
            LOGGER.error("Error: {}", e);
        }
        return result;
    }

    private void writeFile(Path path, String msg) {
        try {
            Files.createDirectories(path.getParent());
            Files.write(path, msg.getBytes());
        } catch (IOException e) {
            LOGGER.error("Could not write file {}", path);
            LOGGER.error("Error: {}", e);
        }
    }

    private void createTmpDirectory(Path path) {
        if (Objects.nonNull(path) && !Files.exists(path)) {
            try {
                this.tmp = Files.createDirectories(path);
            } catch (IOException e) {
                LOGGER.error("Could not create tmp directory {}", path);
                LOGGER.error("Error: {}", e);
            }
        } else if (Objects.isNull(path)) {
            String prefix = "json-converter";
            try {
                this.tmp = Files.createTempDirectory(prefix);
            } catch (IOException e) {
                LOGGER.error("Could not create tmp directory with prefix {}", prefix);
                LOGGER.error("Error: {}", e);
            }
        }
    }

    private Stream<Path> getMarkdownFiles(Path path) {
        Stream<Path> result = Stream.empty();
        try {
            result = Files.list(path)
                    .filter(Objects::nonNull)
                    .filter(p -> p.toString().endsWith(".md"));
        } catch (IOException e) {
            LOGGER.error("Could not get markdown files for path {}", path);
            LOGGER.error("Error: ", e);
        }
        return result;
    }
}
