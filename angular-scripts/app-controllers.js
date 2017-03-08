(function () {
    function getPostbyUrl(data, url){
        return data.find(function(element){
            return element.url === url;
        });
    };
    function getPostbyTitle(data, title){
        return data.find(function(element){
            return element.title === title;
        });
    };
    function getPostsbyCat(data, category){
        var res = data.filter(function(element){
            return element.category = category;
        });
        return res.length > 0 ? res : false;
    }
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogCTRL', ['$scope', 'data', function($scope, data) {
        var all = data.reverse();
        $scope.posts = {
            "featured" : all.slice(0,7),
            "old" : all.slice(7, undefined)
        };
    }]).
    controller('PostCTRL', ['$scope', 'data', '$location', function($scope, data, $location) {
        var isValid = getPostbyUrl(data, $location.url());
        $scope.post = !!isValid ? isValid : {
                "postID": 0,
                "title": "Post does not exist",
                "url": "/blog",
                "image": {
                    "url": "images/blog/LIS0001-rockabye.jpg",
                    "source": "Wikipedia - Warner Bros. Music"
                },
                "date": new Date(Date.now).toLocaleDateString(),
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante lacus, vitae posuere nisl semper vel. Praesent accumsan sem id vulputate elementum.",
                "tags": ["foo", "bar", "largerTag", "small"],
                "category": "error"
            };
    }]).
    controller('404CTRL', ['$scope', 'data', function($scope, data) {
    }]).
    controller('BlogMenuCTRL', ['$scope', '$http', function($scope, $http) {
    }]);
})();
