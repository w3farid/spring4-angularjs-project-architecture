(function () {
    'use strict';

    angular
            .module('app')
            .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var baseURL = 'http://olonsoft.com:8080';
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.userLogin = userLogin;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('http://localhost:8081/api/user/all').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/users/one/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function userLogin(username, password) {
           return $http({
                method: 'POST',
                url: 'http://localhost:8081/oauth/token',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'authorization': 'Basic ' + btoa("testjwtclientid:XY7kmzoNzl100")                    
                },
                params:{
                    'username':'farid',
                    'password':'123',
                    'grant_type':'password'
                }
            }).then( handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/api/users/save', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(response) {
            return response;
        }

        function handleError(error) {
            return function () {
                return error;
            };
        }
    }

})();