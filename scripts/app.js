(function () {
    var app = angular.module('Sushi', ['ngRoute', 'SushiServicios', 'SushiControllers']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/bienvenido', {
                    templateUrl: 'partials/inicio.html',
                    controller: 'InicioController'
                }).
                when('/menu', {
                    templateUrl: 'partials/menu.html',
                    controller: 'MenuController',
                    resolve: {
                        datosMenu: ['Datos', '$q', function (Datos, $q) {
                            var deferred = $q.defer();
                            var success = function (result) {
                                deferred.resolve(result);
                            };
                            Datos.getInfo({nombre: 'sushiMenu'}, success, success);
                            return deferred.promise;
                        }]
                    }
                }).
                when('/sucursales', {
                    templateUrl: 'partials/sucursales.html',
                    controller: 'SucursalController',
                    resolve: {
                        datosSucursales: ['Datos', '$q', function (Datos, $q) {
                            var deferred = $q.defer();
                            var success = function (result) {
                                deferred.resolve(result);
                            };
                            Datos.getInfo({ nombre: 'sushiSucursales' }, success, success);
                            return deferred.promise;
                        }]
                    }                    
                }).when('/acercaDe', {
                    templateUrl: 'partials/acercaDe.html',
                    controller: 'AcercaDeController'
                }).
                otherwise({
                    redirectTo: '/bienvenido'
                })
        }]);
})();
