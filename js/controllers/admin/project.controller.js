/**
 * Created by Neruppuda on 11/21/2017.
 */
/**
 * Created by Neruppuda on 11/20/2017.
 */
/**
 * Created by Neruppuda on 6/4/2017.
 */
angular.module('app').controller('ProjectController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    $scope.project={};
    var init = function(){
        getAllProjects();
        getAllSites();
    }

    var getAllProjects=function(){
        AdminService.getAllProject().then(function (d) {
            $scope.projects=d;
        }, function (errResponse) {
            console.log("error");
        });
    }

    var getAllSites=function(){
        AdminService.getAllSites().then(function (d) {
            $scope.sites=d;
            $scope.project.site=$scope.sites[0];
        }, function (errResponse) {
            console.log("error");
        });
    }

    $scope.addProject=function(){
        if($scope.project.name==null || $scope.project.name==""){
            Notification.warning('please provide project name');
        }else if($scope.project.startDate==null){
            Notification.warning('please provide a start date');
        }else if($scope.project.endDate==null){
            Notification.warning('please provide a end date');
        }else if($scope.project.endDate.getTime()<$scope.project.startDate.getTime()){
            Notification.warning('Project end date must be greater than start date');
        }else{
            AdminService.addProject($scope.project).then(function (d) {
                Notification.success('New Project added successfully');
                init();
            }, function (errResponse) {
                Notification.error('error while adding project');
            });
        }

    }

    $scope.openModal = function(project){
        $state.go('app.admin.updateProject',{id:project.projectNo});
    }

    init();
}]);
