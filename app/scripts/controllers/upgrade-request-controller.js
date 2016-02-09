'use strict';

tsdApp
  .controller('UpgradeRequestController', ['$cookies','$scope',function($cookies, $scope) {

      $scope.reasonsToReplace = ['Breakdown', 'Upgrade', 'Individual preference', 'Other'];
      $scope.criticalities = ['Low: nice-to-have', 'Medium: ready to be patient, but not for too long', 'High: blocker for work'];

      $scope.send = function() {
          $cookies.put('equipment', $scope.equipment);
          $cookies.put('reason', $scope.selectedReason);
          $cookies.put('criticality', $scope.selectedCriticality);
          $cookies.put('additionalInfo', $scope.additionalInfo);
      };

      $scope.cancel = function() {
          $scope.equipment = $scope.additionalInfo = '';
          $scope.selectedReason = $scope.selectedCriticality = null;
      };

}]);
