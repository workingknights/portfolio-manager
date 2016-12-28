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
import java.util.Optional;

public class YahooQuotesService implements QuotesService {

    Logger logger = LoggerFactory.getLogger(YahooQuotesService.class);

    private Client client;
    private String apiUrl = "http://query.yahooapis.com/v1/public/yql";

    @Inject
    public YahooQuotesService(Client client, YahooQuotesConfiguration yahooQuotesConfiguration) {
        this.client = client;
        this.apiUrl = yahooQuotesConfiguration.getApiUrl();
    }

    @Override
    public Collection<QuoteDetail> getQuotes(Collection<String> tickers) {
        String origSymbolQueryParam = String.format("select * from yahoo.finance.quotes where symbol in (%s)", String.join(",", tickers));
        String symbolQueryParam = origSymbolQueryParam.replace(" ", "%20");
        symbolQueryParam = symbolQueryParam.replace("(", "%28%22");
        symbolQueryParam = symbolQueryParam.replace(")", "%22%29");

        if (logger.isDebugEnabled()) logger.debug("origSymbolQueryParam = {}, symbolQueryParam = {}", origSymbolQueryParam, symbolQueryParam);

        QuotesResponse quotesData = getQuotesResponse(symbolQueryParam);

        return quotesData.getQuery().getResults().getQuote();
    }

    @Override
    public Optional<QuoteDetail> getQuote(String ticker) {
        String origSymbolQueryParam = String.format("select * from yahoo.finance.quotes where symbol = %s", ticker);
        String symbolQueryParam = origSymbolQueryParam.replace(" ", "%20");

        if (logger.isDebugEnabled()) logger.debug("origSymbolQueryParam = {}, symbolQueryParam = {}", origSymbolQueryParam, symbolQueryParam);

        QuotesResponse quotesData = getQuotesResponse(symbolQueryParam);

        return quotesData.getQuery().getResults().getQuote().stream().findFirst();
    }

    private QuotesResponse getQuotesResponse(String symbolQueryParam) {
        return client.target(apiUrl)
                .queryParam("q", symbolQueryParam)
                .queryParam("format", "json")
                .queryParam("env", "store://datatables.org/alltableswithkeys")
                .request(MediaType.APPLICATION_JSON)
                .get(QuotesResponse.class);
    }
}
