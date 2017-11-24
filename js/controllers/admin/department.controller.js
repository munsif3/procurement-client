/**
 * Created by Neruppuda on 11/20/2017.
 */
/**
 * Created by Neruppuda on 6/4/2017.
 */


angular.module('app').controller('departmentController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {


    $scope.addDepartment = function () {
        if($scope.department.name==null ||$scope.department.name =="" ){
            Notification.success('Please provide a department name');
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
