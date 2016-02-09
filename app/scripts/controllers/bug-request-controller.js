'use strict';

tsdApp
  .controller('BugRequestController', ['$cookies','$scope',function($cookies, $scope) {

      $scope.problems = ['Tahometer Ltd', 'HR Grades', 'HR Portal'];

      $scope.send = function() {
          $cookies.put('problem', $scope.selectedProblem);
          $cookies.put('problemDescription', $scope.problemDescription);
          $cookies.put('reproduceSteps', $scope.reproduceSteps);
      };

      $scope.cancel = function() {
          $scope.selectedProblem = null;
          $scope.problemDescription = $scope.reproduceSteps = '';
      };

}]);
