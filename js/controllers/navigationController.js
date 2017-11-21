/**
 * Created by Neruppuda on 11/19/2017.
 */
angular.module('app').controller('NavigationController', ['$scope','$rootScope','$location' ,function ($scope,$rootScope) {
   $scope.role=$rootScope.globals.currentUser.role;
}]);