function load(script) {
    document.write('<' + 'script src="' + script + '" type="text/javascript"><' + '/script>');
}

load("https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js");
load("https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.1.0/js/jquery.mapael.min.js");
load("https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.1.0/js/maps/world_countries_mercator.min.js");


$(function() {

    var test_plots = {
        "sydney": {
            latitude: -33.8688,
            longitude: 151.2093,
            tooltip: {
                content: "Sydney, Australia"
            }
        },
        "sydney": {
            latitude: -33.8688,
            longitude: 151.2093,
            tooltip: {
                content: "Sydney, Australia"
            }
        },
        "tokyo": {
            latitude: 35.6895,
            longitude: 139.6917,
            tooltip: {
                content: "Tokyo, Japan"
            }
        },
        "mumbai": {
            latitude: 19.0760,
            longitude: 72.8777,
            tooltip: {
                content: "Mumbai, India"
            }
        },
        "singapore": {
            latitude: 1.2896700,
            longitude: 103.8500700,
            tooltip: {
                content: "Singapore"
            }
        },
        "newyork": {
            latitude: 40.730610,
            longitude: -73.935242,
            tooltip: {
                content: "New York, USA"
            }
        },
        "bangalore": {
            latitude: 12.9719400,
            longitude: 77.5936900,
            tooltip: {
                content: "Bangalore, India"
            }
        },
        "frankfurt": {
            latitude: 50.1155200,
            longitude: 8.6841700,
            tooltip: {
                content: "Frankfurt, Germany"
            }
        }
    };

    var getElemID = function(elem) {
        // Show element ID
        return $(elem.node).attr("data-id");
    };

    $(".mapcontainer_merc").mapael({
        map: {
            name: "world_countries_mercator",
            defaultArea: {
                tooltip: {
                    content: getElemID
                }
            }
        },
        plots: test_plots
    });


});
