package name.aknights.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;
import java.util.List;

public class Data<T> {
    private Collection<T> data;

    public Data(Collection<T> payload) {
        this.data = payload;
    }

    @JsonProperty
    public Collection<T> getData() {
        return data;
    }
}
