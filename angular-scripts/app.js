(function () {
    var app = angular.module("MyWebsite", ['ngRoute', 'MyWebsiteCtrls', 'MyWebsiteServices', 'MyWebsiteDirectives']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeCtrl'
        }).
        when('/blog', {
            templateUrl : 'partials/blog.html',
            controller : 'IMHOCtrl',
            resolve : {
                data : ['getEntries', '$q', function (getEntries, $q) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    getEntries.getEntries({}, success, success);
                    return deferred.promise;
                }]
            }
        }).when('/blog/:category', {
            templateUrl : 'partials/blog_category.html'
        }).
        when('/blog/:category/:entry', {
            templateUrl : 'partials/blog_entry.html',
            controller : 'BlogEntryCtrl',
            resolve : {
                data : ['getEntries', '$q', function (getEntries, $q) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    getEntries.getEntries({}, success, success);
                    return deferred.promise;
                }]
            }
        }).
        otherwise("/home")
    }])    
})();
