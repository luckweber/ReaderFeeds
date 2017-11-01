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



  angular.module('ControllerFeedCRUD')
    .controller('FeedShow', function($scope, serviceFeed, $window) {
        $scope.feeds = serviceFeed.show();
      }
  );

  angular.module('ControllerFeedCRUD')
    .controller('FeedDelete', function($scope, serviceFeed, $window, $location) {
        serviceFeed.delete();
      }
  );

  angular.module('ControllerFeedCRUD')
    .controller('FeedEdit', function($scope, serviceFeed, $window, $location) {
      $scope.title = serviceFeed.edit().name;
      $scope.url = serviceFeed.edit().url;
      $scope.content = serviceFeed.edit().content;

      $scope.submitMyForm = function(form){
          serviceFeed.add($scope, serviceFeed.edit().id);
      }

      }
  );


  angular.module('ControllerFeedCRUD')
    .controller('FeedList', function($scope, serviceFeed, $window) {

        $scope.feeds = serviceFeed.show();
      }
  );
