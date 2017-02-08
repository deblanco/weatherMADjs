(function () {

    'use strict';

    angular
        .module('weatherMAD', [
            'ngRoute',
            'ui.bootstrap',
            'angular-skycons',
            'weatherMAD.modules'
        ])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.when('/weather', {
                templateUrl: 'modules/weather/weather.html',
                activetab: 'weather' // para poder marcar la tab activa en el navbar
            });

            $routeProvider.when('/about', {
                templateUrl: 'modules/about/about.html',
                activetab: 'about'
            });

            $routeProvider.otherwise({redirectTo: '/weather'});
        }]);

})();