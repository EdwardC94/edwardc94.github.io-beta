(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("navigator", function(){
        return {
            templateUrl : 'partials/directives/navigator.html'
        }
    }).
    directive("postGallery", function(){
        return {
            templateUrl : 'partials/directives/post-gallery.html',
            scope : {
                posts : '=',
                category : "="
            }
        }
    }).
    directive("articleThumbnail", function(){
        return {
            templateUrl : 'partials/directives/article-thumbnail.html',
            scope : {
                article : '=',
            }
        }
    })
})();
