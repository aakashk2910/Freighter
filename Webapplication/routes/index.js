var express = require('express');
var router = express.Router();
var Request = require("request");
var fs = require('fs');
var haml = require('haml');

var lock;

Request.get("http://localhost:3000/seal", (error, res, req) => {
    if(error) {
        return console.log(error);
    }
    lock = JSON.parse(req).status;
    console.log(lock);
});


/* GET home page. */
router.get('/', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });
  res.render('index', { title: 'Freighter', lock: lock });
});

router.get('/dashboard-fleet-manager', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

    var distChartData = [{
        "date": "2017-01-01",
        "distance": 250,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2017-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2017-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2017-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2017-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2017-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2017-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2017-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2017-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2017-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2017-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2017-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2017-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha": 0.4
    }, {
        "date": "2017-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    }, {
        "date": "2017-01-15"
    }, {
        "date": "2017-01-16"
    }];

    var earnings1ChartData = [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
    }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
    }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
    }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
    }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
    }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
    }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
    }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
    }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
    }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
    }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
    }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
    }];

    var earning2ChartData = [{
        "date": "2012-07-27",
        "value": 13
    }, {
        "date": "2012-07-28",
        "value": 11
    }, {
        "date": "2012-07-29",
        "value": 15
    }, {
        "date": "2012-07-30",
        "value": 16
    }, {
        "date": "2012-07-31",
        "value": 18
    }, {
        "date": "2012-08-01",
        "value": 13
    }, {
        "date": "2012-08-02",
        "value": 22
    }, {
        "date": "2012-08-03",
        "value": 23
    }, {
        "date": "2012-08-04",
        "value": 20
    }, {
        "date": "2012-08-05",
        "value": 17
    }, {
        "date": "2012-08-06",
        "value": 16
    }, {
        "date": "2012-08-07",
        "value": 18
    }, {
        "date": "2012-08-08",
        "value": 21
    }, {
        "date": "2012-08-09",
        "value": 26
    }, {
        "date": "2012-08-10",
        "value": 24
    }, {
        "date": "2012-08-11",
        "value": 29
    }, {
        "date": "2012-08-12",
        "value": 32
    }, {
        "date": "2012-08-13",
        "value": 18
    }, {
        "date": "2012-08-14",
        "value": 24
    }, {
        "date": "2012-08-15",
        "value": 22
    }, {
        "date": "2012-08-16",
        "value": 18
    }, {
        "date": "2012-08-17",
        "value": 19
    }, {
        "date": "2012-08-18",
        "value": 14
    }, {
        "date": "2012-08-19",
        "value": 15
    }, {
        "date": "2012-08-20",
        "value": 12
    }, {
        "date": "2012-08-21",
        "value": 8
    }, {
        "date": "2012-08-22",
        "value": 9
    }, {
        "date": "2012-08-23",
        "value": 8
    }, {
        "date": "2012-08-24",
        "value": 7
    }, {
        "date": "2012-08-25",
        "value": 5
    }, {
        "date": "2012-08-26",
        "value": 11
    }, {
        "date": "2012-08-27",
        "value": 13
    }, {
        "date": "2012-08-28",
        "value": 18
    }, {
        "date": "2012-08-29",
        "value": 20
    }, {
        "date": "2012-08-30",
        "value": 29
    }, {
        "date": "2012-08-31",
        "value": 33
    }, {
        "date": "2012-09-01",
        "value": 42
    }, {
        "date": "2012-09-02",
        "value": 35
    }, {
        "date": "2012-09-03",
        "value": 31
    }, {
        "date": "2012-09-04",
        "value": 47
    }, {
        "date": "2012-09-05",
        "value": 52
    }, {
        "date": "2012-09-06",
        "value": 46
    }, {
        "date": "2012-09-07",
        "value": 41
    }, {
        "date": "2012-09-08",
        "value": 43
    }, {
        "date": "2012-09-09",
        "value": 40
    }, {
        "date": "2012-09-10",
        "value": 39
    }, {
        "date": "2012-09-11",
        "value": 34
    }, {
        "date": "2012-09-12",
        "value": 29
    }, {
        "date": "2012-09-13",
        "value": 34
    }, {
        "date": "2012-09-14",
        "value": 37
    }, {
        "date": "2012-09-15",
        "value": 42
    }, {
        "date": "2012-09-16",
        "value": 49
    }, {
        "date": "2012-09-17",
        "value": 46
    }, {
        "date": "2012-09-18",
        "value": 47
    }, {
        "date": "2012-09-19",
        "value": 55
    }, {
        "date": "2012-09-20",
        "value": 59
    }, {
        "date": "2012-09-21",
        "value": 58
    }, {
        "date": "2012-09-22",
        "value": 57
    }, {
        "date": "2012-09-23",
        "value": 61
    }, {
        "date": "2012-09-24",
        "value": 59
    }, {
        "date": "2012-09-25",
        "value": 67
    }, {
        "date": "2012-09-26",
        "value": 65
    }, {
        "date": "2012-09-27",
        "value": 61
    }, {
        "date": "2012-09-28",
        "value": 66
    }, {
        "date": "2012-09-29",
        "value": 69
    }, {
        "date": "2012-09-30",
        "value": 71
    }, {
        "date": "2012-10-01",
        "value": 67
    }, {
        "date": "2012-10-02",
        "value": 63
    }, {
        "date": "2012-10-03",
        "value": 46
    }, {
        "date": "2012-10-04",
        "value": 32
    }, {
        "date": "2012-10-05",
        "value": 21
    }, {
        "date": "2012-10-06",
        "value": 18
    }, {
        "date": "2012-10-07",
        "value": 21
    }, {
        "date": "2012-10-08",
        "value": 28
    }, {
        "date": "2012-10-09",
        "value": 27
    }, {
        "date": "2012-10-10",
        "value": 36
    }, {
        "date": "2012-10-11",
        "value": 33
    }, {
        "date": "2012-10-12",
        "value": 31
    }, {
        "date": "2012-10-13",
        "value": 30
    }, {
        "date": "2012-10-14",
        "value": 34
    }, {
        "date": "2012-10-15",
        "value": 38
    }, {
        "date": "2012-10-16",
        "value": 37
    }, {
        "date": "2012-10-17",
        "value": 44
    }, {
        "date": "2012-10-18",
        "value": 49
    }, {
        "date": "2012-10-19",
        "value": 53
    }, {
        "date": "2012-10-20",
        "value": 57
    }, {
        "date": "2012-10-21",
        "value": 60
    }, {
        "date": "2012-10-22",
        "value": 61
    }, {
        "date": "2012-10-23",
        "value": 69
    }, {
        "date": "2012-10-24",
        "value": 67
    }, {
        "date": "2012-10-25",
        "value": 72
    }, {
        "date": "2012-10-26",
        "value": 77
    }, {
        "date": "2012-10-27",
        "value": 75
    }, {
        "date": "2012-10-28",
        "value": 70
    }, {
        "date": "2012-10-29",
        "value": 72
    }, {
        "date": "2012-10-30",
        "value": 70
    }, {
        "date": "2012-10-31",
        "value": 72
    }, {
        "date": "2012-11-01",
        "value": 73
    }, {
        "date": "2012-11-02",
        "value": 67
    }, {
        "date": "2012-11-03",
        "value": 68
    }, {
        "date": "2012-11-04",
        "value": 65
    }, {
        "date": "2012-11-05",
        "value": 71
    }, {
        "date": "2012-11-06",
        "value": 75
    }, {
        "date": "2012-11-07",
        "value": 74
    }, {
        "date": "2012-11-08",
        "value": 71
    }, {
        "date": "2012-11-09",
        "value": 76
    }, {
        "date": "2012-11-10",
        "value": 77
    }, {
        "date": "2012-11-11",
        "value": 81
    }, {
        "date": "2012-11-12",
        "value": 83
    }, {
        "date": "2012-11-13",
        "value": 80
    }, {
        "date": "2012-11-14",
        "value": 81
    }, {
        "date": "2012-11-15",
        "value": 87
    }, {
        "date": "2012-11-16",
        "value": 82
    }, {
        "date": "2012-11-17",
        "value": 86
    }, {
        "date": "2012-11-18",
        "value": 80
    }, {
        "date": "2012-11-19",
        "value": 87
    }, {
        "date": "2012-11-20",
        "value": 83
    }, {
        "date": "2012-11-21",
        "value": 85
    }, {
        "date": "2012-11-22",
        "value": 84
    }, {
        "date": "2012-11-23",
        "value": 82
    }, {
        "date": "2012-11-24",
        "value": 73
    }, {
        "date": "2012-11-25",
        "value": 71
    }, {
        "date": "2012-11-26",
        "value": 75
    }, {
        "date": "2012-11-27",
        "value": 79
    }, {
        "date": "2012-11-28",
        "value": 70
    }, {
        "date": "2012-11-29",
        "value": 73
    }, {
        "date": "2012-11-30",
        "value": 61
    }, {
        "date": "2012-12-01",
        "value": 62
    }, {
        "date": "2012-12-02",
        "value": 66
    }, {
        "date": "2012-12-03",
        "value": 65
    }, {
        "date": "2012-12-04",
        "value": 73
    }, {
        "date": "2012-12-05",
        "value": 79
    }, {
        "date": "2012-12-06",
        "value": 78
    }, {
        "date": "2012-12-07",
        "value": 78
    }, {
        "date": "2012-12-08",
        "value": 78
    }, {
        "date": "2012-12-09",
        "value": 74
    }, {
        "date": "2012-12-10",
        "value": 73
    }, {
        "date": "2012-12-11",
        "value": 75
    }, {
        "date": "2012-12-12",
        "value": 70
    }, {
        "date": "2012-12-13",
        "value": 77
    }, {
        "date": "2012-12-14",
        "value": 67
    }, {
        "date": "2012-12-15",
        "value": 62
    }, {
        "date": "2012-12-16",
        "value": 64
    }, {
        "date": "2012-12-17",
        "value": 61
    }, {
        "date": "2012-12-18",
        "value": 59
    }, {
        "date": "2012-12-19",
        "value": 53
    }, {
        "date": "2012-12-20",
        "value": 54
    }, {
        "date": "2012-12-21",
        "value": 56
    }, {
        "date": "2012-12-22",
        "value": 59
    }, {
        "date": "2012-12-23",
        "value": 58
    }, {
        "date": "2012-12-24",
        "value": 55
    }, {
        "date": "2012-12-25",
        "value": 52
    }, {
        "date": "2012-12-26",
        "value": 54
    }, {
        "date": "2012-12-27",
        "value": 50
    }, {
        "date": "2012-12-28",
        "value": 50
    }, {
        "date": "2012-12-29",
        "value": 51
    }, {
        "date": "2012-12-30",
        "value": 52
    }, {
        "date": "2012-12-31",
        "value": 58
    }, {
        "date": "2013-01-01",
        "value": 60
    }, {
        "date": "2013-01-02",
        "value": 67
    }, {
        "date": "2013-01-03",
        "value": 64
    }, {
        "date": "2013-01-04",
        "value": 66
    }, {
        "date": "2013-01-05",
        "value": 60
    }, {
        "date": "2013-01-06",
        "value": 63
    }, {
        "date": "2013-01-07",
        "value": 61
    }, {
        "date": "2013-01-08",
        "value": 60
    }, {
        "date": "2013-01-09",
        "value": 65
    }, {
        "date": "2013-01-10",
        "value": 75
    }, {
        "date": "2013-01-11",
        "value": 77
    }, {
        "date": "2013-01-12",
        "value": 78
    }, {
        "date": "2013-01-13",
        "value": 70
    }, {
        "date": "2013-01-14",
        "value": 70
    }, {
        "date": "2013-01-15",
        "value": 73
    }, {
        "date": "2013-01-16",
        "value": 71
    }, {
        "date": "2013-01-17",
        "value": 74
    }, {
        "date": "2013-01-18",
        "value": 78
    }, {
        "date": "2013-01-19",
        "value": 85
    }, {
        "date": "2013-01-20",
        "value": 82
    }, {
        "date": "2013-01-21",
        "value": 83
    }, {
        "date": "2013-01-22",
        "value": 88
    }, {
        "date": "2013-01-23",
        "value": 85
    }, {
        "date": "2013-01-24",
        "value": 85
    }, {
        "date": "2013-01-25",
        "value": 80
    }, {
        "date": "2013-01-26",
        "value": 87
    }, {
        "date": "2013-01-27",
        "value": 84
    }, {
        "date": "2013-01-28",
        "value": 83
    }, {
        "date": "2013-01-29",
        "value": 84
    }, {
        "date": "2013-01-30",
        "value": 81
    }];

   res.render('dashboards/dashboard-fleet-manager', { title: 'Freighter | Dashboard', heading: 'Fleet Manager Dashboard', lock: lock, distChartData: distChartData, earnings1ChartData: earnings1ChartData, earnings2ChartData: earning2ChartData});
});

