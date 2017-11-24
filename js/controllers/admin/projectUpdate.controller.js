/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('ProjectUpdateController',['$scope','AdminService','$state','$stateParams','Notification','$rootScope',function ($scope,AdminService,$state,$stateParams,Notification,$rootScope) {

    $scope.project={};

    var init=function(){
        AdminService.getProject($stateParams.id).then(function (d) {
            d.startDate=new Date(d.startDate);
            d.endDate=new Date(d.endDate);
            getSite();
           $scope.project=d;
        }, function (errResponse) {
            Notification.error('Error while getting project');
        });
    }

    var getSite = function(){
        AdminService.getAllSites().then(function (d) {
            $scope.sites=d;
            for(var i=0;i<$scope.sites.length;i++){
                if($scope.sites[i].siteId==$scope.project.site.siteId){
                    $scope.project.site=$scope.sites[i];
                    break;
                }
            }
        }, function (errResponse) {
            console.log("error");
        });
    }

    $scope.updateProject = function (project) {
        AdminService.updateProject(project).then(function (d) {
            Notification.success('Project updated succesfully');
        }, function (errResponse) {
            Notification.error('Error while updating project');
        });
    }
    init();

}]);
