var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "150",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "71481",
        "ok": "55843",
        "ko": "71481"
    },
    "meanResponseTime": {
        "total": "18949",
        "ok": "10587",
        "ko": "60762"
    },
    "standardDeviation": {
        "total": "23793",
        "ok": "16080",
        "ko": "2380"
    },
    "percentiles1": {
        "total": "4885",
        "ok": "3068",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "42214",
        "ok": "9324",
        "ko": "60016"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "48429",
        "ko": "65277"
    },
    "percentiles4": {
        "total": "65074",
        "ok": "55004",
        "ko": "69760"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 26
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 94,
        "percentage": 52
    },
    "group4": {
        "name": "failed",
        "count": 30,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.011",
        "ok": "0.843",
        "ko": "0.169"
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
        "ok": "150",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "71481",
        "ok": "55843",
        "ko": "71481"
    },
    "meanResponseTime": {
        "total": "18949",
        "ok": "10587",
        "ko": "60762"
    },
    "standardDeviation": {
        "total": "23793",
        "ok": "16080",
        "ko": "2380"
    },
    "percentiles1": {
        "total": "4885",
        "ok": "3068",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "42214",
        "ok": "9324",
        "ko": "60016"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "48429",
        "ko": "65277"
    },
    "percentiles4": {
        "total": "65074",
        "ok": "55004",
        "ko": "69760"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 26
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 94,
        "percentage": 52
    },
    "group4": {
        "name": "failed",
        "count": 30,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.011",
        "ok": "0.843",
        "ko": "0.169"
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
