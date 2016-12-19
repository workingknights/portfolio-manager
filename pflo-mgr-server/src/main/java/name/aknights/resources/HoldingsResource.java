package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.api.Holding;
import name.aknights.services.HoldingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

@Path("/holding")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class HoldingsResource {
    private static final Logger logger = LoggerFactory.getLogger(HoldingsResource.class);

    private HoldingsService holdingsService;

    @Inject
    public HoldingsResource(HoldingsService holdingsService) {
        this.holdingsService = holdingsService;
    }

    @GET
    @Timed
    public Response listAll() {
        return Response.ok(new Data(holdingsService.allHoldings())).build();
    }

    @POST
    @Timed
    public Response add(@NotNull @Valid Holding newHolding) {
        Object id = holdingsService.addNewHolding(newHolding);
        logger.debug("add() - newHolding = {}, id = {}", newHolding, id);
        return Response.created(UriBuilder.fromResource(HoldingsResource.class).build(id)).build();
    }

    @DELETE
    @Timed
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        if (!holdingsService.deleteHolding(id)) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok().build();
    }
}
