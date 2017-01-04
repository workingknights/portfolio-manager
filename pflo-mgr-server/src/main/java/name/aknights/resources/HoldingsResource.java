package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import com.google.common.collect.ImmutableMap;
import io.dropwizard.auth.Auth;
import name.aknights.api.Data;
import name.aknights.api.Holding;
import name.aknights.core.auth.User;
import name.aknights.services.HoldingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import java.security.Principal;
import java.util.Map;

@Path("/holding")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class HoldingsResource {
    private static final Logger logger = LoggerFactory.getLogger(HoldingsResource.class);

    private final byte[] tokenSecret;

    private HoldingsService holdingsService;

    @Inject
    public HoldingsResource(HoldingsService holdingsService, byte[] tokenSecret) {
        this.holdingsService = holdingsService;
        this.tokenSecret = tokenSecret;

    }

    @GET
    @PermitAll
    @Timed
    public Response listAll(@Auth Principal principal) {
        return Response.ok(new Data(holdingsService.allHoldings())).build();
    }

    @GET
    @PermitAll
    @Produces(MediaType.TEXT_PLAIN)
    @Path("profile")
    public String showForEveryUser(@Auth Principal principal) {
        return "'" + principal.getName() + "' has user privileges";
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

    @GET
    @Path("/check-token")
    public Map<String, Object> get(@Auth Principal user) {
        return ImmutableMap.<String, Object>of("username", user.getName(), "username", ((User) user).getName());
    }
}
