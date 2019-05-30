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
		},
		amsterdam: {
			latitude: 52.368,
			longitude: 4.9036,
			tooltip: {
				content: 'Amsterdam, Netherlands'
			}
		},
		milan: {
			latitude: 45.4642,
			longitude: 9.19,
			tooltip: {
				content: 'Milan, Italy'
			}
		},
		stockholm: {
			latitude: 59.3293,
			longitude: 18.0686,
			tooltip: {
				content: 'Stockholm, Sweden'
			}
		},
		london: {
			latitude: 51.5074,
			longitude: 0.1278,
			tooltip: {
				content: 'London, UK'
			}
		},
		newyork: {
			latitude: 40.73061,
			longitude: -73.935242,
			tooltip: {
				content: 'New York, USA'
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
