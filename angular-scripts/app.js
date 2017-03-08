(function () {
    var toggleClosed = $("[data-role='toggleClosed']"),
        main = $("#main");
    main.css("height", screen.height-150);
    toggleClosed.on("click", function() {
        var parent = $(this).parent(".menu");
        if(parent.hasClass("closed")){
            toggleClosed.parent(".menu").addClass("closed");
            parent.removeClass("closed")
        }else{
            parent.addClass("closed");
        }
    });
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
        otherwise("/blog")
    }])    
})();
