package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.services.QuotesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Arrays;
import java.util.List;

@Path("/quote")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class QuotesResource {
    private static final Logger logger = LoggerFactory.getLogger(QuotesResource.class);
    private QuotesService quotesService;

    @Inject
    public QuotesResource(QuotesService quotesService) {
        this.quotesService = quotesService;
    }

    @GET
    @Timed
    public Response getQuotes(@QueryParam("tickers") String tickers) {
        List<String> symbols = Arrays.asList(tickers.split(","));
        if(logger.isDebugEnabled()) logger.debug("getQuotes() - symbols = {}", symbols);
        Data<QuoteDetail> data = new Data<>(quotesService.getQuotes(symbols));
        return Response.ok(data).build();
    }
}
