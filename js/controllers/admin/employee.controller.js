/**
 * Created by Neruppuda on 11/21/2017.
 */
angular.module('app').controller('EmployeeController',['$scope','AdminService','$state','Notification',function ($scope,AdminService,$state,Notification) {

    $scope.designations=["admin","managementstaff","accountingstaff","sitemanager"];
    $scope.user={};
    $scope.user.designation={};
    $scope.user.designation=$scope.designations[0];

    var validateNIC=function(value){
        return (value.length==10 && (value.slice(-1)=='V' || value.slice(-1)=='v') && angular.isNumber(parseInt(value.slice(0, 9))));
    }

    var init = function(){
        getAllEmployees();
        getAllDepartments();
        getAllProjects();
    }

    var getAllEmployees=function(){
        AdminService.getAllEmployees().then(function (d) {
            $scope.users=d;
        }, function (errResponse) {
            console.log("error");
        });
    }

    var getAllDepartments=function(){
        AdminService.getAllDepartments().then(function (d) {
            $scope.departments=d;
            $scope.user.department=$scope.departments[0];
        }, function (errResponse) {
            console.log("error");
        });
    }

    var getAllProjects=function(){
        AdminService.getAllProject().then(function (d) {
            $scope.projects=d;
            $scope.user.project=$scope.projects[0];
        }, function (errResponse) {
            console.log("error");
        });
    }


    $scope.addUser=function(user){
        console.log(user)
        AdminService.addEmployee(user).then(function (d) {
            Notification.success('New user added successfully');
            init();
        }, function (errResponse) {
            Notification.error('Error while adding new user');
        });
        console.log(user.contactNo.length);
        if(user.name==null ||user.name=="" ){
            Notification.warning('Please provide a Empoyee Name');
        }else if(user.nic==null ||user.nic=="" ){
            Notification.warning('Please provide a nic number');
        }else if(!validateNIC(user.nic)){
            Notification.warning('Wrong format of nic number');
        } else if(user.contactNo==null || user.contactNo==""){
            Notification.warning('Please provide a contact number');
        }else if(user.contactNo.length != 10 || !angular.isNumber(parseInt(user.contactNo))){
            Notification.warning('Wrong Format of contact number');
        }else{
            AdminService.addEmployee(user).then(function (d) {
                Notification.success('New user added successfully');
                init();
            }, function (errResponse) {
                Notification.error('Error while adding new user');
            });
        }
    }

    $scope.openModal = function(user){
        $state.go('app.admin.updateEmployee',{id:user.personNo});
    }

    init();
}]);

