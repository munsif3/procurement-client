/**
 * Created by Neruppuda on 11/20/2017.
 */
/**
 * Created by Neruppuda on 6/4/2017.
 */


angular.module('app').controller('departmentController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {


    $scope.addDepartment = function () {
<<<<<<< HEAD
        if($scope.department.departmentName==null ||$scope.department.departmentName =="" ){
            Notification.success('Please provide a department name');
        }else{
            AdminService.addDepartment($scope.department).then(function (d) {
                Notification.success('New department added successfully');
                init();
            }, function (errResponse) {
                Notification.error('error while adding department');
            });
        }

=======
        AdminService.addDepartment($scope.department).then(function (d) {
            Notification.success('New department added successfully');
            init();
        }, function (errResponse) {
            Notification.error('error while adding department');
        });
>>>>>>> ecbf50a95e6b851d014e66ec6e6f0f1e1eb95800
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
