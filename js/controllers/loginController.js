/**
 * Created by Neruppuda on 11/19/2017.
 */
angular.module('app').controller('LoginController', ['$scope', '$rootScope', '$state', 'AuthenticationService','Notification', function ($scope, $rootScope, $state, AuthenticationService,Notification) {
                AuthenticationService.ClearCredentials();
                $scope.login = function () {
                    if($scope.email==null||$scope.email.length==0|| $scope.password==null||$scope.password.length==0){
                        Notification.warning('Please Input Login Credentials');
                    }
                    else{
                        AuthenticationService.Login($scope.email, $scope.password).then(function (d) {
                            AuthenticationService.SetCredentials($scope.email, $scope.password, d.designation);
                            $state.go('app.main');
                        }, function (errResponse) {
                            Notification.error('Invalid Login Credentials');
                        });
                    }
                }
}]);