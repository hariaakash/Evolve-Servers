function load(script) {
	document.write('<' + 'script src="' + script + '" type="text/javascript"><' + '/script>');
}

load('https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js');
load('https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.1.0/js/jquery.mapael.min.js');
load(
	'https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.1.0/js/maps/world_countries_mercator.min.js'
);

$(function() {
	var test_plots = {
		sydney: {
			latitude: -33.8688,
			longitude: 151.2093,
			tooltip: {
				content: 'Sydney, Australia'
			}
		},
		sydney: {
			latitude: -33.8688,
			longitude: 151.2093,
			tooltip: {
				content: 'Sydney, Australia'
			}
		},
		tokyo: {
			latitude: 35.6895,
			longitude: 139.6917,
			tooltip: {
				content: 'Tokyo, Japan'
			}
		},
		mumbai: {
			latitude: 19.076,
			longitude: 72.8777,
			tooltip: {
				content: 'Mumbai, India'
			}
		},
		singapore: {
			latitude: 1.28967,
			longitude: 103.85007,
			tooltip: {
				content: 'Singapore'
			}
		},
		newyork: {
			latitude: 40.73061,
			longitude: -73.935242,
			tooltip: {
				content: 'New York, USA'
			}
		},
		bangalore: {
			latitude: 12.97194,
			longitude: 77.59369,
			tooltip: {
				content: 'Bangalore, India'
			}
		},
		frankfurt: {
			latitude: 50.11552,
			longitude: 8.68417,
			tooltip: {
				content: 'Frankfurt, Germany'
			}
		},
		helsinki: {
			latitude: 60.1699,
			longitude: 24.9384,
			tooltip: {
				content: 'Helsinki, Finland'
			}
		}
	};

	var getElemID = function(elem) {
		// Show element ID
		return $(elem.node).attr('data-id');
	};

	$('.mapcontainer_merc').mapael({
		map: {
			name: 'world_countries_mercator',
			defaultArea: {
				tooltip: {
					content: getElemID
				}
			}
		},
		plots: test_plots
	});
});
