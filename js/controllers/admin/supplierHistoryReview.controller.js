/**
 * Created by Neruppuda on 11/22/2017.
 */

angular.module('app').controller('SupplierHistoryReviewController',['$scope','AdminService','$state','$stateParams','Notification',function ($scope,AdminService,$state,$stateParams,Notification) {


    var init=function(){
        AdminService.getSupplier($stateParams.id).then(function (d) {
            d.contractedDate=new Date(d.contractedDate);
            $scope.supplier=d;
        }, function (errResponse) {
            Notification.error('Error while getting supplier');
        });
    }

    $scope.redirectToView=function(){
        $state.go('app.admin.supplierHistory');
    }


    init();

}]);
