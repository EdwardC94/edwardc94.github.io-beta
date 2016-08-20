(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', function($scope, $route) {
        $scope.entry = data;
        $scope.contentUrl = 'database/blog/entries/' + $route.current.params.title + '.html';
    }])
})();