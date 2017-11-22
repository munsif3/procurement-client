angular.module('app').factory('AdminService',['$http','$q',function($http,$q){
  var factory={
      getAllDepartments:getAllDepartments,
      addDepartment:addDepartment,
      updateDepartment:updateDepartment,
      getAllSites:getAllSites,
      getAllProject:getAllProject,
      addProject:addProject,
      getProject:getProject,
      updateProject:updateProject,
      getAllUsres:getAllUsres,
      addUser:addUser
  };
  return factory;

  function getRequisitionOrderByStatus(){
    var deferred = $q.defer();
    $http.get("http://localhost:8080/purchaseOrders/requisitions")
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


// function PurchaseService($http) 
// {
//   return {
//     getRequisitionOrderByStatus: function() {
//       return $http
//         .get("http://localhost:8080/purchaseOrders/requisitions")
//         .then(function(response) {
//           return response.data;
//         });
//     }
//   };
// }