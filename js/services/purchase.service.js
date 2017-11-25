angular.module("app").factory("PurchaseOrderService", PurchaseOrderService);

PurchaseOrderService.$inject = ["$http"];

function PurchaseOrderService($http) {
    return {
        getPurchaseOrderByStatus: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/" + "Placed")
                .then(function (response) {
                    return response.data;
                });
        },
        getPendingPurchaseOrders: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/" + "Pending")
                .then(function (response) {
                    return response.data;
                });
        },
        getPurchaseOrderById: function (purchaseId) {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/purchaseId/" + purchaseId)
                .then(function (response) {
                    return response.data;
                });
        },
        getPurchaseOrderHistoryByStatus: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/purchaseHistory")
                .then(function (response) {
                    return response.data;
                });
        },
        getItemDetails: function () {
            return $http
                .get("http://localhost:8080/items")
                .then(function (response) {
                    return response.data;
                });
        },
        updatePurchaseOrder: function (purchaseOrder) {
            return $http
                .put("http://localhost:8080/api/purchaseOrders", purchaseOrder, {
                    headers: {
                        'Content-Type': "application/json"
                    }
                })
                .then(function (response) {
                    return response;
                });
        },
        getLoggedUserDetails: function (username) {
            return $http
                .get("http://localhost:8080/api/user/" + username)
                .then(function (response) {
                    return response.data;
                });
        },
        getSupplierItemDetails: function () {
            return $http
                .get("http://localhost:8080/api/supplierItems")
                .then(function (response) {
                    return response.data;
                });
        },
        getSupplierDetails: function () {
            return $http
                .get("http://localhost:8080/api/suppliers/")
                .then(function (response) {
                    return response.data;
                });
        },
        getApprovedPurchaseOrders: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/" + "Approved")
                .then(function (response) {
                    return response.data;
                });
        }
        // updatePurchaseOrder: function (purchase) {
        //     $http
        //       .post("http://localhost:8080/api/purchaseOrders/", purchase)
        //       .then(function (response) {
        //         return response;
        //       });
        //   }
    };
}