var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6174",
        "ok": "6174",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2577",
        "ok": "2577",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5441",
        "ok": "5441",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 163,
        "percentage": 91
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
},
contents: {
"req_search-13348": {
        type: "REQUEST",
        name: "Search",
path: "Search",
pathFormatted: "req_search-13348",
stats: {
    "name": "Search",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6174",
        "ok": "6174",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2577",
        "ok": "2577",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5441",
        "ok": "5441",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 163,
        "percentage": 91
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
