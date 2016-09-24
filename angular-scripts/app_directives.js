(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("navigator", function(){
        return {
            templateUrl : 'partials/navigator.html'
        }
    }).
    directive("postGallery", function(){
        return {
            templateUrl : 'partials/imho-thumbnail.html',
            scope : {
                posts : '=',
                category : "="
            }
        }
    })
})();
