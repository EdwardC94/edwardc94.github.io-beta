(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
        var toggleClosed = $("[data-role='toggleClosed']");
        $("#content").on("click", function () {
            toggleClosed.parent(".menu").addClass("closed");
        });
    }]).
    controller('BlogCTRL', ['$scope', 'data', function($scope, data) {
        var all = data.reverse();
        $scope.posts = {
            "featured" : all.slice(0,7),
            "old" : all.slice(7, undefined)
        };
    }]).
    controller('BlogMenuCTRL', ['$scope', '$http', function($scope, $http) {
        $http.get('database/blog/posts.json').then(function (response) {
            $scope.data = response.data;
        });
    }]);
})();
