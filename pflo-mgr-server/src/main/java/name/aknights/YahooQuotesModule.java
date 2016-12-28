package name.aknights;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import dagger.Module;
import dagger.Provides;
import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.services.QuotesService;
import name.aknights.services.YahooQuotesService;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.JerseyClientBuilder;

import javax.inject.Singleton;
import javax.ws.rs.client.Client;

@Module
public class YahooQuotesModule {

    private final YahooQuotesConfiguration config;

    public YahooQuotesModule(YahooQuotesConfiguration config) {
        this.config = config;
    }

    private Client getClient()  {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
        JacksonJaxbJsonProvider jacksonProvider = new JacksonJaxbJsonProvider();
        jacksonProvider.setMapper(objectMapper);
        Client client = new JerseyClientBuilder().newClient(new ClientConfig(jacksonProvider));
        return client;
    }

    @Singleton
    @Provides
    QuotesService provideQuotesService() {
        return new YahooQuotesService(getClient(), config);
    }

}