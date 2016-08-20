(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route', '$routeParams', function($scope, $route, $routeParams, data) {
        $scope.entry = data;
        $scope.contentUrl = 'database/blog/entries/' + $route.current.params.title + '.html';
    }])
})();