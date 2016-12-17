package name.aknights.db;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.bson.types.ObjectId;
import org.hibernate.validator.constraints.Length;
import org.mongodb.morphia.annotations.*;

import javax.validation.constraints.Min;

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

    public Holding() {
    }

    public Holding(String symbol) {
        this.symbol = symbol;
    }

    public Holding(ObjectId id, String symbol) {
        this.id = id;
        this.symbol = symbol;
    }

    @JsonProperty
    public String getId() {
        return id.toHexString();
    }

    @JsonProperty
    public String getSymbol() {
        return symbol;
    }

    @JsonProperty
    public int getShares() {
        return shares;
    }
}