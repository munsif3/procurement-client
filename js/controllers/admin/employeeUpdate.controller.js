/**
 * Created by Neruppuda on 11/22/2017.
 */
/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('EmployeeUpdateController',['$scope','AdminService','$state','$stateParams','Notification','$rootScope',function ($scope,AdminService,$state,$stateParams,Notification,$rootScope) {

    $scope.designations=["admin","managementstaff","accountingstaff","sitemanager"];

    $scope.project={};

    var init=function(){
        AdminService.getEmployee($stateParams.id).then(function (d) {
            $scope.user=d;
            getProject();
            getDepartment();
            getDesignation();
            $scope.user=d;
        }, function (errResponse) {
            Notification.error('Error while getting project');
        });
    }


    var getProject = function(){
        AdminService.getAllProject().then(function (d) {
            $scope.projects=d;
            $scope.user.project=$scope.projects[0];
        }, function (errResponse) {
            console.log("error");
        });
    }


    var getDepartment = function(){
        AdminService.getAllDepartments().then(function (d) {
            $scope.departments=d;
            $scope.user.department=$scope.departments[0];
        }, function (errResponse) {
            console.log("error");
        });
    }

    var getDesignation = function(){
        for(var i=0;i<$scope.designations.length;i++){
            if($scope.designations[i]==$scope.user.designation){
                $scope.user.designation=$scope.designations[i];
            }
        }
    }


    $scope.updateEmployee = function (employee) {

            AdminService.updatEmployee(employee).then(function (d) {
                Notification.success('Employee updated succesfully');
            }, function (errResponse) {
                Notification.error('Employee while updating project');
            });

    }
    init();

}]);
