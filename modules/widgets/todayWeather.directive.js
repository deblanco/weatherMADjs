(function () {

    'use strict';

    angular
        .module('weatherMAD.modules.widgets.todayWeather', [])
        .directive('todayWeather', todayWeather);

    todayWeather.$injection = ['DarkSkyAPI'];

    function todayWeather(DarkSkyAPI) {
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
                        // recogemos el primer valor del objeto daily, que corresponde al dia presente
                        scope.model = response.daily.data[0];
                    });
            }

            ctrl.setModel(_getDatos);
        }

    }

})();