package name.aknights.services;

import com.codahale.metrics.annotation.Timed;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.core.quotes.QuotesResponse;
import name.aknights.config.YahooQuotesConfiguration;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.client.Client;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

public class QuotesService {

    private Client client;
    String apiUrl = "http://query.yahooapis.com/v1/public/yql";

    @Inject
    public QuotesService(Client client, YahooQuotesConfiguration yahooQuotesConfiguration) {
        this.client = client;
        this.apiUrl = yahooQuotesConfiguration.getApiUrl();
    }

    @GET
    @Timed
    public Collection<QuoteDetail> allQuotes() {
        QuotesResponse quotesData = client.target(apiUrl)
                .queryParam("q", "select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22VWO,GLD,SLV%22%29")
                .queryParam("format", "json")
                .queryParam("env", "store://datatables.org/alltableswithkeys")
                .request(MediaType.APPLICATION_JSON)
                .get(QuotesResponse.class);

        return quotesData.getQuery().getResults().getQuote();
    }
}
