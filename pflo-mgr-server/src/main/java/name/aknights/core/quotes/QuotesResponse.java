package name.aknights.core.quotes;

/**
 * {
 *   "query": {
 *      "count":3,
 *      "created":"2016-12-13T14:05:40Z",
 *      "lang":"en",
 *      "results":{
 *      }
 *   }
 * }
 */
public class QuotesResponse {
    private Query query;

    public Query getQuery() {
        return query;
    }
}
