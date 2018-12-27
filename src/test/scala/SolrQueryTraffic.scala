import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class SolrQueryTraffic extends Simulation {

  object Config {
    //val queryFeederSource = "data/solrFacetQueries.csv"
    val queryFeederSource = "data/solrQueries.tsv"
    val numQueriesPerUser = 2
    val maxNumUsers = 2
    val minNumUsers = 1
    val totalTimeInMinutes = 1
    val baseUrl = "http://localhost:8983/solr/wiki"
    val userAgentHeader = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0"
  }

  object Query {
    // construct a feeder for our query params stored in the csv
    val feeder = tsv(Config.queryFeederSource).circular

    // each user sends loops queries
    val search = repeat(Config.numQueriesPerUser) {
      feed(feeder).exec(http("Search").get("/select?defType=edismax&qf=title description&${params}")
        .check(status.is(200))
        .check(jsonPath("$.responseHeader.params.q").saveAs("q"))
        .check(jsonPath("$.response.numFound").saveAs("numFound")))
    }
  }

  val httpConf = http
    .baseUrl(Config.baseUrl)
    .acceptHeader("application/json,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader(Config.userAgentHeader)

  // A scenario where users execute queries
  val users = scenario("Users").exec(Query.search)

  setUp(
    users.inject(
      constantUsersPerSec(Config.maxNumUsers) during (Config.totalTimeInMinutes minutes),
      rampUsersPerSec(Config.minNumUsers) to Config.maxNumUsers during (Config.totalTimeInMinutes minutes))
  ).protocols(httpConf)
}