package name.aknights;

import dagger.Component;
import name.aknights.db.MongoModule;
import name.aknights.health.MongoHealthCheck;
import name.aknights.resources.HoldingsResource;
import org.mongodb.morphia.Datastore;

import javax.inject.Singleton;

@Singleton
@Component(modules = {MongoModule.class})
public interface PortfolioManagerComponent {
    // Resources
    HoldingsResource getHoldingsResource();

    Datastore getDatastore();

    MongoHealthCheck getMongoHealthCheck();

}
