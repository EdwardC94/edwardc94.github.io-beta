(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("imhoBanner", function(){
        return {
            templateUrl : 'partials/imho-banner.html'
        }
    }).
    directive("imhoThumbnail", function(){
        return {
            templateUrl : 'partials/imho-thumbnail.html',
            scope : {
                posts : '='
            }
        }
    })
})();
