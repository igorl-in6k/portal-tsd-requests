'use strict';

tsdApp
  .controller('AccessRequestController', ['$cookies','$scope',function($cookies, $scope) {

      $scope.send = function() {
          $cookies.put('resourceAdress', $scope.resourceAdress);
          $cookies.put('projectName', $scope.projectName);
          $cookies.put('userLogin', $scope.login);
          $cookies.put('additionalInfo', $scope.additionalInfo);
      };

      $scope.cancel = function() {
           $scope.resourceAdress = $scope.projectName = $scope.login = $scope.additionalInfo = '';
           $scope.haveAccount = false;
      };

}]);
