angular.module('ControllerAuthLogin')
  .controller('LoginValidate', function($scope, ServiceAuth,serviceFeed, $window, $location) {

      $scope.submitMyForm = function(){
        ServiceAuth.login();
      }
    }
  );
