(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route', '$routeParams', function($scope, $route, $routeParams, data) {
        $scope.entry = data;
        console.log('$route : ' + $route + '\n $routeParams : ' + $routeParams);
        $scope.contentUrl = 'database/blog/entries/' + $route.current.params.title + '.html';
    }])
})();