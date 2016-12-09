package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import name.aknights.api.Data;
import name.aknights.db.Holding;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import java.util.ArrayList;
import java.util.List;

@Path("portfolio-manager")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PortfolioManagerResource {

    final Datastore datastore;

    public PortfolioManagerResource(String mongoDbUri, String mongoDbName) {

        // setup up morphia
        final Morphia morphia = new Morphia();

        // tell Morphia where to find your classes
        // can be called multiple times with different packages or classes
        morphia.mapPackage("name.aknights.db");

        // create the Datastore
        MongoClientURI uri = new MongoClientURI(mongoDbUri);
        MongoClient mongoClient = new MongoClient(uri);
        datastore = morphia.createDatastore(mongoClient, mongoDbName);
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

    @POST
    @Timed
    public Response addHolding(@NotNull @Valid name.aknights.api.Holding newHolding) {
        Holding holding = new Holding(newHolding.getSymbol());
        Key<Holding> key = datastore.save(holding);

        return Response.created(UriBuilder.fromResource(PortfolioManagerResource.class).build(key.getId())).build();

    }

}
