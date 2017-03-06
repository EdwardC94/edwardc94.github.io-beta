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
        when('/blog', {
            templateUrl : 'partials/blog.html',
            controller : 'BlogCTRL',
            resolve : {
                data : ['getEntries', function(getEntries){
                    return getEntries.query().$promise;   
                }]
            }
        }).
        otherwise("/blog")
    }])    
})();
