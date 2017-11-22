/**
 * Created by Neruppuda on 11/22/2017.
 */
angular.module('app').controller('UserUpdateController',['$scope','AdminService','$state','$stateParams','Notification','$rootScope',function ($scope,AdminService,$state,$stateParams,Notification,$rootScope) {

    var init=function(){
        AdminService.getUser($stateParams.id).then(function (d) {
            $scope.user=d;
        }, function (errResponse) {
            Notification.error('Error while getting project');
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
