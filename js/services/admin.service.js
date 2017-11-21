/**
 * Created by Neruppuda on 11/20/2017.
 */
angular.module('app').factory('AdminService',['$http','$q',function($http,$q){
    var factory={
        getAllDepartments:getAllDepartments,
        addDepartment:addDepartment,
        updateDepartment:updateDepartment,
        getAllSites:getAllSites,
        getAllProject:getAllProject,
        addProject:addProject,
        getProject:getProject,
        updateProject:updateProject,
        getAllUsres:getAllUsres,
        addUser:addUser
    };
    return factory;

    function getAllDepartments(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/departments/")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function addDepartment(department){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/department",department)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while Making payment');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function updateDepartment(id,name){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/department/"+id+"/"+name)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('error while updating');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getAllSites(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/sites")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('error getting sites ');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function getAllProject(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/projects/")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('error while getting projects');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function addProject(project){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/project",project)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while adding project');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function getProject(id){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/project/"+id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function updateProject(project){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/project",project)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('error while updating');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function updateProject(project){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/users",project)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('error while updating');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getAllUsres(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/users/")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function addUser(user){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/user",user)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
}]);