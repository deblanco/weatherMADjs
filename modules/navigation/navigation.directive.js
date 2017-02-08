(function() {

    'use strict';

    angular
        .module('weatherMAD.modules.navigation.navigationDirective', [])
        .directive('navigationBar', navigationDirective);

    navigationDirective.$injection = [];
    
    function navigationDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'modules/navigation/navigation.html',
            controller: ['$route', '$scope', function ($route, $scope) {
                $scope.$route = $route;
            }]
        };

        return directive;
    }

})();