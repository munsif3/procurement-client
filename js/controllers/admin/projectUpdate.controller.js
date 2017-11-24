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
        if($scope.project.name==null || $scope.project.name==""){
            Notification.warning('please provide project name');
        }else if($scope.project.startDate==null){
            Notification.warning('please provide a start date');
        }else if($scope.project.endDate){
            Notification.warning('please provide a end date');
        }else if($scope.project.endDate.getTime()<$scope.project.startDate.getTime()){
            Notification.warning('Project end date must be greater than start date');
        }else{
            AdminService.updateProject(project).then(function (d) {
                Notification.success('Project updated succesfully');
            }, function (errResponse) {
                Notification.error('Error while updating project');
            });
        }
    }
    init();

}]);
