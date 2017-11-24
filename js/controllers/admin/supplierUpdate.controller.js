/**
 * Created by Neruppuda on 11/22/2017.
 */
angular.module('app').controller('SupplierUpdateController',['$scope','AdminService','$state','$stateParams','Notification','$rootScope',function ($scope,AdminService,$state,$stateParams,Notification,$rootScope) {

    var init=function(){
        AdminService.getSupplier($stateParams.id).then(function (d) {
            d.contractedDate=new Date(d.contractedDate);
            $scope.supplier=d;
            getAllUsers();
        }, function (errResponse) {
            Notification.error('Error while getting supplier');
        });
    }

    var getAllUsers=function(){
        AdminService.getAllUsres().then(function (d) {
            $scope.users=d;
            for(var i=0; i<$scope.users.length;i++){
                if($scope.users[i].personNo==$scope.supplier.user.personNo){
                    $scope.supplier.personNumber=$scope.users[i];
                    break;
                }
            }
        }, function (errResponse) {
            console.log("error");
        });
    }



    $scope.updateSupplier = function (supplier) {
        if(supplier.companyName==null ||supplier.companyName==""){
            Notification.warning('Please provide a company name');
        }else if(supplier.contractedDate==null){
            Notification.warning('Please provide a contracted date ');
        }else{
            supplier.personNo=supplier.personNumber.personNo;
            delete supplier.personNumber;
            AdminService.updateSupplier(supplier).then(function (d) {
                Notification.success('Supplier updated succesfully');
                init();
            }, function (errResponse) {
                Notification.error('Already existing supplier');
            });
        }

    }
    init();

}]);
