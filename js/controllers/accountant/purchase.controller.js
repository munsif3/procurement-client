angular
    .module('app')
    .controller("purchaseOrderController", purchaseOrderController);

purchaseOrderController.$inject = ['$scope', '$timeout', '$state', '$filter', '$rootScope', '$stateParams', 'PurchaseOrderService'];

function purchaseOrderController($scope, $timeout, $state, $filter, $rootScope, $stateParams, PurchaseOrderService) {

    let currentUser = $rootScope.globals.currentUser;

    $scope.preparedDate = $filter("date")(Date.now(), 'yyyy-MM-dd');

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
        PurchaseOrderService.getPurchaseOrderById($stateParams.purchaseId)
            .then(purchases => {
                $scope.selectedPurchases = purchases;
            })
            .then(getLoggedUserDetails(currentUser.email))
            .then(getSupplierDetails())
            .then(getSupplierItemDetails())
            .then($state.go("app.accounting.addQuotations", {
                purchasesId: $stateParams.purchasesId
            }));
    };

    getLoggedUserDetails = function (username) {
        PurchaseOrderService.getLoggedUserDetails(username).then(user => {
            $scope.userDetails = user;
        })
    }

    getSupplierDetails = function () {
        PurchaseOrderService.getSupplierDetails()
            .then(supplier => {
                $scope.suppliers = supplier;
            })
            .catch(err => {
                console.log(err);
            });
    }

    getSupplierItemDetails = function () {
        PurchaseOrderService.getSupplierItemDetails()
            .then(supItems => {
                $scope.selectedPurchases.purchaseOrderItemList['supItems'] = supItems;
            })
            .catch(err => {
                console.log(err);
            });
    }


    $scope.updatePurchaseOrder = function (purchase) {
        PurchaseOrderService.updatePurchaseOrder(purchase).then(function (d) {
            Notification.success('Purchase was updated successfully');
        }, function (errResponse) {
            Notification.error('Error while updating the purchase order');
        });
    }

    $scope.supplierChanged = function (item) {
        changeRequestedItemPriceBySelectedSupplier(item.supplierId);
    }

    changeRequestedItemPriceBySelectedSupplier = function (itemSupplierId) {
        let units = {};
        units.supitems = [];
        let requestItems = [];
        for (var i = 0; i < $scope.selectedPurchases.purchaseOrderItemList.length; i++) {

            for (var j = 0; j < $scope.selectedPurchases.purchaseOrderItemList['supItems'].length; j++) {
                if ($scope.selectedPurchases.purchaseOrderItemList[i].purchaseOrderItemPK.itemNo == $scope.selectedPurchases.purchaseOrderItemList['supItems'][j].item.itemNo &&
                    $scope.selectedPurchases.purchaseOrderItemList['supItems'][j].supplier.supplierId == itemSupplierId
                ) {
                    $scope.selectedPurchases.purchaseOrderItemList[i]['newsupp'] = $scope.selectedPurchases.purchaseOrderItemList['supItems'][j];
                    units.supitems.push($scope.selectedPurchases.purchaseOrderItemList[i]);
                }
            }
        }

        $scope.requestItems = units;
    }

    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.requestItems.supitems.length; i++){
            var r = $scope.requestItems.supitems[i];
            total += (r.orderedQuantity * r.newsupp.unitPrice);
        }
        console.log(total);
        return total;
    }

    $scope.getOrderStatus = function(){
        return "Pending";
    }
}