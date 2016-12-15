package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.services.QuotesService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Arrays;

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
        Data data = new Data(quotesService.getQuotes(Arrays.asList("AAPL", "VWO", "VUSA.L")));
        return Response.ok(data).build();
    }
}
