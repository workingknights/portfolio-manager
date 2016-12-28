package name.aknights.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.*;

public class HoldingTest {

    @Test
    public void whenJsonIsValidHoldingIsCreated() throws IOException {
        String json = "{\"id\":\"\",\n" +
                "\"symbol\":\"VJPN.L\",\n" +
                "\"shares\":10,\n" +
                "\"tradePrice\":14.6,\n" +
                "\"commission\":0.25,\n" +
                "\"tradeDate\":\"2016-12-16\",\n" +
                "\"initialMarketValue\":0\n" +
                "}";

        ObjectMapper mapper = new ObjectMapper();
        Holding holding = mapper.readValue(json, Holding.class);

        assertNotNull(holding);
        assertEquals(146.0, holding.getInitialMarketValue(), 0.0);

        String outputJson = mapper.writeValueAsString(holding);
        assertNotNull(outputJson);
        assertTrue(outputJson.contains("initialMarketValue\":146.0"));
    }

}