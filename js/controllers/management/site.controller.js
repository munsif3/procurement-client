angular
    .module('app')
    .controller('siteDetailsCtrl', siteDetailsCtrl);

siteDetailsCtrl.$inject = ['$scope', '$timeout', 'SiteService'];

function siteDetailsCtrl($scope, $timeout, SiteService) {

    $scope.getSites = function () {
        SiteService.get()
            .then(sites => {
                console.log(sites)
                $scope.sites = sites;
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error fetching Site details");
            });
    };

    $scope.getSiteById = function (siteId) {
        SiteService.getSiteById(siteId)
            .then(site => {
                console.log(site);
                $scope.site = site;
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error fetching Site details");
            });
    }

    $scope.saveSite = function (site) {
        console.log(site)
        SiteService.saveSite(site)
            .then(res => {
                console.log(res);
                Notification.success("Site has been added successfully");
                $location.path('/supplier/items/view');
            })
            .catch(err => {
                console.log(err);
                Notification.error("Error Saving Site details");
            });
    }
}