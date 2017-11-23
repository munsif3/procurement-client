angular.module("app").factory("PurchaseOrderService", PurchaseOrderService);

PurchaseOrderService.$inject = ["$http"];

function PurchaseOrderService($http) {
    return {
        getPurchaseOrderByStatus: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/" + "Placed")
                .then(function (response) {
                    // console.log(response)
                    console.log(response.data)
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
                    console.log(response.data);
                    return response.data;
              })
        },
        getPurchaseOrderHistoryByStatus: function () {
            return $http
                .get("http://localhost:8080/api/purchaseOrders/purchaseHistory")
                .then(function (response) {
                    // console.log(response)
                    console.log(response.data)

                    return response.data;
                });
        },
        getLoggedUserDetails: function(username){
            return $http
            .get("http://localhost:8080/api/user/"+username)
            .then(function (response) {
                // console.log(response)
                // console.log(response.data)

                return response.data;
            });
        }
    };
}
