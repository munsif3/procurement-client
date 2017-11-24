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
        if(user.name==null ||user.name=="" ){
            Notification.warning('Please provide a Empoyee Name');
        }else if(user.nic==null ||user.nic=="" ){
            Notification.warning('Please provide a nic number');
        }else if(!validateNIC(user.nic)){
            Notification.warning('Wrong format of nic number');
        } else if(user.contactNo==null || user.contactNo==""){
            Notification.warning('Please provide a contact number');
        }else if(user.contactNo.length != 10 || !angular.isNumber(parseInt(user.contactNo))){
            Notification.warning('Wrong Format of contact number');
        }
        else{
            AdminService.updateUser(user).then(function (d) {
                Notification.success('User updated succesfully');
            }, function (errResponse) {
                Notification.error('Error while updating user');
            });
        }

    }
    init();

}]);
