(function (){
  var services = angular.module('MyWebsiteServices', ['ngResource']);
  services.
  factory('Posts', ['$resource',
    function ($resource) {
      return $resource('Database/:name.json', {}, {
        getInfo: {method: 'GET', params: { name: '' }, isArray: true }
      });
  }]).
  factory('getBooks', ['$resource',
    function ($resource) {
      return $resource('Database/:par1/:par2.json', {}, {
        getInfo: {method: 'GET', params: {par1: '', par2: ''}, isArray: true}
      });
  }]).
  factory('getPages', ['$resource',
    function ($resource) {
      return $resource('Database/:par1/:par2/:par3.json', {}, {
        getInfo: {method: 'GET', params: {par1: '', par2: '', par3: ''}, isArray: true}
      });
  }])
})();