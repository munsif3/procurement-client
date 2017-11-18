angular.module("app").factory("SiteService", SiteService);

SiteService.$inject = ["$http"];

function SiteService($http) {
  return {
    get: function() {
      return $http
        .get("http://demo8342094.mockable.io/sites")
        .then(function(response) {
          return response.data;
        });
    },
    getSitebySiteId: function(id) {
      return $http
        .get("http://localhost:8080/sites/" + id)
        .then(function(response) {
          return response.data;
        });
    }
  };
}
