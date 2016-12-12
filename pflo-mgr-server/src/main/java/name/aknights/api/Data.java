package name.aknights.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Data {
    private List<Holding> data;

    public Data(List<Holding> holdings) {
        this.data = holdings;
    }

    @JsonProperty
    public List<Holding> getData() {
        return data;
    }
}
