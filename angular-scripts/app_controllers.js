(function () {
    function wherePropAndValue(property, value, data, isArray) {
        var res;
        if(isArray) {
            res = [];
            switch (property) {
                case "categoryID_FK":
                    for (var i = 0; i < data.length; i++){
                        if (data[i].categoryID_FK == value)
                            res.push(data[i]);
                    }
                    break;
                case "authorID_FK":
                    for (var i = 0; i < data.length; i++){
                        if (data[i].authorID_FK == value)
                            res.push(data[i]);
                    }
                    break;
            }
            if(res.length > 0 ){
                res.reverse;
            }
        }else{
            var i = 0;
            switch (property) {
                case "title":
                    while (i < data.length && data[i].title !== value){
                        i++;
                    }
                    break;
                case "url":
                    while (i < data.length && data[i].url !== value){
                        i++;
                    }
                    break;
            };
            res = (i < data.length) ? data[i] : false;
        }
        return res;
    }
    function whereCategoryID (categoryID, postArray) {
        var res = [];
        for (var i = 0; i < postArray.length; i++){
            if (postArray[i].categoryID_FK == categoryID)
                res.push(postArray[i]);
        }
        return res.reverse();
    };
    function getCategoryIDbyCategoryName (categoryName, categoryArray) {
        var res;
        for (var i = 0; i < categoryArray.length; i++){
            if (categoryArray[i].name == categoryName)
                res = categoryArray[i].categoryID;
        }
        return res;
    };
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route',  '$routeParams', function($scope, data, $route, $routeParams) {
        $scope.theData = data;
        var postArray = $scope.theData.Post;
        var categoryArray = $scope.theData.Category;
        var isValid =  wherePropAndValue("url", $routeParams.entry, postArray, false);
        if(isValid) { 
            $scope.entry = isValid;
            $scope.postsFiltered = wherePropAndValue("categoryID_FK", isValid.categoryID_FK, postArray, true);
            $scope.contentUrl = 'partials/blog/' + $routeParams.category + '/' + $routeParams.entry + '.html';
        }else{
            $scope.contentUrl = 'partials/404.html';
        }
    }]).
    controller('IMHOCtrl', ['$scope', 'data', function($scope, data) {
        $scope.theData = data;
        var postArray = $scope.theData.Post;
        var categoryArray = $scope.theData.Category;
        var postByCat = function () {
            var res = [];
            for (var i = 0; i < categoryArray.length; i++) {
                res.push(wherePropAndValue("categoryID_FK", categoryArray[i].categoryID, postArray, true));                
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
