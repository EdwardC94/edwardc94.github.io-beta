(function () {
    var app = angular.module("MyWebsite", ['ngRoute', 'MyWebsiteCtrls', 'MyWebsiteServices', 'MyWebsiteDirectives']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeCtrl'
        }).
        when('/blog', {
            templateUrl : 'partials/blog.html'
        }).
        when('/blog/:entry', {
            templateUrl : 'partials/blog_entry.html',
            controller : 'BlogEntryCtrl',
            resolve : {
                data : ['getEntry', '$q', '$route', function (getEntry, $q, $route) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    getEntry.getEntry({ title : $route.current.params.entry }, success, success);
                    return deferred.promise;
                }]
            }
        }).
        otherwise("/home")
    }])    
})();
