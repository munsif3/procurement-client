angular
    .module('app')
    .controller('purchaseOrderCtrl', purchaseOrderCtrl);

purchaseOrderCtrl.$inject = ['$scope', '$timeout', "$state","$filter", "$location", "$stateParams", "Notification", "$rootScope", 'PurchaseOrderService'];

function purchaseOrderCtrl($scope, $timeout, $state,$filter, $location, $stateParams, Notification, $rootScope, PurchaseOrderService) {
    $scope.selectedPurchaseOrders = {};
    var currentUser = $rootScope.globals.currentUser.email;
    var approvedDate = $filter("date")(Date.now(), 'yyyy-MM-dd');

    /**
     * Get all purchase orders with status PENDING
     */
    $scope.getPendingPurchaseOrders = function () {
        PurchaseOrderService.getPendingPurchaseOrders().then(purchaseOrders => {
                $scope.purchaseOrders = purchaseOrders;
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error fetching Purchase Orders");
            });
    };

    /**
     * Get all purchase orders with status PENDING
     */
    $scope.getApprovedPurchaseOrders = function () {
        PurchaseOrderService.getApprovedPurchaseOrders().then(purchaseOrders => {
                $scope.purchaseOrders = purchaseOrders;
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error fetching Purchase Orders");

            });
    };

    /**
     * Get one purchase order for the provided ID
     */
    $scope.getPurchaseOrderById = function () {

        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseOrderId)
            .then(purchaseOrders => {
                Notification.success("Purchase Order Details of Order " + $stateParams.purchaseOrderId + " loaded");
                getItemDetails();
                getLoggedUserDetails(currentUser);
                $scope.selectedPurchaseOrders = purchaseOrders;
                $state.go("app.management.viewPurchaseOrder", {
                    purchaseOrderId: $stateParams.purchaseOrderId
                })
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error fetching Purchase Order of " + $stateParams.purchaseOrderId);

            });
    };

    /**
     * Update the Pending purchase order status
     * @param {*} purchaseOrder 
     */
    $scope.updatePurchaseOrder = function (purchaseOrder) {

        if (purchaseOrder.approval == 1) {
            purchaseOrder.status = "Approved";
            purchaseOrder.approvedBy = $scope.selectedPurchaseOrders.approver;
            purchaseOrder.approvedDate = approvedDate;

            PurchaseOrderService.updatePurchaseOrder(purchaseOrder).then(purchaseOrder => {
                    Notification.success("Purchase Order has been Approved");
                    Notification.success("Approval Mail sent to Supplier");
                    $location.path('/management/purchase/view/approved');
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (purchaseOrder.approval == 0) {
            purchaseOrder.status = "Declined";
            Notification.error("Purchase Order has been Declined");
            $location.path('/management/purchase/view/pending');
        }
    }

    /**
     * Fetch item details
     */
    getItemDetails = function () {
        PurchaseOrderService.getItemDetails().then(items => {
            $scope.selectedPurchaseOrders.items = items;
        })
    }

    /**
     * Get the current logged user details
     */
    getLoggedUserDetails = function (username) {
        PurchaseOrderService.getLoggedUserDetails(username).then(user => {
            $scope.selectedPurchaseOrders.approver = user;
        })
    }
}