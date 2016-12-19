package name.aknights.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.bson.types.ObjectId;
import org.hibernate.validator.constraints.Length;
import org.mongodb.morphia.annotations.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity("holdings")
@Indexes(
        @Index(value = "symbol", fields = @Field("symbol"))
)
public class Holding {

    @Id
    private ObjectId id;

    @Length(max = 6)
    private String symbol;

    @Min(0)
    private int shares;

    @NotNull
    private Date tradeDate;

    @Min(0)
    private Double tradePrice;

    private Double commission;

    private Double initialMarketValue;

    public Holding() {
    }

    /* For use in tests */
    public Holding(String symbol, int shares, Date tradeDate, Double tradePrice, Double commission) {
        this.symbol = symbol;
        this.shares = shares;
        this.tradeDate = tradeDate;
        this.tradePrice = tradePrice;
        this.commission = commission;
        this.initialMarketValue = (shares * tradePrice) - ((commission != null) ? commission : 0.0);
    }

    @JsonProperty
    public String getId() {
        return (id != null) ? id.toHexString() : "";
    }

    @JsonProperty
    public void setId(String id) {
        this.id = null;
    }

    @JsonProperty
    public String getSymbol() {
        return symbol;
    }

    @JsonProperty
    public int getShares() {
        return shares;
    }

    @JsonProperty
    public Date getTradeDate() {
        return tradeDate;
    }

    @JsonProperty
    public Double getTradePrice() {
        return tradePrice;
    }

    @JsonProperty
    public Double getCommission() {
        return commission;
    }

    @JsonProperty
    public Double getInitialMarketValue() {
//        return this.initialMarketValue;
        return (shares * tradePrice) - ((commission != null) ? commission : 0.0);
    }

    @JsonProperty
    public void setInitialMarketValue(Double initialMarketValue) {
        this.initialMarketValue = initialMarketValue;
    }

    @JsonProperty
    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    @JsonProperty
    public void setShares(int shares) {
        this.shares = shares;
    }

    @JsonProperty
    public void setTradeDate(Date tradeDate) {
        this.tradeDate = tradeDate;
    }

    @JsonProperty
    public void setTradePrice(Double tradePrice) {
        this.tradePrice = tradePrice;
    }

    @JsonProperty
    public void setCommission(Double commission) {
        this.commission = commission;
    }

    @Override
    public String toString() {
        return "Holding{" +
                "id=" + getId() +
                ", symbol='" + symbol + '\'' +
                ", shares=" + shares +
                ", tradeDate=" + tradeDate +
                ", tradePrice=" + tradePrice +
                ", commission=" + commission +
                ", initialMarketValue=" + getInitialMarketValue() +
                '}';
    }
}