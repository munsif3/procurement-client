angular
    .module('app')
    .controller("purchaseOrderController", purchaseOrderController);

purchaseOrderController.$inject = ['$scope', '$timeout', '$state', '$rootScope', '$stateParams', 'PurchaseOrderService'];

function purchaseOrderController($scope, $timeout, $state, $rootScope, $stateParams, PurchaseOrderService) {

    let currentUser = $rootScope.globals.currentUser;
    console.log(currentUser);
    /**
     * 
     */
    $scope.getPurchaseOrder = function () {
        PurchaseOrderService.getPurchaseOrderByStatus().then(purchases => {
            $scope.purchases = purchases;
        })
    }

    $scope.getPurchaseOrderHistory = function () {
        PurchaseOrderService.getPurchaseOrderHistoryByStatus().then(purchases => {
            $scope.purchases = purchases;
        })
    }

    $scope.getPurchaseOrderById = function () {
        // console.log(purchaseId)
        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseId)
            .then(purchases => {
                // console.log(purchases)
                $scope.selectedPurchases = purchases;

            })
            .then(getLoggedUserDetails(currentUser.email))
            .then($state.go("app.accounting.addQuotations", { purchasesId: $stateParams.purchasesId }));
    };

    getLoggedUserDetails = function (username) {
        PurchaseOrderService.getLoggedUserDetails(username).then(user => {
            console.log(user);
            $scope.userDetails = user;
        })
    }
}
