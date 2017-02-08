(function () {

    'use strict';

    // esta directiva mostrara la prevision para las proximas 6horas

    angular
        .module('weatherMAD.modules.widgets.todayForecast', [])
        .directive('todayForecast', todayForecast);

    todayForecast.$injection = ['DarkSkyAPI'];

    function todayForecast(DarkSkyAPI) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                model: '=',
                filters: '='
            },
            controller: ['$scope', function ($scope) {

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
                // recogemos los datos de la api de DarkSky
                DarkSkyAPI.getForecast(scope.filters.coords)
                    .then(function (response) {
                        scope.model = response.hourly.data;
                        scope.model.splice(0, 1); // eliminamos el primero del array que corresponde al tiempo actual
                        scope.model.splice(8); // nos quedaremos con las 8 siguientes horas
                    });
            }

            ctrl.setModel(_getDatos);
        }

    }

})();