package name.aknights.db;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Entity("holdings")
@Indexes(
        @Index(value = "symbol", fields = @Field("symbol"))
)
public class Holding {
    @Id
    private ObjectId id;
    private String symbol;

    public Holding() {
    }

    public Holding(String symbol) {
        this.symbol = symbol;
    }

    public ObjectId getId() {
        return id;
    }

    public String getSymbol() {
        return symbol;
    }
}