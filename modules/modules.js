(function () {

    'use strict';

    /*
     * @desc declaracion de los modulos que se usaran en la aplicacion
     * revisar app/app.js
    */

    angular
        .module('weatherMAD.modules', [
            'weatherMAD.modules.weather.weather.controller',
            'weatherMAD.modules.navigation.navigationDirective',
            'weatherMAD.modules.widgets.weatherChartDirective',
            'weatherMAD.modules.widgets.dayWidget',
            'weatherMAD.modules.widgets.todayForecast',
            'weatherMAD.modules.widgets.todayWeather',
            'weatherMAD.modules.darksky.darksky'
        ]);

})();