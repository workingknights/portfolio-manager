package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import com.mongodb.MongoClient;
import name.aknights.api.Data;
import name.aknights.db.Holding;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("portfolio-manager")
@Produces(MediaType.APPLICATION_JSON)
public class PortfolioManagerResource {

    final Datastore datastore;

    public PortfolioManagerResource() {

        // setup up morphia
        final Morphia morphia = new Morphia();

        // tell Morphia where to find your classes
        // can be called multiple times with different packages or classes
        morphia.mapPackage("name.aknights.db");

        // create the Datastore connecting to the default port on the local host
        datastore = morphia.createDatastore(new MongoClient(), "portfolio");
        datastore.ensureIndexes();
    }

    @GET
    @Timed
    public Data listHoldings() {
        final Query<Holding> query = datastore.createQuery(Holding.class);
        final List<Holding> holdings = query.asList();

        List<name.aknights.api.Holding> response = new ArrayList<>();
        holdings.forEach(holdingDto -> response.add(
                new name.aknights.api.Holding(holdingDto.getId().toHexString(), holdingDto.getSymbol())));

        Data data = new Data(response);
        return data;
    }
}
