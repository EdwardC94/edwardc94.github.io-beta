(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$routeParams', function($scope, $routeParams, data) {
        $scope.entry = data;
        console.log('$routeParams : ' + $routeParams);
        $scope.contentUrl = 'database/blog/entries/' + $routeParams.title + '.html';
    }])
})();