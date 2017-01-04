package name.aknights.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.Valid;
import java.io.UnsupportedEncodingException;

public class PortfolioManagerConfiguration extends Configuration {
    @Valid
    @JsonProperty
    private String env;

    @Valid
    @JsonProperty
    private DbConfiguration dbConfig;

    @Valid
    @JsonProperty
    private YahooQuotesConfiguration yahooConfig;

    @NotEmpty
    @JsonProperty
    private String jwtTokenSecret;

    @NotEmpty
    @JsonProperty
    private String expectedAudience;

    public byte[] getJwtTokenSecret() throws UnsupportedEncodingException {
        return jwtTokenSecret.getBytes("UTF-8");
    }

    public String getExpectedAudience() {
        return expectedAudience;
    }

    public String getEnv() {
        return env;
    }

    public DbConfiguration getDbConfig() {
        return dbConfig;
    }

    public YahooQuotesConfiguration getYahooConfig() {
        return yahooConfig;
    }
}
