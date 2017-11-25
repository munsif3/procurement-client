angular
    .module('app')
    .controller("purchaseOrderController", purchaseOrderController);

purchaseOrderController.$inject = ['$scope', '$timeout', '$state', '$filter', '$location','Notification','$rootScope', '$stateParams', 'PurchaseOrderService'];

function purchaseOrderController($scope, $timeout, $state, $filter,$location, Notification, $rootScope, $stateParams, PurchaseOrderService) {

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
                Notification.success("Purchase Order " + $stateParams.purchaseId+ " details have been loaded");
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


    // $scope.updatePurchaseOrder = function (purchase) {
    //     PurchaseOrderService.updatePurchaseOrder(purchase).then(function (d) {
    //         Notification.success('Purchase was updated successfully');
    //     }, function (errResponse) {
    //         Notification.error('Error while updating the purchase order');
    //     });
    // }

    $scope.supplierChanged = function (item) {
        changeRequestedItemPriceBySelectedSupplier(item.supplierId);
    }

    changeRequestedItemPriceBySelectedSupplier = function (itemSupplierId) {
        var supid = itemSupplierId;
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

    /**
     * Update purchase order after generating the quotation of the purchase order
     */
    $scope.updatePurchaseOrder = function (quotations) {
        // console.log(quotations.approval);
        // let v="Pending"
        // console.log(quotations);
        // console.log(supid);
        let tot = $scope.getTotal();
                if (quotations.status == "Placed") {
                   console.log("yes");
                   console.log($scope.suppliers.supplierId);
                    quotations.supplierId = $scope.suppliers.supplierId.supplierId;
                    quotations.supplierNo = $scope.suppliers.supplierId.supplierId.substr($scope.suppliers.supplierId.supplierId.length - 1); 
                    quotations.totalAmount = tot;
                    quotations.status = "Pending";
                    quotations.preparedBy = $scope.userDetails.employeeId;
                    quotations.preparedDate = $scope.preparedDate;
                    console.log(quotations);
                    
                    PurchaseOrderService.updatePurchaseOrder(quotations).then(quotations => {
                            Notification.success("Purchase Order has been sent to management for approval");
                            $location.path('/accounting/purchases/view');
                        })
                        .catch(err => {
                            $location.path('/accounting/requisitions/view');
                            Notification.error("Failed to Update  Order Status. Please try again");
                            console.log(err);
                        });
                } else if (quotations.status != "Placed") {
                    Notification.error("Purchase Order has been Declined");
                    $location.path('/accounting/requisitions/view');
                   console.log("no");
                }
            }
}