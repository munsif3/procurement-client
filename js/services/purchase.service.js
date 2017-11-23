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
<<<<<<< HEAD
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
=======
        getPurchaseOrderHistoryByStatus: function () {
            return $http
                .get("http://localhost:8080/purchaseOrders/purchaseHistory")
                .then(function (response) {
                    // console.log(response)
                    console.log(response.data)
>>>>>>> bd5ef628a6592572a91de8198d877ede0e1de446
                    return response.data;
                });
        }
    };
}


// angular.module('app').factory('AdminService',['$http','$q',function($http,$q){
//   var factory={
//       getAllDepartments:getAllDepartments,
//       addDepartment:addDepartment,
//       updateDepartment:updateDepartment,
//       getAllSites:getAllSites,
//       getAllProject:getAllProject,
//       addProject:addProject,
//       getProject:getProject,
//       updateProject:updateProject,
//       getAllUsres:getAllUsres,
//       addUser:addUser
//   };
//   return factory;

//   function getRequisitionOrderByStatus(){
//     var deferred = $q.defer();
//     $http.get("http://localhost:8080/purchaseOrders/requisitions")
//         .then(
//             function (response) {
//                 deferred.resolve(response.data);
//             },
//             function(errResponse){
//                 deferred.reject(errResponse);
//             }
//         );
//     return deferred.promise;
// }

// }]);


// // function PurchaseService($http) 
// // {
// //   return {
// //     getRequisitionOrderByStatus: function() {
// //       return $http
// //         .get("http://localhost:8080/purchaseOrders/requisitions")
// //         .then(function(response) {
// //           return response.data;
// //         });
// //     }
// //   };
// // }