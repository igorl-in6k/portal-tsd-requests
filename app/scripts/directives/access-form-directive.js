'use strict';

tsdApp
.directive('accessForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/access.html',
        controller: ['$cookies','$scope',function($cookies, $scope) {

            $scope.accessRequest = {
                resourceAdress: '',
                projectName: '',
                userLogin: '',
                additionalInfo: ''
            };

            $scope.send = function() {
                $cookies.put('access.resourceAdress', $scope.accessRequest.resourceAdress);
                $cookies.put('access.projectName', $scope.accessRequest.projectName);
                $cookies.put('access.userLogin', $scope.accessRequest.userLogin);
                $cookies.put('access.additionalInfo', $scope.accessRequest.additionalInfo);
            };

            $scope.cancel = function() {
                 $scope.accessRequest.resourceAdress = $scope.accessRequest.projectName =
                 $scope.accessRequest.userLogin = $scope.accessRequest.additionalInfo = '';
                 $scope.haveAccount = false;
            };

            $scope.readyToSend = function() {
                return $scope.accessRequest.resourceAdress != '';
            };

      }]
    };
});
