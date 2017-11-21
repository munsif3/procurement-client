/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('UserController',['$scope','AdminService','$uibModal','$state','Notification',function ($scope,AdminService,$uibModal,$state,Notification) {

    $scope.project={};
    var init = function(){
        getAllUsers();

    }

    var getAllUsers=function(){
        AdminService.getAllUsres().then(function (d) {
            $scope.users=d;
        }, function (errResponse) {
            console.log("error");
        });
    }


    $scope.addUser=function(user){
        console.log(user)
        AdminService.addUser(user).then(function (d) {
            Notification.success('New user added successfully');
            init();
        }, function (errResponse) {
            Notification.error('Error while adding new user');
        });
    }

    $scope.openModal = function(user){
        $state.go('',{id:user.personNo});
    }

    init();
}]);

