(function (){
    var services = angular.module('MyWebsiteServices', ['ngResource']).
    factory('getEntry', ['$resource', function ($resource) {
        return $resource('database/blog/entries/:title.json', {}, {
            getEntry : { method : 'GET', params : { title : '' }, isArray : false }
      });
  }])
})();
