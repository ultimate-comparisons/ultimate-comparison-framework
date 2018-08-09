package wrapper;

import org.junit.jupiter.api.Test;

import java.nio.file.Path;
import java.nio.file.Paths;

public class ConverterTest {

    private Path getResourcePath(String name) throws Exception {
        return Paths.get(this.getClass().getClassLoader().getResource(name).toURI());
    }

    @Test
    public void testMain() throws Exception {
        String[] args = {
                "--input", getResourcePath("test.md").toString(),
                "--plainChildren", "{item:{1:true}}",
                "--children", "{item:{1:false}}"
        };

        Converter.main(args);
    }

    @Test
    public void testMultipleMain() throws Exception {
        String[] args = {
                "--input", getResourcePath("test.md").getParent().toString(),
                "--plainChildren", "{item:{1:true}}",
                "--children", "{item:{1:false}}"
        };

        Converter.main(args);
    }

}
