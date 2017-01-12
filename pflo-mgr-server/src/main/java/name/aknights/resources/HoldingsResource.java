package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import io.dropwizard.auth.Auth;
import name.aknights.api.Data;
import name.aknights.api.Holding;
import name.aknights.services.HoldingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import java.security.Principal;

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
    @PermitAll
    @Timed
    public Response listAll(@Auth Principal principal) {
        return Response.ok(new Data<>(holdingsService.allHoldings())).build();
    }

    @POST
    @PermitAll
    @Timed
    public Response add(@NotNull @Valid Holding newHolding, @Auth Principal principal) {
        Object id = holdingsService.addNewHolding(newHolding);
        logger.debug("addEntry() - newHolding = {}, id = {}", newHolding, id);
        return Response.created(UriBuilder.fromResource(HoldingsResource.class).build(id)).build();
    }

    @DELETE
    @PermitAll
    @Timed
    @Path("/{id}")
    public Response delete(@PathParam("id") String id, @Auth Principal principal) {
        if (!holdingsService.deleteHolding(id)) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok().build();
    }

}
