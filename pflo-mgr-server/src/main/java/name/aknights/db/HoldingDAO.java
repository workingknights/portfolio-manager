package name.aknights.db;

import com.mongodb.WriteResult;
import name.aknights.api.Holding;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;

import javax.inject.Inject;
import java.util.Collection;

public class HoldingDAO extends BasicDAO<Holding, ObjectId> {
    @Inject
    public HoldingDAO(Datastore datastore) {
        super(datastore);
    }

    public Collection<Holding> getHoldings() {
        return find().asList();
    }

    public boolean deleteHolding(String id) {
        WriteResult result = deleteById(new ObjectId(id));
        return result.getN() == 1;
    }


}
