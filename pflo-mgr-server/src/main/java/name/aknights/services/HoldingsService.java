package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.db.HoldingDAO;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

public class HoldingsService {

    private HoldingDAO holdingDAO;
    private QuotesService quotesService;

    @Inject
    public HoldingsService(HoldingDAO holdingDAO, QuotesService quotesService) {
        this.holdingDAO = holdingDAO;
        this.quotesService = quotesService;
    }

    public Collection<Holding> allHoldings() {

        Collection<Holding> holdings = holdingDAO.getHoldings();
        Map<String, List<Holding>> holdingsMap = holdings.stream().collect(groupingBy(Holding::getSymbol));

        Map<String, List<QuoteDetail>> tickerCurrencyMap = quotesService.getQuotes(holdingsMap.keySet()).stream().collect(groupingBy(QuoteDetail::getSymbol));

        Map<String, Double> fxRatesMap = quotesService.getQuotes(Arrays.asList("GBP=X")).stream()
                .collect(groupingBy(QuoteDetail::getCurrency, Collectors.summingDouble(QuoteDetail::getLastTradePrice)));
        fxRatesMap.put("GBp", fxRatesMap.get("GBP") * 100); // add 'GBp' rate for pence rather than pounds
        fxRatesMap.put("USD", 1.0);

        for (Holding holding: holdings) {
            String currency = tickerCurrencyMap.get(holding.getSymbol()).get(0).getCurrency();
            BigDecimal fxRate = new BigDecimal(fxRatesMap.get(currency));
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
