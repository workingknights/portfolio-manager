package name.aknights;

import dagger.Module;
import dagger.Provides;
import org.glassfish.jersey.client.JerseyClientBuilder;

import javax.inject.Singleton;
import javax.ws.rs.client.Client;

@Module
public class JerseyModule {
    @Singleton
    @Provides
    Client providesClient()  {
        final Client client = new JerseyClientBuilder().build();
        return client;
    }
}
