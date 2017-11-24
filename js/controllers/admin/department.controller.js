/**
 * Created by Neruppuda on 11/20/2017.
 */
/**
 * Created by Neruppuda on 6/4/2017.
 */


angular.module('app').controller('departmentController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    $scope.department={};

    $scope.addDepartment = function () {
        if($scope.department.departmentName==null || $scope.department.departmentName==""){
            Notification.warning('Please provide a name for department');
        }else{
            AdminService.addDepartment($scope.department).then(function (d) {
                Notification.success('New department added successfully');
                init();
            }, function (errResponse) {
                Notification.error('error while adding department');
            });
        }

    }

    var init = function(){
        AdminService.getAllDepartments().then(function (d) {
           $scope.departments=d;
        }, function (errResponse) {
            console.log("error");
        });
    }

    $scope.openModal = function(department){
        $state.go('app.admin.departmentUpdate',{department:department});
    }

    init();
}]);
