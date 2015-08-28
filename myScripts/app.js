(function() {
  var app = angular.module("Blog", ['ngRoute', 'Services', 'BlogControllers']);
  
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/library', {
        templateUrl: 'partials/library.html',
        //templateUrl: 'partials/posts.html',
        controller: 'PostsController',
        resolve: {
          data: ['Posts', '$q', function (Posts, $q) {
            var deferred = $q.defer();
            var success = function (result) {
              deferred.resolve(result);
            };
            Posts.getInfo({ name: 'posts' }, success, success);
            return deferred.promise;
          }]
        }          
      }).
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/notes', {
        templateUrl: 'partials/notes.html',
        controller: 'NotesController',
        resolve: {
          data: ['Posts', '$q', function (Posts, $q) {
            var deferred = $q.defer();
            var success = function (result) {
              deferred.resolve(result);
            };
            Posts.getInfo({ name: 'notes'}, success, success);
            return deferred.promise;
          }]
        }
      }).
      when('/notes/:className', {
        templateUrl: 'partials/notes.html',
        controller: 'NotesController',
        resolve: {
          data: ['getBooks', '$q', '$location', function (getBooks, $q, $location) {
            var deferred = $q.defer();
            var success = function (result) {
              deferred.resolve(result);
            };
            var urlParts = $location.path().split("/");
            getBooks.getInfo({ par1: urlParts[1], par2: urlParts[2]}, success, success);
            return deferred.promise;
          }]
        }
      }).
      when('/notes/:className/:bookName', {
        templateUrl: 'partials/noteEntry.html',
        controller: 'NoteEntryController',
        resolve: {
          data: ['getPages', '$q', '$location', function (getPages, $q, $location) {
            var deferred = $q.defer();
            var success = function (result) {
              deferred.resolve(result);
            };
            var urlParts = $location.path().split('/');
            getPages.getInfo({ par1: urlParts[1],  par2: urlParts[2], par3: urlParts[3]}, success, success);
            return deferred.promise;
          }]
        }
      }).
      otherwise('/home');
  }]) 

})();
