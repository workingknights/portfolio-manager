package name.aknights.resources;

import name.aknights.api.Data;
import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.services.QuotesService;
import org.glassfish.jersey.client.JerseyClientBuilder;
import org.junit.Test;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.Response;

import static org.junit.Assert.*;

public class QuotesResourceTest {
    @Test
    public void returnsValidResponseWhenGivenMultipleTickers() throws Exception {
        Client client = new JerseyClientBuilder().build();
        YahooQuotesConfiguration yahooQuotesConfig = new YahooQuotesConfiguration("http://query.yahooapis.com/v1/public/yql");
        QuotesService quotesService = new QuotesService(client, yahooQuotesConfig);
        QuotesResource resource = new QuotesResource(quotesService);
        Response response = resource.getQuotes("VUSA.L,VWO");

        assertEquals(2, ((Data)response.getEntity()).getData().size());

    }

}