package name.aknights.resources;

import com.codahale.metrics.annotation.Timed;
import name.aknights.api.Data;
import name.aknights.services.PortfolioService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/portfolio")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PortfolioResource {
    private PortfolioService portfolioService;

    @Inject
    public PortfolioResource(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GET
    @Timed
    public Response getPortfolio() {
//        Data data = new Data(portfolioService.getPortfolio());
        return Response.ok(portfolioService.getPortfolio()).build();
    }
}
