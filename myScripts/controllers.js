(function () {
  angular.module('BlogControllers', ['ngSanitize'])
  .controller('PostsController', ['$scope', 'data', function($scope, data){
    $scope.posts = data;
    $scope.activePost = $scope.posts[0];
    $scope.setActivePost = function(i){
      $scope.activePost = $scope.posts[i];
    };
  }])
  .controller('NavController', ['$scope', function($scope){
    $scope.tab='none';
    $scope.setTab = function(tab){
      $scope.tab = tab;
    };
    $scope.isTab = function(tab){
      return $scope.tab === tab;
    };
  }])
  .controller('NotesController', ['$scope', '$sce', 'data', function($scope, $sce, data){
    $scope.myClasses = data;
    $scope.clean = function(urlToClean) {
      return $sce.trustAsResourceUrl(urlToClean);
    };
    $scope.screenSize = function() {
      console.log((window.matchMedia( "(max-width: 500px)")).matches)
      return (window.matchMedia( "(max-width: 500px)")).matches;
    };
  }]).
  controller('NoteEntryController', ['$scope', 'data', function($scope, data) {
    $scope.bookPages = data;
    $scope.activePost = $scope.bookPages[0];
    $scope.setActivePost = function(i){
      $scope.activePost = $scope.bookPages[i];
    };
  }])
})();
