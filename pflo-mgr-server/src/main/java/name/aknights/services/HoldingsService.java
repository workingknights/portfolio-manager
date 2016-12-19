package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.db.HoldingDAO;

import javax.inject.Inject;
import java.util.Collection;

public class HoldingsService {

    private HoldingDAO holdingDAO;

    @Inject
    public HoldingsService(HoldingDAO holdingDAO) {
        this.holdingDAO = holdingDAO;
    }

    public Collection<Holding> allHoldings() {
        return holdingDAO.getHoldings();
    }

    public Object addNewHolding(Holding holding) {
        return holdingDAO.save(holding).getId();
    }

    public boolean deleteHolding(String id) {
        return holdingDAO.deleteHolding(id);
    }

}
