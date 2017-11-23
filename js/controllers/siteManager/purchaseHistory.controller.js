
angular.module('app').controller('PurchaseHistoryController',['$scope','PurchaseHistoryService','$state','Notification',function ($scope,PurchaseHistoryService,$state,Notification) {

    $scope.project={};

    var init = function(){
        getPurchaseHistory();
    }


    var getPurchaseHistory=function(){
        PurchaseHistoryService.getPurchaseHistory().then(function (d) {
            $scope.purchases=d;
        }, function (errResponse) {
            console.log("error");
        });
    }

    init();
}]);

