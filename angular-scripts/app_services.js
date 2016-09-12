(function (){
    var services = angular.module('MyWebsiteServices', ['ngResource']).
    factory('getEntries', ['$resource', function ($resource) {
        return $resource('database/blog/entries.json', {}, {
            getEntries : { method : 'GET', params : {}, isArray : false }
        })
    }])
})();
