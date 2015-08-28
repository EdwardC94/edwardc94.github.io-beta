(function () {
    var serviciosSushi = angular.module('SushiServicios', ['ngResource']);

    serviciosSushi.factory('Datos', ['$resource',
        function ($resource) {
            return $resource('Datos/:nombre.json', {}, {
                getInfo: { method: 'GET', params: { nombre: '' }, isArray: true }
                //getInfoMenu: { method: 'GET', params: { nombre: 'sushiMenu2' }, isArray: true },
                //getInfoSucursales: { method: 'GET', params: { nombre: 'sushiSucursales' }, isArray: true }
            });
        }]);
})();
