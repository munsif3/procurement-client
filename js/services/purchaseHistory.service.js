
angular.module('app').factory('PurchaseHistoryService',['$http','$q',function($http,$q){
    
    var factory={
        getPurchaseHistory:getPurchaseHistory
    };

    return factory;


    function getPurchaseHistory(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/purchaseOrders")
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