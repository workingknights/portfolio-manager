package name.aknights.services;

import name.aknights.core.quotes.QuoteDetail;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public class LocalQuotesService implements QuotesService {

    private QuoteDetail gbpFxRate = generateQuote("GBP=X", "GBP");

    @Override
    public Collection<QuoteDetail> getQuotes(Collection<String> tickers) {
        List<QuoteDetail> quotes = new ArrayList<>();
        for (String ticker: tickers) {
            QuoteDetail quote = generateQuote(ticker, ccy());

            quotes.add(quote);
        }
        return quotes;
    }

    @Override
    public Optional<QuoteDetail> getQuote(String ticker) {
        QuoteDetail quote;
        if (ticker.equals("GBP"))
            quote = gbpFxRate;
        else
            quote = generateQuote(ticker, ccy());

        return Optional.of(quote);
    }

    private QuoteDetail generateQuote(String ticker, String currency) {
        return new QuoteDetail(ticker, ticker+" Name", rand(100.0), rand(100.0), currency, rand(100.0),
                rand(100.0), rand(100.0), rand(100.0), String.format("+%s",rand(1.0))+"%",
                String.format("+%s",rand(1.0)), rand(100.0), rand(100.0), "+1.2%", "-2.3%");
    }

    private String ccy() {
        double r = Math.random();
        if (r < 0.5) return "USD";
        else return "GBP";
    }

    private double rand(double cap) {
        return Math.random()*cap;
    }

}
