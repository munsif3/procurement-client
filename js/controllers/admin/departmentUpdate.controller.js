
angular.module('app').controller('DeapartmentUpdateController',['$scope','AdminService','$uibModal','$state','$stateParams','Notification',function ($scope,AdminService,$uibModal,$state,$stateParams,Notification) {

    $scope.department=$stateParams.department;

    $scope.redirectToView=function(){
        $state.go('app.admin.department');
    }

    $scope.updateDepartment = function () {
        AdminService.updateDepartment($scope.department.departmentNo,$scope.department.departmentName).then(function (d) {
            Notification.success('Department name updated succesfully');
        }, function (errResponse) {
            Notification.error('Error while updating department');
        });
    }

}]);
