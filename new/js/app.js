angular.module("evolveApp", ['angular-loading-bar', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("main", {
                views: {
                    '': {
                        abstract: true,
                        templateUrl: './partials/master.html',
                        controller: function($scope) {}
                    },
                    'header@main': {
                        templateUrl: './partials/header.html',
                        controller: function($scope) {}
                    },
                    'footer@main': {
                        templateUrl: './partials/footer.html',
                        controller: function($scope) {}
                    }
                }
            })
            .state("main.home", {
                url: "/home",
                views: {
                    'content': {
                        templateUrl: './pages/home.html',
                        controller: function($scope) {}
                    }
                }
            });
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    });
