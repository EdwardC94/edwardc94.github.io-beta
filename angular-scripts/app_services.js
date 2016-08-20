(function (){
  var services = angular.module('MyWebsiteServices', ['ngResource']);
  services.
  factory('getEntry', ['$resource',
    function ($resource) {
      return $resource('database/:title.json', {}, {
        getEntry: {method: 'GET', params: { title : '' }, isArray: true }
      });
  }])
})();