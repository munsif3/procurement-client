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
        }
    };
}