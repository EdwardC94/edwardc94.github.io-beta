(function (){
    var services = angular.module('MyWebsiteServices', ['ngResource']).
    factory('getEntries', ['$resource', function ($resource) {
        return $resource('database/blog/posts.json');
    }])
})();
