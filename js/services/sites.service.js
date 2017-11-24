angular.module("app").factory("SiteService", SiteService);

SiteService.$inject = ["$http"];

function SiteService($http) {
  return {
    get: function () {
      return $http
        .get("http://localhost:8080/sites/")
        .then(function (response) {
          return response.data;
        });
    },
    getSitebySiteId: function (id) {
      return $http
        .get("http://localhost:8080/sites/" + id)
        .then(function (response) {
          return response.data;
        });
    },
    addSite: function (site) {
      $http
        .post("http://localhost:8080/sites/", site)
        .then(function (response) {
          return response;
        });
    }
  };
}