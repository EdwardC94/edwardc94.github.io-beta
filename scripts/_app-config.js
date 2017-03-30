(function () {
    var app = angular.module("MyWebsite", ['ngRoute', 'MyWebsiteCtrls', 'MyWebsiteServices']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html'
        }).
        when('/about', {
            templateUrl : 'partials/about.html'
        }).
        when('/projects', {
            templateUrl : 'partials/projects.html'
        }).
        when('/blog', {
            templateUrl : 'partials/blog.html',
            controller : 'BlogCTRL',
            resolve : {
                data : ['getEntries', function(getEntries){
                    return getEntries.query().$promise;   
                }]
            }
        }).
        when('/blog/:cat/:post', {
            templateUrl : 'partials/post.html',
            controller : "PostCTRL",
            resolve : {
                data : ['getEntries', function(getEntries){
                    return getEntries.query().$promise;   
                }]
            }
        }).
        when('/404', {
            templateUrl : 'partials/404.html',
            controller : "404CTRL"
        }).
        otherwise("/about")
    }])    
})();
