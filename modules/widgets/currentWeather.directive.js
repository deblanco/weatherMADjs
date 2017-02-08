(function () {

    'use strict';

    angular
        .module('weatherMAD.modules.widgets.weatherChartDirective', [])
        .directive('currentWeather', weatherChart);

    weatherChart.$inject = ['DarkSkyAPI'];

    function weatherChart(DarkSkyAPI) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                model: '=',
                filters: '='
            },
            controller: ['$scope', function ($scope) {
                // pasa los datos al partial
                this.setModel = function (model) {
                    $scope.model = model;
                    model.call()
                };

            }]
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            scope.model = {};
            function _getDatos() {
                scope.model = {};
                // recogemos los datos de la api de DarkSky
                DarkSkyAPI.getForecast(scope.filters.coords)
                    .then(function (response) {
                        scope.model = response.currently;
                    });
            }

            ctrl.setModel(_getDatos);

        }
    }

})();