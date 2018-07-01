$(document).ready(function() {

    "use strict"; // Start of use strict

    /**
     * SVG path for target icon
     */
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    /**
     * SVG path for plane icon
     */
    // var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    var truckSVG = "M226.764,375.35c-28.249,0-51.078,22.91-51.078,51.16c0,28.166,22.829,51.078,51.078,51.078s51.078-22.912,51.078-51.078\n" +
        "\t\t\tC277.841,398.26,255.013,375.35,226.764,375.35z M226.764,452.049c-14.125,0-25.54-11.498-25.54-25.541\n" +
        "\t\t\tc0-14.123,11.415-25.539,25.54-25.539c14.124,0,25.539,11.416,25.539,25.539C252.302,440.551,240.888,452.049,226.764,452.049z\n" +
        "\t\t\t M612,337.561v54.541c0,13.605-11.029,24.635-24.636,24.635h-26.36c-4.763-32.684-32.929-57.812-66.927-57.812\n" +
        "\t\t\tc-33.914,0-62.082,25.129-66.845,57.812H293.625c-4.763-32.684-32.93-57.812-66.845-57.812c-33.915,0-62.082,25.129-66.844,57.812\n" +
        "\t\t\th-33.012c-13.606,0-24.635-11.029-24.635-24.635v-54.541H612L612,337.561z M494.143,375.35c-28.249,0-51.16,22.91-51.16,51.16\n" +
        "\t\t\tc0,28.166,22.912,51.078,51.16,51.078c28.166,0,51.077-22.912,51.077-51.078C545.22,398.26,522.309,375.35,494.143,375.35z\n" +
        "\t\t\t M494.143,452.049c-14.125,0-25.539-11.498-25.539-25.541c0-14.123,11.414-25.539,25.539-25.539\n" +
        "\t\t\tc14.042,0,25.539,11.416,25.539,25.539C519.682,440.551,508.185,452.049,494.143,452.049z M602.293,282.637l-96.817-95.751\n" +
        "\t\t\tc-6.159-6.077-14.453-9.526-23.076-9.526h-48.86v-18.313c0-13.631-11.004-24.635-24.635-24.635H126.907\n" +
        "\t\t\tc-13.55,0-24.635,11.005-24.635,24.635v3.86L2.3,174.429l177.146,23.068L0,215.323l178.814,25.423L0,256.25l102.278,19.29\n" +
        "\t\t\tl-0.007,48.403h509.712v-17.985C611.983,297.171,608.452,288.796,602.293,282.637z M560.084,285.839h-93.697\n" +
        "\t\t\tc-2.135,0-3.86-1.724-3.86-3.859v-72.347c0-2.135,1.725-3.86,3.86-3.86h17.82c0.985,0,1.971,0.411,2.71,1.068l75.796,72.347\n" +
        "\t\t\tC565.257,281.569,563.532,285.839,560.084,285.839z";
    /**
     * Create the map
     */
    var map = AmCharts.makeChart("chartMap", {
        "type": "map",
        "theme": "light",

        "projection": "winkel3",
        "dataProvider": {
            "map": "worldLow",

            "lines": [{
                "id": "line1",
                "arc": -0.85,
                "alpha": 0.3,
                "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
            }, {
                "id": "line2",
                "alpha": 0,
                "color": "#E5343D",
                "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
            }],
            "images": [{
                "svgPath": targetSVG,
                "title": "Bangladesh",
                "latitude": 23.684994,
                "longitude": 90.356331
            }, {
                "svgPath": targetSVG,
                "title": "Paris",
                "latitude": 48.8567,
                "longitude": 2.3510
            }, {
                "svgPath": targetSVG,
                "title": "Toronto",
                "latitude": 43.8163,
                "longitude": -79.4287
            }, {
                "svgPath": targetSVG,
                "title": "Los Angeles",
                "latitude": 34.3,
                "longitude": -118.15
            }, {
                "svgPath": targetSVG,
                "title": "Havana",
                "latitude": 23,
                "longitude": -82
            }, {}, {
                "svgPath": targetSVG,
                "title": "Russia",
                "latitude": 61.524010,
                "longitude": 105.318756
            }, {}, {
                "svgPath": targetSVG,
                "title": "India",
                "latitude": 20.593684,
                "longitude": 78.962880
            }, {}, {
                "svgPath": targetSVG,
                "title": "Iraq",
                "latitude": 33.223191,
                "longitude": 43.679291
            }, {
                "svgPath": truckSVG,
                "positionOnLine": 0,
                "color": "#000000",
                "alpha": 0.1,
                "animateAlongLine": true,
                "lineId": "line2",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 1.3
            }, {
                "svgPath": truckSVG,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 1.8
            }]
        },

        "areasSettings": {
            "unlistedAreasColor": "#5b69bc"
        },

        "imagesSettings": {
            "color": "#E5343D",
            "rollOverColor": "#E5343D",
            "selectedColor": "#E5343D",
            "pauseDuration": 0.8,
            "animationDuration": 8,
            "adjustAnimationSpeed": true
        },

        "linesSettings": {
            "color": "#E5343D",
            "alpha": 0.4
        },

        "export": {
            "enabled": true
        }

    });

    var chart = AmCharts.makeChart("chartPie", {
        "type": "pie",
        //                    "theme": "light",
        "addClassNames": true,
        "classNameField": "class",
        "dataProvider": [{
            "value": 4852,
            "class": "color1"
        }, {
            "value": 9899,
            "class": "color2"
        }, {
            "value": 7789,
            "class": "color3"
        }],
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
            "enabled": true
        }
    });



    //Column chart with images on top
    var chart = AmCharts.makeChart("column", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
            "name": "Salauddin",
            "points": 35654,
            "color": "#428bca",
            "bullet": "assets/plugins/amcharts/images/A04.png"
        }, {
            "name": "Tuhin",
            "points": 65456,
            "color": "#03A9F5",
            "bullet": "assets/plugins/amcharts/images/C02.png"
        }, {
            "name": "Jahangir",
            "points": 45724,
            "color": "#FFB61E",
            "bullet": "assets/plugins/amcharts/images/D02.png"
        }, {
            "name": "Tanjil",
            "points": 13654,
            "color": "#62d0f1",
            "bullet": "assets/plugins/amcharts/images/E01.png"
        }, {
            "name": "Naeem",
            "points": 53654,
            "color": "#E5343D",
            "bullet": "assets/plugins/amcharts/images/A04.png"
        }],
        "valueAxes": [{
            "maximum": 80000,
            "minimum": 0,
            "axisAlpha": 0,
            "dashLength": 4,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
            "bulletOffset": 10,
            "bulletSize": 52,
            "colorField": "color",
            "cornerRadiusTop": 8,
            "customBulletField": "bullet",
            "fillAlphas": 0.9,
            "lineAlpha": 0,
            "type": "column",
            "valueField": "points"
        }],
        "marginTop": 0,
        "marginRight": 0,
        "marginLeft": 0,
        "marginBottom": 0,
        "autoMargins": false,
        "categoryField": "name",
        "categoryAxis": {
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "tickLength": 0
        },
        "export": {
            "enabled": true
        }
    });

});