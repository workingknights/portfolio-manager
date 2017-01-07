package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.db.HoldingDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.groupingBy;

public class HoldingsService {

    private static final Logger logger = LoggerFactory.getLogger(HoldingsService.class);

    private HoldingDAO holdingDAO;
    private QuotesService quotesService;
    private FxRatesService fxRatesService;

    @Inject
    public HoldingsService(HoldingDAO holdingDAO, QuotesService quotesService, FxRatesService fxRatesService) {
        this.holdingDAO = holdingDAO;
        this.quotesService = quotesService;
        this.fxRatesService = fxRatesService;
    }

    public Collection<Holding> allHoldings() {
        if (logger.isDebugEnabled()) logger.debug("allHoldings()");

        Collection<Holding> holdings = holdingDAO.getHoldings();
        Map<String, List<Holding>> holdingsMap = holdings.stream().collect(groupingBy(Holding::getSymbol));

        Map<String, List<QuoteDetail>> tickerCurrencyMap = quotesService.getQuotes(holdingsMap.keySet()).stream().collect(groupingBy(QuoteDetail::getSymbol));

        for (Holding holding: holdings) {
            String currency = tickerCurrencyMap.get(holding.getSymbol()).get(0).getCurrency();
            BigDecimal fxRate = new BigDecimal(fxRatesService.getRate(currency));
            BigDecimal marketValueBase = new BigDecimal(holding.getInitialMarketValue()).divide(fxRate, MathContext.DECIMAL64);
            holding.setInitialMarketValueBase(marketValueBase);
            holding.setCurrency(currency);
        }
        return holdings;

    }

    public Object addNewHolding(Holding holding) {
        return holdingDAO.save(holding).getId();
    }

    public boolean deleteHolding(String id) {
        return holdingDAO.deleteHolding(id);
    }

}
