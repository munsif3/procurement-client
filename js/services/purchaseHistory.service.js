
angular.module('app').factory('PurchaseHistoryService',['$http','$q',function($http,$q){
    
    var factory={
        getPurchaseHistory:getPurchaseHistory,
        getAllItems:getAllItems,
        addRequisitionOrder:addRequisitionOrder,
        addPurchaseOrderItem:addPurchaseOrderItem
    };

    return factory;


    function getPurchaseHistory(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/purchaseOrders")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


    function getAllItems(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/items")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


    function addRequisitionOrder(requisition){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/purchaseOrders",requisition)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function addPurchaseOrderItem(requisition){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/purchaseOrderItems",requisition)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


    function getLoggedUserDetails(username){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/user/" + username)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

}]);