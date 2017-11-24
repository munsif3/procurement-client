/**
 * Created by Neruppuda on 11/22/2017.
 */
/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('SupplierController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    $scope.supplier={};
    var init = function(){
        getAllSuppliers();
        getAllUsers();

    }

    var getAllSuppliers=function(){
        AdminService.getAllSuppliers().then(function (d) {
            $scope.suppliers=d;

        }, function (errResponse) {
            console.log("error");
        });
    }

    var getAllUsers=function(){
        AdminService.getAllUsres().then(function (d) {
            $scope.users=d;
            $scope.supplier.personNumber=$scope.users[0];
        }, function (errResponse) {
            console.log("error");
        });
    }

    $scope.addSupplier=function(supplier){
        if(supplier.companyName==null ||supplier.companyName==""){
            Notification.warning('Please provide a company name');
        }else if(supplier.contractedDate==null){
            Notification.warning('Please provide a contracted date ');
        }else{
            supplier.personNo=supplier.personNumber.personNo;
            delete supplier.personNumber;
            console.log(supplier)
            AdminService.addSupplier(supplier).then(function (d) {
                Notification.success('Added Supplier successfully');
                init();
            }, function (errResponse) {
                Notification.error('The person already exist as a supplier');
            });
        }
    }

    $scope.openModal = function(supplier){

        $state.go('app.admin.updateSupplier',{id:supplier.user.personNo});
    }
    init();
}]);

