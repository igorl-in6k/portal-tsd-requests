'use strict';

tsdApp
.directive('bugForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/bug.html',
        controller: ['$cookies', '$scope', function($cookies, $scope) {

            $scope.bugRequest = {
                selectedProblem: '',
                problemDescription: '',
                reproduceSteps: '',
                problems: [
                    'Tahometer Ltd',
                    'HR Grades',
                    'HR Portal'
                ]
            };

            $scope.send = function() {
                $cookies.put('bug.problem', $scope.bugRequest.selectedProblem);
                $cookies.put('bug.problemDescription', $scope.bugRequest.problemDescription);
                $cookies.put('bug.reproduceSteps', $scope.bugRequest.reproduceSteps);
            };

            $scope.cancel = function() {
                $scope.bugRequest.selectedProblem = null;
                $scope.bugRequest.problemDescription = $scope.bugRequest.reproduceSteps = '';
            };

            $scope.readyToSend = function() {
                return $scope.bugRequest.selectedProblem != '' &&
                       $scope.bugRequest.problemDescription != '' &&
                        $scope.bugRequest.reproduceSteps != '';
            };

      }]
    };
});