router.get('/dashboard-driver', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

    var distChartData = [{
        "date": "2017-01-01",
        "distance": 250,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2017-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2017-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2017-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2017-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2017-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2017-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2017-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2017-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2017-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2017-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2017-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2017-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha": 0.4
    }, {
        "date": "2017-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    }, {
        "date": "2017-01-15"
    }, {
        "date": "2017-01-16"
    }];

    var earnings1ChartData = [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
    }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
    }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
    }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
    }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
    }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
    }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
    }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
    }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
    }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
    }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
    }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
    }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
    }];

    var earning2ChartData = [{
        "date": "2012-07-27",
        "value": 13
    }, {
        "date": "2012-07-28",
        "value": 11
    }, {
        "date": "2012-07-29",
        "value": 15
    }, {
        "date": "2012-07-30",
        "value": 16
    }, {
        "date": "2012-07-31",
        "value": 18
    }, {
        "date": "2012-08-01",
        "value": 13
    }, {
        "date": "2012-08-02",
        "value": 22
    }, {
        "date": "2012-08-03",
        "value": 23
    }, {
        "date": "2012-08-04",
        "value": 20
    }, {
        "date": "2012-08-05",
        "value": 17
    }, {
        "date": "2012-08-06",
        "value": 16
    }, {
        "date": "2012-08-07",
        "value": 18
    }, {
        "date": "2012-08-08",
        "value": 21
    }, {
        "date": "2012-08-09",
        "value": 26
    }, {
        "date": "2012-08-10",
        "value": 24
    }, {
        "date": "2012-08-11",
        "value": 29
    }, {
        "date": "2012-08-12",
        "value": 32
    }, {
        "date": "2012-08-13",
        "value": 18
    }, {
        "date": "2012-08-14",
        "value": 24
    }, {
        "date": "2012-08-15",
        "value": 22
    }, {
        "date": "2012-08-16",
        "value": 18
    }, {
        "date": "2012-08-17",
        "value": 19
    }, {
        "date": "2012-08-18",
        "value": 14
    }, {
        "date": "2012-08-19",
        "value": 15
    }, {
        "date": "2012-08-20",
        "value": 12
    }, {
        "date": "2012-08-21",
        "value": 8
    }, {
        "date": "2012-08-22",
        "value": 9
    }, {
        "date": "2012-08-23",
        "value": 8
    }, {
        "date": "2012-08-24",
        "value": 7
    }, {
        "date": "2012-08-25",
        "value": 5
    }, {
        "date": "2012-08-26",
        "value": 11
    }, {
        "date": "2012-08-27",
        "value": 13
    }, {
        "date": "2012-08-28",
        "value": 18
    }, {
        "date": "2012-08-29",
        "value": 20
    }, {
        "date": "2012-08-30",
        "value": 29
    }, {
        "date": "2012-08-31",
        "value": 33
    }, {
        "date": "2012-09-01",
        "value": 42
    }, {
        "date": "2012-09-02",
        "value": 35
    }, {
        "date": "2012-09-03",
        "value": 31
    }, {
        "date": "2012-09-04",
        "value": 47
    }, {
        "date": "2012-09-05",
        "value": 52
    }, {
        "date": "2012-09-06",
        "value": 46
    }, {
        "date": "2012-09-07",
        "value": 41
    }, {
        "date": "2012-09-08",
        "value": 43
    }, {
        "date": "2012-09-09",
        "value": 40
    }, {
        "date": "2012-09-10",
        "value": 39
    }, {
        "date": "2012-09-11",
        "value": 34
    }, {
        "date": "2012-09-12",
        "value": 29
    }, {
        "date": "2012-09-13",
        "value": 34
    }, {
        "date": "2012-09-14",
        "value": 37
    }, {
        "date": "2012-09-15",
        "value": 42
    }, {
        "date": "2012-09-16",
        "value": 49
    }, {
        "date": "2012-09-17",
        "value": 46
    }, {
        "date": "2012-09-18",
        "value": 47
    }, {
        "date": "2012-09-19",
        "value": 55
    }, {
        "date": "2012-09-20",
        "value": 59
    }, {
        "date": "2012-09-21",
        "value": 58
    }, {
        "date": "2012-09-22",
        "value": 57
    }, {
        "date": "2012-09-23",
        "value": 61
    }, {
        "date": "2012-09-24",
        "value": 59
    }, {
        "date": "2012-09-25",
        "value": 67
    }, {
        "date": "2012-09-26",
        "value": 65
    }, {
        "date": "2012-09-27",
        "value": 61
    }, {
        "date": "2012-09-28",
        "value": 66
    }, {
        "date": "2012-09-29",
        "value": 69
    }, {
        "date": "2012-09-30",
        "value": 71
    }, {
        "date": "2012-10-01",
        "value": 67
    }, {
        "date": "2012-10-02",
        "value": 63
    }, {
        "date": "2012-10-03",
        "value": 46
    }, {
        "date": "2012-10-04",
        "value": 32
    }, {
        "date": "2012-10-05",
        "value": 21
    }, {
        "date": "2012-10-06",
        "value": 18
    }, {
        "date": "2012-10-07",
        "value": 21
    }, {
        "date": "2012-10-08",
        "value": 28
    }, {
        "date": "2012-10-09",
        "value": 27
    }, {
        "date": "2012-10-10",
        "value": 36
    }, {
        "date": "2012-10-11",
        "value": 33
    }, {
        "date": "2012-10-12",
        "value": 31
    }, {
        "date": "2012-10-13",
        "value": 30
    }, {
        "date": "2012-10-14",
        "value": 34
    }, {
        "date": "2012-10-15",
        "value": 38
    }, {
        "date": "2012-10-16",
        "value": 37
    }, {
        "date": "2012-10-17",
        "value": 44
    }, {
        "date": "2012-10-18",
        "value": 49
    }, {
        "date": "2012-10-19",
        "value": 53
    }, {
        "date": "2012-10-20",
        "value": 57
    }, {
        "date": "2012-10-21",
        "value": 60
    }, {
        "date": "2012-10-22",
        "value": 61
    }, {
        "date": "2012-10-23",
        "value": 69
    }, {
        "date": "2012-10-24",
        "value": 67
    }, {
        "date": "2012-10-25",
        "value": 72
    }, {
        "date": "2012-10-26",
        "value": 77
    }, {
        "date": "2012-10-27",
        "value": 75
    }, {
        "date": "2012-10-28",
        "value": 70
    }, {
        "date": "2012-10-29",
        "value": 72
    }, {
        "date": "2012-10-30",
        "value": 70
    }, {
        "date": "2012-10-31",
        "value": 72
    }, {
        "date": "2012-11-01",
        "value": 73
    }, {
        "date": "2012-11-02",
        "value": 67
    }, {
        "date": "2012-11-03",
        "value": 68
    }, {
        "date": "2012-11-04",
        "value": 65
    }, {
        "date": "2012-11-05",
        "value": 71
    }, {
        "date": "2012-11-06",
        "value": 75
    }, {
        "date": "2012-11-07",
        "value": 74
    }, {
        "date": "2012-11-08",
        "value": 71
    }, {
        "date": "2012-11-09",
        "value": 76
    }, {
        "date": "2012-11-10",
        "value": 77
    }, {
        "date": "2012-11-11",
        "value": 81
    }, {
        "date": "2012-11-12",
        "value": 83
    }, {
        "date": "2012-11-13",
        "value": 80
    }, {
        "date": "2012-11-14",
        "value": 81
    }, {
        "date": "2012-11-15",
        "value": 87
    }, {
        "date": "2012-11-16",
        "value": 82
    }, {
        "date": "2012-11-17",
        "value": 86
    }, {
        "date": "2012-11-18",
        "value": 80
    }, {
        "date": "2012-11-19",
        "value": 87
    }, {
        "date": "2012-11-20",
        "value": 83
    }, {
        "date": "2012-11-21",
        "value": 85
    }, {
        "date": "2012-11-22",
        "value": 84
    }, {
        "date": "2012-11-23",
        "value": 82
    }, {
        "date": "2012-11-24",
        "value": 73
    }, {
        "date": "2012-11-25",
        "value": 71
    }, {
        "date": "2012-11-26",
        "value": 75
    }, {
        "date": "2012-11-27",
        "value": 79
    }, {
        "date": "2012-11-28",
        "value": 70
    }, {
        "date": "2012-11-29",
        "value": 73
    }, {
        "date": "2012-11-30",
        "value": 61
    }, {
        "date": "2012-12-01",
        "value": 62
    }, {
        "date": "2012-12-02",
        "value": 66
    }, {
        "date": "2012-12-03",
        "value": 65
    }, {
        "date": "2012-12-04",
        "value": 73
    }, {
        "date": "2012-12-05",
        "value": 79
    }, {
        "date": "2012-12-06",
        "value": 78
    }, {
        "date": "2012-12-07",
        "value": 78
    }, {
        "date": "2012-12-08",
        "value": 78
    }, {
        "date": "2012-12-09",
        "value": 74
    }, {
        "date": "2012-12-10",
        "value": 73
    }, {
        "date": "2012-12-11",
        "value": 75
    }, {
        "date": "2012-12-12",
        "value": 70
    }, {
        "date": "2012-12-13",
        "value": 77
    }, {
        "date": "2012-12-14",
        "value": 67
    }, {
        "date": "2012-12-15",
        "value": 62
    }, {
        "date": "2012-12-16",
        "value": 64
    }, {
        "date": "2012-12-17",
        "value": 61
    }, {
        "date": "2012-12-18",
        "value": 59
    }, {
        "date": "2012-12-19",
        "value": 53
    }, {
        "date": "2012-12-20",
        "value": 54
    }, {
        "date": "2012-12-21",
        "value": 56
    }, {
        "date": "2012-12-22",
        "value": 59
    }, {
        "date": "2012-12-23",
        "value": 58
    }, {
        "date": "2012-12-24",
        "value": 55
    }, {
        "date": "2012-12-25",
        "value": 52
    }, {
        "date": "2012-12-26",
        "value": 54
    }, {
        "date": "2012-12-27",
        "value": 50
    }, {
        "date": "2012-12-28",
        "value": 50
    }, {
        "date": "2012-12-29",
        "value": 51
    }, {
        "date": "2012-12-30",
        "value": 52
    }, {
        "date": "2012-12-31",
        "value": 58
    }, {
        "date": "2013-01-01",
        "value": 60
    }, {
        "date": "2013-01-02",
        "value": 67
    }, {
        "date": "2013-01-03",
        "value": 64
    }, {
        "date": "2013-01-04",
        "value": 66
    }, {
        "date": "2013-01-05",
        "value": 60
    }, {
        "date": "2013-01-06",
        "value": 63
    }, {
        "date": "2013-01-07",
        "value": 61
    }, {
        "date": "2013-01-08",
        "value": 60
    }, {
        "date": "2013-01-09",
        "value": 65
    }, {
        "date": "2013-01-10",
        "value": 75
    }, {
        "date": "2013-01-11",
        "value": 77
    }, {
        "date": "2013-01-12",
        "value": 78
    }, {
        "date": "2013-01-13",
        "value": 70
    }, {
        "date": "2013-01-14",
        "value": 70
    }, {
        "date": "2013-01-15",
        "value": 73
    }, {
        "date": "2013-01-16",
        "value": 71
    }, {
        "date": "2013-01-17",
        "value": 74
    }, {
        "date": "2013-01-18",
        "value": 78
    }, {
        "date": "2013-01-19",
        "value": 85
    }, {
        "date": "2013-01-20",
        "value": 82
    }, {
        "date": "2013-01-21",
        "value": 83
    }, {
        "date": "2013-01-22",
        "value": 88
    }, {
        "date": "2013-01-23",
        "value": 85
    }, {
        "date": "2013-01-24",
        "value": 85
    }, {
        "date": "2013-01-25",
        "value": 80
    }, {
        "date": "2013-01-26",
        "value": 87
    }, {
        "date": "2013-01-27",
        "value": 84
    }, {
        "date": "2013-01-28",
        "value": 83
    }, {
        "date": "2013-01-29",
        "value": 84
    }, {
        "date": "2013-01-30",
        "value": 81
    }];

    res.render('dashboards/dashboard-driver', { title: 'Freighter | Dashboard', heading: 'Driver Dashboard', lock: lock, distChartData: distChartData, earnings1ChartData: earnings1ChartData, earnings2ChartData: earning2ChartData });
});

