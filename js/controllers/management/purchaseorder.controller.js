angular
    .module('app')
    .controller('purchaseOrderCtrl', purchaseOrderCtrl);

purchaseOrderCtrl.$inject = ['$scope', '$timeout', "$state", "$location", "$stateParams", "Notification", "$rootScope", 'PurchaseOrderService'];

function purchaseOrderCtrl($scope, $timeout, $state, $location, $stateParams, Notification, $rootScope, PurchaseOrderService) {

    $scope.currentUser = $rootScope.globals.currentUser.email;
    /**
     * Get all purchase orders with status PENDING
     */
    $scope.getPendingPurchaseOrders = function () {
        PurchaseOrderService.getPendingPurchaseOrders().then(purchaseOrders => {
                $scope.purchaseOrders = purchaseOrders;
            })
            .catch(err => {
                console.log(err);
            });
    };

    /**
     * Get one purchase order for the provided ID
     */
    $scope.getPurchaseOrderById = function () {
        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseOrderId).then(purchaseOrders => {
                Notification.success("Purchase Order Details of Order " + $stateParams.purchaseOrderId + " loaded");
                $scope.selectedPurchaseOrders = purchaseOrders;
                // $scope.selectedPurchaseOrders.items =  getItemDetailsname();
                $state.go("app.management.viewPurchaseOrder", {
                    purchaseOrderId: $stateParams.purchaseOrderId
                })
            })
            .catch(err => {
                console.log(err);
            });
    };

    /**
     * Update the Pending purchase order status
     * @param {*} purchaseOrder 
     */
    $scope.updatePurchaseOrder = function (purchaseOrder) {

        if (purchaseOrder.approval == 1) {
            purchaseOrder.status = "Approved";
        }
        console.log(purchaseOrder);
        PurchaseOrderService.updatePurchaseOrder(purchaseOrder).then(purchaseOrder => {
                console.log(purchaseOrder);
                Notification.success("Purchase Order has been Approved");
                $location.path('/management/purchase/view');
            })
            .catch(err => {
                console.log(err);
            });
    }

    function getItemDetailsname() {
        PurchaseOrderService.getItemDetails().then(items => {
            return items;
        })
    }
    // getLoggedUserDetails = function(user){
    // }
}