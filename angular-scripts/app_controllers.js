(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route', function($scope, $route, data) {
        $scope.entry = data;
        $scope.contentUrl = 'database/blog/entries/' + $route.current.params.title + '.html';
    }])
})();