router.get('/dashboard-controllers', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

    res.render('dashboards/dashboard', { title: 'Freighter', heading: 'Controlling Authority' });
});

router.get('/lock', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });
    res.render('seal/seal', { title: 'Freighter | Seal', heading: 'Seal', lock: lock });
});

router.get('/locked', function(req, res, next) {

    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/seal",
        "body": JSON.stringify({
            "status": 0
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });

    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });
    res.render('seal/seal', { title: 'Freighter | Seal', heading: 'Seal', lock: lock });
});

router.get('/upload', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });
    res.render('upload', { title: 'Freighter | upload', heading: 'Upload', lock: lock });
});

router.get('/load-data', function(req, res, next) {
    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });


    var demoData = [
        {
            "Name": "Airi Satou",
            "Position": "Accountant",
            "Office": "Tokyo",
            "Age": 33,
            "Start date": "2008/11/28",
            "Salary": "$162,700"
        },
        {
            "Name": "Angelica Ramos",
            "Position": "Chief Executive Officer (CEO)",
            "Office": "London",
            "Age": 47,
            "Start date": "2009/10/09",
            "Salary": "$1,200,000"
        },
        {
            "Name": "Ashton Cox",
            "Position": "Junior Technical Author",
            "Office": "San Francisco",
            "Age": 66,
            "Start date": "2009/01/12",
            "Salary": "$86,000"
        },
        {
            "Name": "Bradley Greer",
            "Position": "Software Engineer",
            "Office": "London",
            "Age": 41,
            "Start date": "2012/10/13",
            "Salary": "$132,000"
        },
        {
            "Name": "Brenden Wagner",
            "Position": "Software Engineer",
            "Office": "San Francisco",
            "Age": 28,
            "Start date": "2011/06/07",
            "Salary": "$206,850"
        },
        {
            "Name": "Brielle Williamson",
            "Position": "Integration Specialist",
            "Office": "New York",
            "Age": 61,
            "Start date": "2012/12/02",
            "Salary": "$372,000"
        },
        {
            "Name": "Bruno Nash",
            "Position": "Software Engineer",
            "Office": "London",
            "Age": 38,
            "Start date": "2011/05/03",
            "Salary": "$163,500"
        },
        {
            "Name": "Caesar Vance",
            "Position": "Pre-Sales Support",
            "Office": "New York",
            "Age": 21,
            "Start date": "2011/12/12",
            "Salary": "$106,450"
        },
        {
            "Name": "Cara Stevens",
            "Position": "Sales Assistant",
            "Office": "New York",
            "Age": 46,
            "Start date": "2011/12/06",
            "Salary": "$145,600"
        },
        {
            "Name": "Cedric Kelly",
            "Position": "Senior Javascript Developer",
            "Office": "Edinburgh",
            "Age": 22,
            "Start date": "2012/03/29",
            "Salary": "$433,060"
        },
        {
            "Name": "Charde Marshall",
            "Position": "Regional Director",
            "Office": "San Francisco",
            "Age": 36,
            "Start date": "2008/10/16",
            "Salary": "$470,600"
        },
        {
            "Name": "Colleen Hurst",
            "Position": "Javascript Developer",
            "Office": "San Francisco",
            "Age": 39,
            "Start date": "2009/09/15",
            "Salary": "$205,500"
        },
        {
            "Name": "Dai Rios",
            "Position": "Personnel Lead",
            "Office": "Edinburgh",
            "Age": 35,
            "Start date": "2012/09/26",
            "Salary": "$217,500"
        },
        {
            "Name": "Donna Snider",
            "Position": "Customer Support",
            "Office": "New York",
            "Age": 27,
            "Start date": "2011/01/25",
            "Salary": "$112,000"
        },
        {
            "Name": "Doris Wilder",
            "Position": "Sales Assistant",
            "Office": "Sidney",
            "Age": 23,
            "Start date": "2010/09/20",
            "Salary": "$85,600"
        },
        {
            "Name": "Finn Camacho",
            "Position": "Support Engineer",
            "Office": "San Francisco",
            "Age": 47,
            "Start date": "2009/07/07",
            "Salary": "$87,500"
        },
        {
            "Name": "Fiona Green",
            "Position": "Chief Operating Officer (COO)",
            "Office": "San Francisco",
            "Age": 48,
            "Start date": "2010/03/11",
            "Salary": "$850,000"
        },
        {
            "Name": "Garrett Winters",
            "Position": "Accountant",
            "Office": "Tokyo",
            "Age": 63,
            "Start date": "2011/07/25",
            "Salary": "$170,750"
        },
        {
            "Name": "Gavin Cortez",
            "Position": "Team Leader",
            "Office": "San Francisco",
            "Age": 22,
            "Start date": "2008/10/26",
            "Salary": "$235,500"
        },
        {
            "Name": "Gavin Joyce",
            "Position": "Developer",
            "Office": "Edinburgh",
            "Age": 42,
            "Start date": "2010/12/22",
            "Salary": "$92,575"
        },
        {
            "Name": "Gloria Little",
            "Position": "Systems Administrator",
            "Office": "New York",
            "Age": 59,
            "Start date": "2009/04/10",
            "Salary": "$237,500"
        },
        {
            "Name": "Haley Kennedy",
            "Position": "Senior Marketing Designer",
            "Office": "London",
            "Age": 43,
            "Start date": "2012/12/18",
            "Salary": "$313,500"
        },
        {
            "Name": "Hermione Butler",
            "Position": "Regional Director",
            "Office": "London",
            "Age": 47,
            "Start date": "2011/03/21",
            "Salary": "$356,250"
        },
        {
            "Name": "Herrod Chandler",
            "Position": "Sales Assistant",
            "Office": "San Francisco",
            "Age": 59,
            "Start date": "2012/08/06",
            "Salary": "$137,500"
        },
        {
            "Name": "Hope Fuentes",
            "Position": "Secretary",
            "Office": "San Francisco",
            "Age": 41,
            "Start date": "2010/02/12",
            "Salary": "$109,850"
        },
        {
            "Name": "Howard Hatfield",
            "Position": "Office Manager",
            "Office": "San Francisco",
            "Age": 51,
            "Start date": "2008/12/16",
            "Salary": "$164,500"
        },
        {
            "Name": "Jackson Bradshaw",
            "Position": "Director",
            "Office": "New York",
            "Age": 65,
            "Start date": "2008/09/26",
            "Salary": "$645,750"
        },
        {
            "Name": "Jena Gaines",
            "Position": "Office Manager",
            "Office": "London",
            "Age": 30,
            "Start date": "2008/12/19",
            "Salary": "$90,560"
        },
        {
            "Name": "Jenette Caldwell",
            "Position": "Development Lead",
            "Office": "New York",
            "Age": 30,
            "Start date": "2011/09/03",
            "Salary": "$345,000"
        },
        {
            "Name": "Jennifer Acosta",
            "Position": "Junior Javascript Developer",
            "Office": "Edinburgh",
            "Age": 43,
            "Start date": "2013/02/01",
            "Salary": "$75,650"
        },
        {
            "Name": "Jennifer Chang",
            "Position": "Regional Director",
            "Office": "Singapore",
            "Age": 28,
            "Start date": "2010/11/14",
            "Salary": "$357,650"
        },
        {
            "Name": "Jonas Alexander",
            "Position": "Developer",
            "Office": "San Francisco",
            "Age": 30,
            "Start date": "2010/07/14",
            "Salary": "$86,500"
        },
        {
            "Name": "Lael Greer",
            "Position": "Systems Administrator",
            "Office": "London",
            "Age": 21,
            "Start date": "2009/02/27",
            "Salary": "$103,500"
        },
        {
            "Name": "Martena Mccray",
            "Position": "Post-Sales support",
            "Office": "Edinburgh",
            "Age": 46,
            "Start date": "2011/03/09",
            "Salary": "$324,050"
        },
        {
            "Name": "Michael Bruce",
            "Position": "Javascript Developer",
            "Office": "Singapore",
            "Age": 29,
            "Start date": "2011/06/27",
            "Salary": "$183,000"
        },
        {
            "Name": "Michael Silva",
            "Position": "Marketing Designer",
            "Office": "London",
            "Age": 66,
            "Start date": "2012/11/27",
            "Salary": "$198,500"
        },
        {
            "Name": "Michelle House",
            "Position": "Integration Specialist",
            "Office": "Sidney",
            "Age": 37,
            "Start date": "2011/06/02",
            "Salary": "$95,400"
        },
        {
            "Name": "Olivia Liang",
            "Position": "Support Engineer",
            "Office": "Singapore",
            "Age": 64,
            "Start date": "2011/02/03",
            "Salary": "$234,500"
        },
        {
            "Name": "Paul Byrd",
            "Position": "Chief Financial Officer (CFO)",
            "Office": "New York",
            "Age": 64,
            "Start date": "2010/06/09",
            "Salary": "$725,000"
        },
        {
            "Name": "Prescott Bartlett",
            "Position": "Technical Author",
            "Office": "London",
            "Age": 27,
            "Start date": "2011/05/07",
            "Salary": "$145,000"
        },
        {
            "Name": "Quinn Flynn",
            "Position": "Support Lead",
            "Office": "Edinburgh",
            "Age": 22,
            "Start date": "2013/03/03",
            "Salary": "$342,000"
        },
        {
            "Name": "Rhona Davidson",
            "Position": "Integration Specialist",
            "Office": "Tokyo",
            "Age": 55,
            "Start date": "2010/10/14",
            "Salary": "$327,900"
        },
        {
            "Name": "Sakura Yamamoto",
            "Position": "Support Engineer",
            "Office": "Tokyo",
            "Age": 37,
            "Start date": "2009/08/19",
            "Salary": "$139,575"
        },
        {
            "Name": "Serge Baldwin",
            "Position": "Data Coordinator",
            "Office": "Singapore",
            "Age": 64,
            "Start date": "2012/04/09",
            "Salary": "$138,575"
        },
        {
            "Name": "Shad Decker",
            "Position": "Regional Director",
            "Office": "Edinburgh",
            "Age": 51,
            "Start date": "2008/11/13",
            "Salary": "$183,000"
        },
        {
            "Name": "Shou Itou",
            "Position": "Regional Marketing",
            "Office": "Tokyo",
            "Age": 20,
            "Start date": "2011/08/14",
            "Salary": "$163,000"
        },
        {
            "Name": "Sonya Frost",
            "Position": "Software Engineer",
            "Office": "Edinburgh",
            "Age": 23,
            "Start date": "2008/12/13",
            "Salary": "$103,600"
        },
        {
            "Name": "Suki Burks",
            "Position": "Developer",
            "Office": "London",
            "Age": 53,
            "Start date": "2009/10/22",
            "Salary": "$114,500"
        },
        {
            "Name": "Tatyana Fitzpatrick",
            "Position": "Regional Director",
            "Office": "London",
            "Age": 19,
            "Start date": "2010/03/17",
            "Salary": "$385,750"
        },
        {
            "Name": "Thor Walton",
            "Position": "Developer",
            "Office": "New York",
            "Age": 61,
            "Start date": "2013/08/11",
            "Salary": "$98,540"
        },
        {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Start date": "2011/04/25",
            "Salary": "$320,800"
        },
        {
            "Name": "Timothy Mooney",
            "Position": "Office Manager",
            "Office": "London",
            "Age": 37,
            "Start date": "2008/12/11",
            "Salary": "$136,200"
        },
        {
            "Name": "Unity Butler",
            "Position": "Marketing Designer",
            "Office": "San Francisco",
            "Age": 47,
            "Start date": "2009/12/09",
            "Salary": "$85,675"
        },
        {
            "Name": "Vivian Harrell",
            "Position": "Financial Controller",
            "Office": "San Francisco",
            "Age": 62,
            "Start date": "2009/02/14",
            "Salary": "$452,500"
        },
        {
            "Name": "Yuri Berry",
            "Position": "Chief Marketing Officer (CMO)",
            "Office": "New York",
            "Age": 40,
            "Start date": "2009/06/25",
            "Salary": "$675,000"
        },
        {
            "Name": "Zenaida Frank",
            "Position": "Software Engineer",
            "Office": "New York",
            "Age": 63,
            "Start date": "2010/01/04",
            "Salary": "$125,250"
        },
        {
            "Name": "Zorita Serrano",
            "Position": "Software Engineer",
            "Office": "San Francisco",
            "Age": 56,
            "Start date": "2012/06/01",
            "Salary": "$115,000"
        }
    ]

    var th = ["Name", "Position", "Office", "Age", "Start date", "Salary"];

    res.render('data-exporter', { title: 'Freighter | Load', heading: 'Manage Load', lock: lock, tableData: demoData, tableHeading: th });
});

