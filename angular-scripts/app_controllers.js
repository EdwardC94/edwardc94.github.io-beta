(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route',  '$routeParams', function($scope, data, $route, $routeParams) {
        $scope.entry = data;
        console.log('$routeParams : ' + $routeParams + '\n$routeParams.title : '+$routeParams.title);
        $scope.contentUrl = 'database/blog/entries/' + $routeParams.title + '.html';
    }])
})();