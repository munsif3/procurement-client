
angular.module('app').controller('ItemController',['$scope','PurchaseHistoryService','$state','Notification',function ($scope,PurchaseHistoryService,$state,Notification) {


    $scope.requisition={};

    var init = function(){
        getAllItems();
    }

    var getAllItems=function(){
        PurchaseHistoryService.getAllItems().then(function (d) {
            $scope.items=d;
            $scope.requisition.product=$scope.items[0];
        }, function (errResponse) {
            console.log("error");
        });
    }

    // getLoggedUserDetails = function (username) {
    //     PurchaseOrderService.getLoggedUserDetails(username).then(user => {
    //         console.log(user);
    //         $scope.requisition.requester = user;
    //     })
    // }
        
    $scope.addRequisitionOrder =function(requisition){
        console.log(requisition);
        $scope.requisition.status = "Placed";
        $scope.requisition.requestedDate = new Date();
        //$scope.requisition.requester = 4;
        //requisition.requestedBy = $scope.requisition.requester;
        


        PurchaseHistoryService.addRequisitionOrder(requisition).then(function (d) {
            Notification.success('Your requisition is placed successfully! Keep calm for the approval');
    }, function (errResponse) {
            Notification.error('Error while placing your requisitiionorder');
        });

    //     PurchaseHistoryService.addPurchaseOrderItem(requisition).then(function (d) {
    //         Notification.success('Your items are saved');
    // }, function (errResponse) {
    //         Notification.error('Error while placing your ordered item');
    //     });
    }



    init();
}]);

