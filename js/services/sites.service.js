angular.module("app").factory("SiteService", SiteService);

SiteService.$inject = ["$http"];

function SiteService($http) {
  return {
    get: function() {
      return $http.get("http://localhost:8080/api/sites/").then(function(response) {
        return response.data;
      });
    },
    getSitebySiteId: function(id) {
      return $http
        .get("http://localhost:8080/api/sites/" + id)
        .then(function(response) {
          return response.data;
        });
    },
    saveSite: function(site) {
      $http.post("http://localhost:8080/api/sites/", site).then(function(response) {
        return response.data;
      });
    }
  };
}
