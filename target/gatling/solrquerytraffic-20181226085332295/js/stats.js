var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "136",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "81235",
        "ok": "58830",
        "ko": "81235"
    },
    "meanResponseTime": {
        "total": "22200",
        "ok": "9772",
        "ko": "60616"
    },
    "standardDeviation": {
        "total": "25131",
        "ok": "14161",
        "ko": "3252"
    },
    "percentiles1": {
        "total": "5990",
        "ok": "4119",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "55741",
        "ok": "9450",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "44973",
        "ko": "60149"
    },
    "percentiles4": {
        "total": "61305",
        "ok": "54517",
        "ko": "74497"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37,
        "percentage": 21
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 92,
        "percentage": 51
    },
    "group4": {
        "name": "failed",
        "count": 44,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.065",
        "ok": "0.805",
        "ko": "0.26"
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
        "ok": "136",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "81235",
        "ok": "58830",
        "ko": "81235"
    },
    "meanResponseTime": {
        "total": "22200",
        "ok": "9772",
        "ko": "60616"
    },
    "standardDeviation": {
        "total": "25131",
        "ok": "14161",
        "ko": "3252"
    },
    "percentiles1": {
        "total": "5990",
        "ok": "4119",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "55741",
        "ok": "9450",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "44973",
        "ko": "60149"
    },
    "percentiles4": {
        "total": "61305",
        "ok": "54517",
        "ko": "74497"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37,
        "percentage": 21
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 92,
        "percentage": 51
    },
    "group4": {
        "name": "failed",
        "count": 44,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.065",
        "ok": "0.805",
        "ko": "0.26"
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
