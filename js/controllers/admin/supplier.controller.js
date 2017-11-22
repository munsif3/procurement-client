/**
 * Created by Neruppuda on 11/22/2017.
 */
/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('SupplierController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    var init = function(){
        getAllSuppliers();

    }

    var getAllSuppliers=function(){
        AdminService.getAllUsres().then(function (d) {
            $scope.users=d;
        }, function (errResponse) {
            console.log("error");
        });
    }


    $scope.addSupplier=function(supplier){
        console.log(user)
        AdminService.addSupplier(supplier).then(function (d) {
            Notification.success('New user added successfully');
            init();
        }, function (errResponse) {
            Notification.error('Error while adding new user');
        });
    }

    $scope.openModal = function(supplier){
        $state.go('',{id:user.personNo});
    }

        //init();
}]);

