/**
 * Created by Neruppuda on 11/22/2017.
 */
angular.module('app').controller('UserUpdateController',['$scope','AdminService','$state','$stateParams','Notification','$rootScope',function ($scope,AdminService,$state,$stateParams,Notification,$rootScope) {

    var init=function(){
        AdminService.getUser($stateParams.id).then(function (d) {
            $scope.user=d;
        }, function (errResponse) {
            Notification.error('Error while getting project');
        });
    }



    $scope.updateUser = function (user) {
        console.log(user);
            AdminService.updateUser(user).then(function (d) {
            Notification.success('User updated succesfully');
        }, function (errResponse) {
            Notification.error('Error while updating user');
        });
    }
    init();

}]);
