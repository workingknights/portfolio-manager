package name.aknights;

import dagger.Component;
import name.aknights.db.MongoModule;
import name.aknights.health.MongoHealthCheck;
import name.aknights.module.AuthModule;
import name.aknights.resources.HoldingsResource;
import name.aknights.resources.ModelResource;
import name.aknights.resources.PortfolioResource;
import name.aknights.resources.QuotesResource;
import name.aknights.resources.SandboxResource;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.mongodb.morphia.Datastore;

import javax.inject.Singleton;

@Singleton
@Component(modules = {PortfolioManagerModule.class, YahooQuotesModule.class, AuthModule.class, MongoModule.class})
public interface PortfolioManagerComponent {
    // Resources
    HoldingsResource getHoldingsResource();
    QuotesResource getQuotesResource();
    PortfolioResource getPortfolioResource();
    ModelResource getModelResource();
    SandboxResource getSandboxResource();

    Datastore getDatastore();

    MongoHealthCheck getMongoHealthCheck();

    JwtConsumer getJwtConsumer();
}
