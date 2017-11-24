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
        addUser:addUser,
        getAllEmployees:getAllEmployees,
        addEmployee:addEmployee,
        getUser:getUser,
        updateUser:updateUser,
        updatEmployee:updatEmployee,
        getEmployee:getEmployee,
        getAllSuppliers:getAllSuppliers,
        addSupplier:addSupplier,
        getSupplier:getSupplier,
        updateSupplier:updateSupplier

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

    function updateUser(user){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/user",user)
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

    function getUser(id){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/getUser/"+id)
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

    function getAllEmployees(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/employees/")
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

    function addEmployee(user){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/employee",user)
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

    function updatEmployee(employee){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/employee",employee)
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

    function getEmployee(id){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/getEmployee/"+id)
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

    function getAllSuppliers(){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/suppliers/")
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
    function addSupplier(supplier){
        var deferred = $q.defer();
        $http.post("http://localhost:8080/api/supplier",supplier)
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
    function getSupplier(id){
        var deferred = $q.defer();
        $http.get("http://localhost:8080/api/getSupplier/"+id)
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
    function updateSupplier(supplier){
        var deferred = $q.defer();
        $http.put("http://localhost:8080/api/supplier",supplier)
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