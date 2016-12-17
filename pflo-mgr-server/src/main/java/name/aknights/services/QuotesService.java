package name.aknights.services;

import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.core.quotes.QuotesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.ws.rs.client.Client;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

public class QuotesService {

    Logger logger = LoggerFactory.getLogger(QuotesService.class);

    private Client client;
    private String apiUrl = "http://query.yahooapis.com/v1/public/yql";

    @Inject
    public QuotesService(Client client, YahooQuotesConfiguration yahooQuotesConfiguration) {
        this.client = client;
        this.apiUrl = yahooQuotesConfiguration.getApiUrl();
    }

    public Collection<QuoteDetail>  getQuotes(Collection<String> symbols) {
        String origSymbolQueryParam = String.format("select * from yahoo.finance.quotes where symbol in (%s)", String.join(",", symbols));
        String symbolQueryParam = origSymbolQueryParam.replace(" ", "%20");
        symbolQueryParam = symbolQueryParam.replace("(", "%28%22");
        symbolQueryParam = symbolQueryParam.replace(")", "%22%29");

        if (logger.isDebugEnabled()) logger.debug("origSymbolQueryParam = {}, symbolQueryParam = {}", origSymbolQueryParam, symbolQueryParam);

        QuotesResponse quotesData = client.target(apiUrl)
                .queryParam("q", symbolQueryParam)
                .queryParam("format", "json")
                .queryParam("env", "store://datatables.org/alltableswithkeys")
                .request(MediaType.APPLICATION_JSON)
                .get(QuotesResponse.class);

        return quotesData.getQuery().getResults().getQuote();
    }
}
