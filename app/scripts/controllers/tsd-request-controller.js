'use strict';

tsdApp
  .controller('TsdRequestController', function($scope) {
    $scope.tab = 'upgrade';

    $scope.showUpgrade = function() {
        $scope.tab = 'upgrade';
    };

    $scope.showAccess = function() {
        $scope.tab = 'access';
    };

    $scope.showBug = function() {
        $scope.tab = 'bug';
    };

  });
