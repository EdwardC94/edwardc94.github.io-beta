(function () {
    function where (property, value, data, isArray) {
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
                case "cat_name":
                    while (i < data.length && data[i].name.toLowerCase() !== value){
                        i++;
                    }
                    break;
            };
            res = (i < data.length) ? data[i] : false;
        }
        return res;
    };
    function groupByCategoryID_FK (categories, posts) {
        var res = [];
        for (var i = 0; i < categories.length; i++){
            res.push(where("categoryID_FK", categories[i].categoryID, posts, true));   
        }
        return res;
    };
    angular.module('MyWebsiteCtrls', ['ngRoute']).
    controller('HomeCtrl', ['$scope', function ($scope) {
    }]).
    controller('BlogEntryCtrl', ['$scope', 'data', '$route',  '$routeParams', function($scope, data, $route, $routeParams) {
        var theData = data;
        var isValid =  where("url", $routeParams.entry, theData.Post, false);
        if(isValid) { 
            $scope.post = isValid;
            $scope.category = where("categoryID", isValid.categoryID_FK, theData.Category, false);
            $scope.author = where("authorID", isValid.authorID_FK, theData.Author, false);
            $scope.postsFiltered = where("categoryID_FK", isValid.categoryID_FK, theData.Post, true);
            $scope.contentUrl = 'partials/blog/' + $routeParams.category + '/' + $routeParams.entry + '.html';
        }else{
            $scope.contentUrl = 'partials/404.html';
        }
    }]).
    controller('IMHOCtrl', ['$scope', 'data', function($scope, data) {
        var theData = data;
        var last = theData.Post[theData.Post.length-1];
        $scope.latestPost = { post : last, category : where("categoryID", last.categoryID_FK, theData.Category, false) };
        $scope.categories = theData.Category;
        $scope.postsFiltered = groupByCategoryID_FK($scope.categories, theData.Post);
    }]).
    controller('CategoryController', ['$scope', 'data', '$routeParams', function($scope, data, $routeParams) {
        var theData = data, cat = $routeParams.category;
        var isValid = where("cat_name", cat, theData.Category, false);
        console.log(isValid);
        if(isValid) {
            $scope.category = isValid;
            $scope.posts = where("categoryID_FK", $scope.category.categoryID, theData.Post, true); 
            console.log($scope.posts);
        }
    }]);
})();
