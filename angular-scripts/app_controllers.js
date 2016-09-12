(function () {
    function whereCategory (categoryString, postArray) {
        var res = [];
        for (var i = 0; i < postArray.length; i++){
            if (postArray[i].categoryID_FK == categoryString)
                res.push(postArray.Post[i]);
        }
        return res.reverse();
    };
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route',  '$routeParams', function($scope, data, $route, $routeParams) {
        $scope.theData = data;
        $scope.contentUrl = 'partials/blog/' + $routeParams.category + '/' + $routeParams.entry + '.html';
    }]).
    controller('IMHOCtrl', ['$scope', 'data', function($scope, data) {
        $scope.theData = data;
        var postArray = $scope.theData.Post;
        var categoryArray = $scope.theData.Category;
        var postByCat = function () {
            var res = [];
            for (var i = 0; i < categoryArray.length; i++) {
                res.push(whereCategory(categoryArray[i].categoryID, postArray));                
            }
            return res;
        }
        /*
        function whereCategory (category) {
            var res = [];
            for (var i = 0; i < $scope.theData.Post.length; i++){
                if ($scope.theData.Post[i].categoryID_FK == category)
                    res.push($scope.theData.Post[i]);
            }
            return res.reverse();
        };
        var postByCat = function () {
            var res = [];
            for (var i = 0; i < $scope.theData.Category.length; i++) {
                res.push(whereCategory($scope.theData.Category[i].categoryID));
            }
            return res;
        };*/
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
