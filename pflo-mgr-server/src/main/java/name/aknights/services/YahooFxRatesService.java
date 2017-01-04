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
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class YahooFxRatesService extends YahooQuotesService implements FxRatesService {

    Logger logger = LoggerFactory.getLogger(YahooFxRatesService.class);

    @Inject
    public YahooFxRatesService(Client client, YahooQuotesConfiguration yahooQuotesConfiguration) {
        super(client, yahooQuotesConfiguration);
    }

    @Override
    public Double getRate(String currency) {
        if (currency.equals("GBp")) {
            Optional<QuoteDetail> quote = this.getQuote("GBP=X");
            if (quote.isPresent()) {
                return quote.get().getLastTradePrice()*100;
            } else {
                logger.warn("No FX rate found to USD for {} currency", currency);
                return 1.0;
            }
        }
        else {
            Optional<QuoteDetail> quote = this.getQuote(currency + "=X");
            if (quote.isPresent()) {
                return quote.get().getLastTradePrice();
            } else {
                logger.warn("No FX rate found to USD for {} currency", currency);
                return 1.0;
            }
        }
    }
}