router.post('/uploadImages', function(req, res, next) {

    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

     res.render('upload', { title: 'Freighter | upload', heading: 'Upload', lock: lock });
});

router.get('/driver-license', function(req, res, next) {

    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

    var files = fs.readdirSync('public/uploads/driver/documents/license');


    res.render('documents/driver/license', { title: 'Freighter | license', heading: 'Manage License', lock: lock, imageList: files });
});

router.get('/driver-other-docs', function(req, res, next) {

    Request.get("http://localhost:3000/seal", (error, res, req) => {
        if(error) {
            return console.log(error);
        }
        lock = JSON.parse(req).status;
        console.log(lock);
    });

    var otherdocs = fs.readdirSync('public/uploads/driver/documents/other-docs');
    var truckdocs = fs.readdirSync('public/uploads/truck/documents');
    var safetysheet = fs.readdirSync('public/uploads/manager/documents/safety-sheet');

    res.render('documents/driver/other-docs', { title: 'Freighter | license', heading: 'Manage Other Documents', lock: lock, otherDocs: otherdocs, truckDocs: truckdocs, safetySheet: safetysheet });
});


router.get('/upgrade', function(req, res) {
    res.render('pricing', { title: 'Freighter' });
});

// router.post('/license', function (req, res, next) {
//     fs.readFile(req.file.path, function (err, data) {
//          var newPath = __dirname + "/uploads/uploadedFileName";
//          fs.writeFile(newPath, data, function (err) {
//              res.redirect("back");
//          });
//      });
// });

router.get('*', function(req, res){
    res.render('coming-soon', {title: 'Freighter'});
});

module.exports = router;
