/**
 * Created by Neruppuda on 11/22/2017.
 */
/**
 * Created by Neruppuda on 11/22/2017.
 */
/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('SupplierHistoryController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    $scope.supplier={};
    var init = function(){
        getAllPurchaseOrders();

    }

    var getAllPurchaseOrders=function(){
        AdminService.getAllPurchaseOrders().then(function (d) {
            $scope.purchaseOrders=d;

        }, function (errResponse) {
            console.log("error");
        });
    }


    $scope.openModal = function(purchaseOrder){

        $state.go('app.admin.reviewSupplierHistory',{id:purchaseOrder.supplierNo.personNo});
    }
    init();
}]);


