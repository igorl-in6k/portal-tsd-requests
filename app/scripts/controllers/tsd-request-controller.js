'use strict';

tsdApp
  .controller('TsdRequestController', function($scope) {

    $scope.tabs = ['upgrade', 'access', 'bug'];
    $scope.currentTab = $scope.tabs[0];

    $scope.showUpgrade = function() {
        $scope.currentTab = 'upgrade';
    };

    $scope.showAccess = function() {
        $scope.currentTab = 'access';
    };

    $scope.showBug = function() {
        $scope.currentTab = 'bug';
    };

  });
