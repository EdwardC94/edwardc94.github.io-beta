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
        function whereCategory (category) {
            var res = [];
            for (var i = 0; i < $scope.theData.Post.length; i++){
                if ($scope.theData.Post[i].categoryID_FK == category)
                    res.push($scope.theData.Post[i]);
            }
            return res;
        };
        var postByCat = function () {
            var res = [];
            for (var i = 0; i < $scope.theData.Category.length; i++) {
                res.push(whereCategory($scope.theData.Category[i].categoryID));
            }
            return res;
        };
        $scope.postsFiltered = postByCat();
        /*
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
        $scope.blogInfo = [ $scope.theData[$scope.dataIndex], $scope.theData[$scope.dataIndex+1], $scope.theData[$scope.dataIndex+2] ];*/
    }])
})();
