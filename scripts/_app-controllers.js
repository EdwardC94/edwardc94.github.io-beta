(function () {
    //Custom queries on the data retrieved by the services BEGINS
    function getPostbyUrl(data, url) {
        return data.find(function (element) {
            return element.url === url;
        });
    };
    function getPostbyTitle(data, title) {
        return data.find(function (element) {
            return element.title === title;
        });
    };
    function getPostsbyCat(data, category) {
        var res = data.filter(function (element) {
            return element.category = category;
        });
        return res.length > 0 ? res : false;
    };
    //ENDS

    //Part of the code that adds functionality to the menu component BEGINS
    var toggleClosed = $("[data-role='toggleClosed']"),
        allMenus = $(".menu"),
        main = $("#main");

    function closeAllMenus() {
        allMenus.addClass("closed");
    }

    allMenus.on("mouseleave", function () {
        closeAllMenus();
    })

    toggleClosed.on("click", function () {
        var parent = $(this).parent(".menu");
        if (parent.hasClass("closed")) {
            closeAllMenus();
            parent.removeClass("closed")
        } else {
            parent.addClass("closed");
        }
    });
    //ENDS

    //To make the size of the page as close as possible to the actual size of the vp.
    main.css("height", screen.height - 150);

    angular.module('MyWebsiteCtrls', ['ngRoute']).
        controller('HomeCTRL', ['$scope', function ($scope) {
        }]).
        controller('BlogCTRL', ['$scope', 'data', function ($scope, data) {
            var all = data.reverse();
            $scope.posts = {
                "featured": all.slice(0, 7),
                "old": all.slice(7, undefined)
            };
        }]).
        controller('PostCTRL', ['$scope', 'data', '$location', function ($scope, data, $location) {
            var isValid = getPostbyUrl(data, $location.url());
            $scope.post = !!isValid ? isValid : {
                "postID": 0,
                "title": "Post does not exist",
                "url": "/blog",
                "image": {
                    "url": "images/blog/LIS0001-rockabye.jpg",
                    "source": "Wikipedia - Warner Bros. Music"
                },
                "date": new Date(Date.now).toLocaleDateString(),
                "tags": ["foo", "bar", "largerTag", "small"],
                "category": "error"
            };
        }]).
        controller('404CTRL', ['$scope', function ($scope) {
        }]).
        controller('MenuCTRL', ['$scope', '$http', '$location', function ($scope, $http, $location) {
            function isPath(path) {
                return $location.url().startsWith(path);
            }
            $scope.show = isPath;
        }]);
})();
