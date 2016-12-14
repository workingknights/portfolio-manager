package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.core.quotes.QuotesResponse;
import name.aknights.services.QuotesService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.client.Client;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/quote")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class QuotesResource {
    private QuotesService quotesService;

    @Inject
    public QuotesResource(QuotesService quotesService) {
        this.quotesService = quotesService;
    }

    @GET
    @Timed
    public Response listAll() {
        Data data = new Data(quotesService.allQuotes());
        return Response.ok(data).build();
    }
}
