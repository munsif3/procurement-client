
angular.module('app').controller('DeapartmentUpdateController',['$scope','AdminService','$state','$stateParams','Notification',function ($scope,AdminService,$state,$stateParams,Notification) {

    $scope.department=$stateParams.department;

    $scope.redirectToView=function(){
        $state.go('app.admin.department');
    }

    $scope.updateDepartment = function () {
        if($scope.department.departmentName==null ||$scope.department.departmentName =="" ){
            Notification.success('Please provide a department name');
        }else{
            AdminService.updateDepartment($scope.department.departmentNo,$scope.department.departmentName).then(function (d) {
                Notification.success('Department name updated succesfully');
            }, function (errResponse) {
                Notification.error('Error while updating department');
            });
        }

    }

}]);
