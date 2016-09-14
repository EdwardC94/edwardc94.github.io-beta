(function () {
    angular.module("MyWebsiteDirectives", []).
    directive("imhoBanner", function(){
        return {
            templateUrl : 'partials/imho-banner.html',
            scope : {
                tab_img_blog : '=',
                tab_img_about : '=',
                tab_img_projects : '='                
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
