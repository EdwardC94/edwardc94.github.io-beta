(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("navigator", function(){
        return {
            templateUrl : 'partials/directives/navigator.html'
        }
    }).
    directive("post", function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl : 'partials/directives/post.html'
        }
    }).
    directive("postSection", function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl : 'partials/directives/post-section.html'
        }
    }).    
    directive("postAside", function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl : 'partials/directives/post-aside.html'
        }
    }).   
    directive("postSectionFw", function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl : 'partials/directives/post-section-fw.html'
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
