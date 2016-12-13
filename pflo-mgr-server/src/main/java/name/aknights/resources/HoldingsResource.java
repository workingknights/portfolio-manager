package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.db.Holding;
import name.aknights.db.HoldingDAO;
import org.mongodb.morphia.Key;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Path("/holding")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class HoldingsResource {

    private HoldingDAO holdingDAO;

    @Inject
    public HoldingsResource(HoldingDAO holdingDAO) {
        this.holdingDAO = holdingDAO;
    }

    @GET
    @Timed
    public Data listAll() {
        final Collection<Holding> holdings = holdingDAO.getHoldings();

        List<name.aknights.api.Holding> response = new ArrayList<>();
        holdings.forEach(holdingDto -> response.add(
                new name.aknights.api.Holding(holdingDto.getId().toHexString(), holdingDto.getSymbol())));

        Data data = new Data(response);
        return data;
    }

    @POST
    @Timed
    public Response add(@NotNull @Valid name.aknights.api.Holding newHolding) {
        Holding holding = new Holding(newHolding.getSymbol());
        Key<Holding> key = holdingDAO.save(holding);
                return Response.created(UriBuilder.fromResource(HoldingsResource.class).build(key.getId())).build();
    }

    @DELETE
    @Timed
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        if (!holdingDAO.deleteHolding(id)) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok().build();
    }
}
