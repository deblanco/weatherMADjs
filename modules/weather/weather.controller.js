(function () {

    'use strict';

    angular
        .module('weatherMAD.modules.weather.weather.controller', [])
        .controller('WeatherController', WeatherController);

    WeatherController.$injection = ['$rootScope'];

    function WeatherController($rootScope) {
        var vm = this;

        vm.filters = {};
        // coordenadas de la ciudad de la que queremos el Forecast
        vm.filters.coords = '40.4165,-3.7025';
        vm.filters.city = 'Madrid';

        // array con las directivas que cargaremos
        vm.widgets = [
            'modules/widgets/current_weather.html',
            'modules/widgets/today_weather.html',
            'modules/widgets/today_forecast.html',
            'modules/widgets/day_widget.html'
        ];

    }

})();