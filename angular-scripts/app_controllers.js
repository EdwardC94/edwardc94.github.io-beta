(function () {
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route',  '$routeParams', function($scope, data, $route, $routeParams) {
        $scope.entry = data;
        $scope.contentUrl = 'database/blog/entries/' + $routeParams.entry + '.html';
    }]).
    controller('IMHOCtrl', ['$scope', 'data', function($scope, data) {
        $scope.theData = data;
        var max = data.length - 2 
        $scope.dataIndex = 0
        $scope.move = function (direction) {
            if (direction == "left") {
                if($scope.dataIndex > 0)
                    $scope.dataIndex--;
            } else if (direction == "right") {
                if($scope.dataIndex < max)
                    $scope.dataIndex++;
            }
        }
        $scope.blogInfo = [ $scope.theData[$scope.dataIndex], $scope.theData[$scope.dataIndex+1], $scope.theData[$scope.dataIndex+2] ];
    }])
})();
