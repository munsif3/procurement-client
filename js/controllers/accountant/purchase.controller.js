angular
    .module('app')
    .controller("purchaseOrderController", purchaseOrderController);

purchaseOrderController.$inject = ['$scope', '$timeout', '$state', '$filter','$rootScope', '$stateParams', 'PurchaseOrderService'];

function purchaseOrderController($scope, $timeout, $state, $filter,$rootScope, $stateParams, PurchaseOrderService) {

    let currentUser = $rootScope.globals.currentUser;
    console.log(currentUser);

    $scope.preparedDate = $filter("date")(Date.now(), 'yyyy-MM-dd');
    console.log(preparedDate);
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

    $scope.getSupplierItemDetails = function () {
        PurchaseOrderService.getSupplierItemDetails().then(supItems => {
            console.log(supItems)
            $scope.supplierItems = supItems;
        })
    }

    $scope.getSupplierDetails = function () {
        PurchaseOrderService.getSupplierDetails().then(supplier => {
            console.log(supplier)
            $scope.suppliers = supplier;
        })
    }

    $scope.getPurchaseOrderById = function () {
        // console.log(purchaseId)
        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseId)
            .then(purchases => {
                console.log(purchases)
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
