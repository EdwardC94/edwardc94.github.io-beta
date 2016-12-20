(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("navigator", function(){
        return {
            templateUrl : 'partials/directives/navigator.html'
        }
    }).
    directive("post", function(){
        return {
            templateUrl : 'partials/directives/post.html'
        }
    }).
    directive("postHeader", function(){
        return {
            templateUrl : 'partials/directives/post-header.html'
        }
    }).
    directive("postSection", function(){
        return {
            templateUrl : 'partials/directives/post-section.html'
        }
    }).    
    directive("postAside", function(){
        return {
            templateUrl : 'partials/directives/post-aside.html'
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
                post : '=',
                category : "="
            }
        }
    })
})();
