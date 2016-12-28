package name.aknights.core.quotes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Optional;

/**
 * {
 * "symbol":"VWO","Ask":null,"AverageDailyVolume":"16184400","Bid":null,"AskRealtime":null,"BidRealtime":null,"BookValue":"0.00",
 * "Change_PercentChange":null,"Change":null,"Commission":null,"Currency":"USD","ChangeRealtime":null,
 * "AfterHoursChangeRealtime":null,"DividendShare":"1.54","LastTradeDate":"12/12/2016","TradeDate":null,
 * "EarningsShare":"-8.20","ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":null,
 * "EPSEstimateNextYear":null,"EPSEstimateNextQuarter":"0.00","DaysLow":null,"DaysHigh":null,"YearLow":"27.98",
 * "YearHigh":"38.87","HoldingsGainPercent":null,"AnnualizedGain":null,"HoldingsGain":null,
 * "HoldingsGainPercentRealtime":null,"HoldingsGainRealtime":null,"MoreInfo":null,"OrderBookRealtime":null,
 * "MarketCapitalization":null,"MarketCapRealtime":null,"EBITDA":null,"ChangeFromYearLow":"8.42",
 * "PercentChangeFromYearLow":"+30.09%","LastTradeRealtimeWithTime":null,"ChangePercentRealtime":null,
 * "ChangeFromYearHigh":"-2.47","PercebtChangeFromYearHigh":"-6.35%",
 * "LastTradeWithTime":"4:00pm - <b>36.40</b>","LastTradePriceOnly":"36.40","HighLimit":null,
 * "LowLimit":null,"DaysRange":null,"DaysRangeRealtime":null,"FiftydayMovingAverage":"36.54",
 * "TwoHundreddayMovingAverage":"36.60","ChangeFromTwoHundreddayMovingAverage":"-0.20",
 * "PercentChangeFromTwoHundreddayMovingAverage":"-0.55%","ChangeFromFiftydayMovingAverage":"-0.14",
 * "PercentChangeFromFiftydayMovingAverage":"-0.38%","Name":"Vanguard FTSE Emerging Markets","Notes":null,
 * "Open":null,"PreviousClose":"36.40","PricePaid":null,"ChangeinPercent":null,"PriceSales":null,
 * "PriceBook":null,"ExDividendDate":null,"PERatio":null,"DividendPayDate":null,"PERatioRealtime":null,
 * "PEGRatio":"0.00","PriceEPSEstimateCurrentYear":null,"PriceEPSEstimateNextYear":null,"Symbol":"VWO",
 * "SharesOwned":null,"ShortRatio":null,"LastTradeTime":"4:00pm","TickerTrend":null,"OneyrTargetPrice":null,
 * "Volume":"0","HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":"27.98 - 38.87",
 * "DaysValueChange":null,"DaysValueChangeRealtime":null,"StockExchange":"PCX","DividendYield":"4.80",
 * "PercentChange":null
 * }
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuoteDetail {
    @JsonProperty("symbol")
    private String ticker;

    @JsonProperty("PreviousClose")
    private Double previousClose;

    @JsonProperty("Open")
    private Double open;

    @JsonProperty("Currency")
    private String currency;

    @JsonProperty("Ask")
    private Double ask;

    @JsonProperty("LastTradePriceOnly")
    private Double lastTradePrice;

    @JsonProperty("FiftydayMovingAverage")
    private Double ma50Day;

    @JsonProperty("TwoHundreddayMovingAverage")
    private Double ma200Day;

    @JsonProperty("PercentChange")
    private String percentChange;

    @JsonProperty("Change")
    private String change;

    @JsonProperty("YearLow")
    private Double yearLow;

    @JsonProperty("YearHigh")
    private Double yearHigh;

    @JsonProperty("PercentChangeFromYearLow")
    private String percentChangeFromYearLow;

    @JsonProperty("PercebtChangeFromYearHigh")
    private String percentChangeFromYearHigh;

    public QuoteDetail() {
    }

    public QuoteDetail(String ticker, Double previousClose, Double open, String currency, Double ask, Double lastTradePrice,
                       Double ma50Day, Double ma200Day, String percentChange, String change, Double yearLow, Double yearHigh,
                       String percentChangeFromYearLow, String percentChangeFromYearHigh) {
        this.ticker = ticker;
        this.previousClose = previousClose;
        this.open = open;
        this.currency = currency;
        this.ask = ask;
        this.lastTradePrice = lastTradePrice;
        this.ma50Day = ma50Day;
        this.ma200Day = ma200Day;
        this.percentChange = percentChange;
        this.change = change;
        this.yearLow = yearLow;
        this.yearHigh = yearHigh;
        this.percentChangeFromYearLow = percentChangeFromYearLow;
        this.percentChangeFromYearHigh = percentChangeFromYearHigh;
    }

    /*
         * Used in tests
         */
    QuoteDetail(String ticker, Double lastTradePrice) {
        this.ticker = ticker;
        this.lastTradePrice = lastTradePrice;
    }

    /*
     * Used in tests
     */
    QuoteDetail(String percentChange, String percentChangeFromYearLow, String percentChangeFromYearHigh) {
        this.percentChange = percentChange;
        this.percentChangeFromYearLow = percentChangeFromYearLow;
        this.percentChangeFromYearHigh = percentChangeFromYearHigh;
    }

    public String getTicker() {
        return ticker;
    }

    public Optional<Double> getPreviousClose() {
        return Optional.ofNullable(previousClose);
    }

    public Double getOpen() {
        return open;
    }

    public String getCurrency() {
        return currency;
    }

    public Optional<Double> getAsk() {
        return Optional.ofNullable(ask);
    }

    public Double getMa50Day() {
        return ma50Day;
    }

    public Double getMa200Day() {
        return ma200Day;
    }

    public Double getPercentChange() {
        if (percentChange.startsWith("+"))
            return Double.parseDouble(percentChange.substring(1, percentChange.length() - 1)) / 100;
        else
            return Double.parseDouble(percentChange.substring(0, percentChange.length() - 1)) / 100;
    }

    public Double getChange() {
        if (change.startsWith("+"))
            return Double.parseDouble(change.substring(1, change.length()));
        else
            return Double.parseDouble(change.substring(0, change.length()));
    }

    public Double getLastTradePrice() {
        return lastTradePrice;
    }

    public Double getYearLow() {
        return yearLow;
    }

    public Double getYearHigh() {
        return yearHigh;
    }

    public Double getPercentChangeFromYearLow() {
        if (percentChangeFromYearLow.startsWith("+"))
            return Double.parseDouble(percentChangeFromYearLow.substring(1, percentChangeFromYearLow.length() - 1));
        else
            return Double.parseDouble(percentChangeFromYearLow.substring(0, percentChangeFromYearLow.length() - 1));
    }

    public Double getPercentChangeFromYearHigh() {
        if (percentChangeFromYearHigh.startsWith("+"))
            return Double.parseDouble(percentChangeFromYearHigh.substring(1, percentChangeFromYearHigh.length() - 1));
        else
            return Double.parseDouble(percentChangeFromYearHigh.substring(0, percentChangeFromYearHigh.length() - 1));
    }
}
