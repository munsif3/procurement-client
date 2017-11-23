angular
    .module('app')
    .controller('siteDetailsCtrl', siteDetailsCtrl);

siteDetailsCtrl.$inject = ['$scope', '$timeout', 'SiteService'];

function siteDetailsCtrl($scope, $timeout, SiteService) {

    $scope.getSites = function () {
        SiteService.get().then(sites => {
            console.log(sites)
            $scope.sites = sites;
        });
    };

    $scope.getSiteById = function (siteId) {
        SiteService.getSiteById(siteId).then(site => {
            console.log(site);
            $scope.site = site;
        });
    }
}