package name.aknights;

import com.github.toastshaman.dropwizard.auth.jwt.JwtAuthFilter;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import name.aknights.config.PortfolioManagerConfiguration;
import name.aknights.core.auth.User;
import name.aknights.db.MongoModule;
import name.aknights.module.AuthModule;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.jose4j.jwt.MalformedClaimException;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;
import org.jose4j.jwt.consumer.JwtContext;
import org.jose4j.keys.HmacKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;
import java.util.Optional;

public class PortfolioManagerApplication extends Application<PortfolioManagerConfiguration> {
    private static final Logger logger = LoggerFactory.getLogger(PortfolioManagerApplication.class);

    public static void main(final String[] args) throws Exception {
        new PortfolioManagerApplication().run(args);
    }

    @Override
    public String getName() {
        return "PortfolioManager";
    }

    @Override
    public void initialize(final Bootstrap<PortfolioManagerConfiguration> bootstrap) {
        // Enable variable substitution with environment variables
        bootstrap.setConfigurationSourceProvider(
                new SubstitutingSourceProvider(
                        bootstrap.getConfigurationSourceProvider(),
                        new EnvironmentVariableSubstitutor())
        );
        bootstrap.addBundle(new AssetsBundle( "/assets/", "/", "index.html") );
    }

    @Override
    public void run(final PortfolioManagerConfiguration configuration,
                    final Environment environment) throws Exception {
        PortfolioManagerComponent component;

        if (configuration.getEnv() == null || configuration.getEnv().equalsIgnoreCase("prod")) {
            component = DaggerPortfolioManagerComponent.builder()
                    .yahooQuotesModule(new YahooQuotesModule(configuration.getYahooConfig()))
                    .mongoModule(new MongoModule(configuration.getDbConfig(), environment))
                    .authModule(new AuthModule(configuration))
                    .build();
        }
        else {
            logger.info("*** Building Test Instance of PortfolioManager ***");
            component = DaggerTestPortfolioManagerComponent.builder()
                    .mongoModule(new MongoModule(configuration.getDbConfig(), environment))
                    .authModule(new AuthModule(configuration))
                    .build();
        }

        /* Auth start */
        environment.jersey().register(new AuthDynamicFeature(
                new JwtAuthFilter.Builder<User>()
                        .setJwtConsumer(component.getJwtConsumer())
                        .setRealm("realm")
                        .setPrefix("Bearer")
                        .setAuthenticator(new ExampleAuthenticator())
                        .buildAuthFilter()));

        environment.jersey().register(RolesAllowedDynamicFeature.class);
        // To allow use of @Auth to inject a custom Principal type into resources
        environment.jersey().register(new AuthValueFactoryProvider.Binder<>(Principal.class));
        /* Auth end */

        environment.jersey().setUrlPattern("/api/*");

        environment.jersey().register(component.getHoldingsResource());
        environment.jersey().register(component.getQuotesResource());
        environment.jersey().register(component.getPortfolioResource());

        environment.jersey().register(LogRequestFeature.class);

        environment.healthChecks().register("MongoHealthCheck", component.getMongoHealthCheck());

        component.getDatastore().ensureIndexes();
    }

    private static class ExampleAuthenticator implements Authenticator<JwtContext, User> {

        @Override
        public Optional<User> authenticate(JwtContext context) {
            // Provide your own implementation to lookup users based on the principal attribute in the
            // JWT Token. E.g.: lookup users from a database etc.
            // This method will be called once the token's signature has been verified

            // In case you want to verify different parts of the token you can do that here.
            // E.g.: Verifying that the provided token has not expired.

            // All JsonWebTokenExceptions will result in a 401 Unauthorized response.

            try {
                final String subject = context.getJwtClaims().getSubject();
                return Optional.of(new User(subject));
            }
            catch (MalformedClaimException e) { return Optional.empty(); }
        }
    }

}
