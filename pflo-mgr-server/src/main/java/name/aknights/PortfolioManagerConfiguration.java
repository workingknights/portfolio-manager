package name.aknights;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.*;
import javax.validation.constraints.*;

public class PortfolioManagerConfiguration extends Configuration {

    @NotEmpty
    private String mongoDbUri;

    @NotEmpty
    private String mongoDbName;

    @JsonProperty
    public String getMongoDbUri() {
        return mongoDbUri;
    }

    @JsonProperty
    public void setMongoDbUri(String mongoDbUri) {
        this.mongoDbUri = mongoDbUri;
    }

    @JsonProperty
    public String getMongoDbName() {
        return mongoDbName;
    }

    @JsonProperty
    public void setMongoDbName(String mongoDbName) {
        this.mongoDbName = mongoDbName;
    }
}
