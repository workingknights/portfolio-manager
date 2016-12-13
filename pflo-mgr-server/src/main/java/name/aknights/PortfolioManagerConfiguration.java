package name.aknights;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

import javax.validation.Valid;

public class PortfolioManagerConfiguration extends Configuration {
    @Valid
    @JsonProperty
    private DbConfiguration dbConfig;

    public DbConfiguration getDbConfig() {
        return dbConfig;
    }
}
