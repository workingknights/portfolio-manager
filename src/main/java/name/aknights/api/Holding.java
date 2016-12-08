package name.aknights.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;

public class Holding {
    private String id;

    @Length(max = 6)
    private String symbol;

    public Holding(String id, String symbol) {
        this.id = id;
        this.symbol = symbol;
    }

    @JsonProperty
    public String getId() {
        return id;
    }

    @JsonProperty
    public String getSymbol() {
        return symbol;
    }
}
