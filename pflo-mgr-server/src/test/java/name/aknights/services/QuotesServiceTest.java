package name.aknights.services;

import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.core.quotes.QuoteDetail;
import org.glassfish.jersey.client.JerseyClientBuilder;
import org.junit.Test;

import javax.ws.rs.client.Client;
import java.util.Arrays;
import java.util.Collection;

import static org.junit.Assert.assertEquals;

public class QuotesServiceTest {
    @Test
    public void quotesReturnedWhenParamsAreValid() throws Exception {
        Client client = new JerseyClientBuilder().build();
        YahooQuotesConfiguration yahooQuotesConfig = new YahooQuotesConfiguration("http://query.yahooapis.com/v1/public/yql");

        QuotesService quotesService = new QuotesService(client, yahooQuotesConfig);
        Collection<QuoteDetail> quotes = quotesService.getQuotes(Arrays.asList("VWO","GLD","SLV"));
//        Collection<QuoteDetail> quotes = quotesService.allQuotes();

        assertEquals(3, quotes.size());
    }

}