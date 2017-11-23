
angular.module('app').controller('PurchaseHistoryController',['$scope','PurchaseHistoryService','$state','Notification',function ($scope,PurchaseHistoryService,$state,Notification) {

    $scope.project={};

    var init = function(){
        getPurchaseHistory();

    }


    var getPurchaseHistory=function(){
        PurchaseHistoryService.getPurchaseHistory().then(function (d) {
            $scope.purchases=d;
        }, function (errResponse) {
            console.log("error");
        });
    }


    // $scope.addUser=function(user){
    //     console.log(user)

    //     AdminService.addUser(user).then(function (d) {
    //         Notification.success('New user added successfully');
    //         init();
    //     }, function (errResponse) {
    //         Notification.error('Error while adding new user');
    //     });
    // }

    // $scope.openModal = function(user){
    //     $state.go('app.admin.updateUser',{id:user.personNo});
    // }

    init();
}]);

