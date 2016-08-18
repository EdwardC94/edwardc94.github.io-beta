(function () {
    var app = angular.module("MyWebsite", ['ngRoute', 'MyWebsiteCtrls']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeCtrl'/*,
            resolve : {
                data : ['provider', $q, function (provider, $q) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    provider.getInfo({ name : 'info'}, success, success);
                    return deferred.promise;
                }]
            }*/
        })
    }])    
})();