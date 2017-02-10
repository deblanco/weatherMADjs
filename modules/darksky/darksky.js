(function () {

    'use strict';

    angular
        .module('weatherMAD.modules.darksky.darksky', [])
        .factory('DarkSkyAPI', DarkSkyAPI);

    DarkSkyAPI.$injection = ['$http', '$q'];

    function DarkSkyAPI($http, $q) {

        var APIKEY = 'db37661999000be0d1a58b80d38459a4';

        return {
            getForecast: getForecast
        };

        function getForecast(filter) {
            var deferred = $q.defer();

            // https://darksky.net/
            $http({
                method: 'GET',
                url: 'https://api.darksky.net/forecast/' + APIKEY + '/' + filter + '/?lang=es&units=auto&callback=?',
                cache: true,
                timeout: 3000
            })
                .then(
                    function (response) {
                        if (response) {
                            // completamos la promesa con los datos obtenidos
                            deferred.resolve(response.data);
                        } else {
                            deferred.reject("No data");
                        }
                    },
                    // En caso de que ocurra algun error con la peticion completaremos la promesa con el msg
                    function (response) {
                        deferred.reject("Error", response)
                    });
            return deferred.promise;
        }
    }

})();
