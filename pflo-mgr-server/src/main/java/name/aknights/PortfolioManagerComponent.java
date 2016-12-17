package name.aknights;

import dagger.Component;
import name.aknights.db.MongoModule;
import name.aknights.health.MongoHealthCheck;
import name.aknights.resources.HoldingsResource;
import name.aknights.resources.PortfolioResource;
import name.aknights.resources.QuotesResource;
import org.mongodb.morphia.Datastore;

import javax.inject.Singleton;

@Singleton
@Component(modules = {PortfolioManagerModule.class, MongoModule.class, JerseyModule.class})
public interface PortfolioManagerComponent {
    // Resources
    HoldingsResource getHoldingsResource();
    QuotesResource getQuotesResource();
    PortfolioResource getPortfolioResource();

    Datastore getDatastore();

    MongoHealthCheck getMongoHealthCheck();
}
