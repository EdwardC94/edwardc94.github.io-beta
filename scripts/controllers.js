(function () {
    var SushiAppControllers = angular.module('SushiControllers', ['ngSanitize']);
    SushiAppControllers.controller('IndexController', ['$scope',
        function ($scope) {
            $scope.pos = 1;
            $scope.isPos = function (value) {
                return value === $scope.pos;
            };
            $scope.setPos = function (value) {
                $scope.pos = value;
            };
        }]);

    SushiAppControllers.controller('InicioController', ['$scope',
        function ($scope) {
            $scope.nombre = 'Sushi Tako Oishi';
            $scope.greeting = 'Atrevete';
        }]);
    SushiAppControllers.controller('MenuController', ['$scope', 'datosMenu',
        function ($scope, datosMenu) {
            $scope.dm = datosMenu;
            $scope.pos = 1;
            $scope.isPos = function (value) {
                return value === $scope.pos;
            };
            $scope.setPos = function (value) {
                $scope.pos = value;
            };
        }]);
    SushiAppControllers.controller('SucursalController', ['$scope', '$sce', 'datosSucursales',
        function ($scope, $sce, datosSucursales) {
            $scope.ds = datosSucursales;
            $scope.mapa = $sce.trustAsResourceUrl($scope.ds[0].mapa);
            $scope.dir = $scope.ds[0].dir;
            $scope.tel = $scope.ds[0].tel;
            $scope.setMapa = function (value) {
                $scope.mapa = $sce.trustAsResourceUrl($scope.ds[value].mapa);
                $scope.dir = $scope.ds[value].dir;
                $scope.tel = $scope.ds[value].tel;
            }
        }]);
    SushiAppControllers.controller('AcercaDeController', ['$scope',
    function ($scope) {
        $scope.mision = 'En Sushi Tako Oishi lo más importante para nosotros es el cliente. Buscamos establecer una relación con ellos y entender qué es lo que podemos agregar para hacer más satisfactoria su experiencia. Buscamos también crear valor para la comunidad y para nuestros empleados de tal manera que Sushi Tako Oishi crezca y alcance más clientes.';
        $scope.vision = 'Para crear una relación duradera con nuestros cliente, ponemos a su alcance platillos con ingredientes de la más alta calidad. Los restaurantes están diseñados de tal manera que el cliente siempre se sienta bienvenido y busque volver. Nuestros empleados son constantemente incentivados a hacer del cliente un cliente feliz, pues saben que trabajan en un ambiente estable y cómodo.';
        $scope.valores = ['Servicio', 'Utilidad', 'Sabor', 'Honestidad', 'Integridad'];
    }]);


})();
