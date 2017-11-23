angular
    .module('app')
    .controller('purchaseOrderCtrl', purchaseOrderCtrl);

purchaseOrderCtrl.$inject = ['$scope', '$timeout', "$state", "$stateParams",'PurchaseOrderService'];

function purchaseOrderCtrl($scope, $timeout, $state, $stateParams, PurchaseOrderService) {

    $scope.getPendingPurchaseOrders = function () {
        PurchaseOrderService.getPendingPurchaseOrders().then(purchaseOrders => {
            $scope.purchaseOrders = purchaseOrders;
        });
    };

    $scope.getPurchaseOrderById = function () {
        // console.log(purchaseId)
        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseOrderId).then(purchaseOrders => {
            console.log(purchaseOrders)
            $scope.selectedPurchaseOrders = purchaseOrders;
            $state.go("app.management.viewPurchaseOrder", {purchaseOrderId: $stateParams.purchaseOrderId})
        });
    };
}