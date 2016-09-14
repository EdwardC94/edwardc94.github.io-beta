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
                case "categoryID":
                    while (i < data.length && data[i].categoryID !== value){
                        i++;
                    }
                    break;
                case "authorID":
                    while (i < data.length && data[i].authorID !== value){
                        i++;
                    }
                    break;
            };
            res = (i < data.length) ? data[i] : false;
        }
        return res;
    }
    function postByCat () {
            var res = [];
            for (var i = 0; i < $scope.categories.length; i++) {
                res.push(wherePropAndValue("categoryID_FK", $scope.categories[i].categoryID, theData.Post, true));                
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
        var theData = data;
        var isValid =  wherePropAndValue("url", $routeParams.entry, theData.Post, false);
        if(isValid) { 
            $scope.entry = isValid;
            $scope.category = wherePropAndValue("categoryID", isValid.categoryID_FK, theData.Category, false);
            $scope.author = wherePropAndValue("authorID", isValid.authorID_FK, theData.Category, false);
            $scope.postsFiltered = wherePropAndValue("categoryID_FK", isValid.categoryID_FK, theData.Post, true);
            $scope.contentUrl = 'partials/blog/' + $routeParams.category + '/' + $routeParams.entry + '.html';
        }else{
            $scope.contentUrl = 'partials/404.html';
        }
    }]).
    controller('IMHOCtrl', ['$scope', 'data', function($scope, data) {
        var theData = data
        $scope.categories = theData.Category;
        $scope.postsFiltered = postByCat();
    }])
})();
