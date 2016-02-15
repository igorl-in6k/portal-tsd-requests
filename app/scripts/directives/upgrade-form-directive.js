'use strict';

tsdApp
.directive('upgradeForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/upgrade.html',
        controller: ['$cookies', '$scope', function($cookies, $scope) {

            $scope.upgradeRequest = {
                reasonsToReplace: [
                    'Breakdown',
                    'Upgrade',
                    'Individual preference',
                    'Other'],
                criticalities: [
                    'Low: nice-to-have',
                    'Medium: ready to be patient, but not for too long',
                    'High: blocker for work'
                ]
            };

            $scope.send = function() {
                $cookies.put('upgrade.equipment', $scope.upgradeRequest.equipment);
                $cookies.put('upgrade.reason', $scope.upgradeRequest.selectedReason);
                $cookies.put('upgrade.criticality', $scope.upgradeRequest.selectedCriticality);
                $cookies.put('upgrade.additionalInfo', $scope.upgradeRequest.additionalInfo);
            };

            $scope.cancel = function() {
                $scope.upgradeRequest.equipment = $scope.upgradeRequest.additionalInfo = '';
                $scope.upgradeRequest.selectedReason = $scope.upgradeRequest.selectedCriticality = null;
            };

      }]
    };
});
