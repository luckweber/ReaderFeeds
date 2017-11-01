angular.module('ControllerFeedCRUD')
  .controller('FeedCreate', function($scope, serviceFeed, $window, $location) {
      $scope.title = "Title example";
      $scope.url = "http://exemple.com";
      $scope.content = "Content example";

      var id = null;
      $scope.submitMyForm = function(form){
          serviceFeed.add($scope, id );
      }
    }
  );
