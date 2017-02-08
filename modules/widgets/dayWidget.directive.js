(function () {

    'use strict';

    /*
     * @desc widget que mostrara el resumen del tiempo del dia
     */

    angular
        .module('weatherMAD.modules.widgets.dayWidget', [])
        .directive('dayWidget', dayWidget);

    dayWidget.$injection = ['DarkSkyAPI'];

    function dayWidget(DarkSkyAPI) {
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
                        scope.model = response.daily.data;
                        // cogemos los 4 siguientes dias
                        scope.model.splice(0, 1); // elimina el dia de hoy
                        scope.model.splice(4);
                    });
            }

            ctrl.setModel(_getDatos);
        }

    }

})();