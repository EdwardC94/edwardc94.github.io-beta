(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("imhoBanner", function(){
        return {
            templateUrl : 'partials/imho-banner.html',
            scope : {
                blog : '=',
                about : '=',
                projects : '='                
            }
        }
    }).
    directive("imhoThumbnail", function(){
        return {
            templateUrl : 'partials/imho-thumbnail.html',
            scope : {
                posts : '=',
                category : "="
            }
        }
    })
})();
