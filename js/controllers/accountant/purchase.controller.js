angular.module('app').controller('purchaseController',['$scope','PurchaseService','$uibModal','$state','Notification',function ($scope,PurchaseService,$uibModal,$state,Notification) {

    var init = function(){
        PurchaseService.getRequisitionOrderByStatus().then(function (d) {
           $scope.purchases=p;
        }, function (errResponse) {
            console.log("error");
        });
    }

}]);
