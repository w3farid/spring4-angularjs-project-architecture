'use strict';
var app = angular.module('app');

app.controller('HomeController', function ($scope, $location, $http, $rootScope, LoginService) {
    $rootScope.logout = function () {
        LoginService.ClearCredentials();
        $location.path('/login');
    };

});

app.controller('UserController', function ($scope, $location, $http, $rootScope, LoginService, UserService) {

    $scope.usersList = [];
    $scope.user = {};
    getAllUsers(UserService, $scope);
    $scope.userEdit = function (user) {

        UserService.GetById(user.id)
                .then(function (res) {
                    if (res.status == '200') {
                        console.log(res);
                        $scope.user = res.data;
                    }
                }).catch(function (err) {
            console.log(err);
        });
    };

});

app.controller('ProjectController', function ($scope, $location, $http, $rootScope, LoginService) {

    $scope.createProject = function () {
        $http.post('/api/projects/save', JSON.stringify(this.project))
                .then(function (res) {
                    console.log(res);
                }).catch(function (err) {
                    console.log(err);
        });
    };

});

app.controller('IssueController', function ($scope, $location, $http, $rootScope, LoginService) {
   $scope.users = [];
   $scope.projects = [];
   getInitUsers();
   getInitProjects();
   
   function getInitUsers(){
       
      $http.get('/api/users/showAll')
           .then(function(res){
           $scope.users = res.data;
   }).catch(function(err){
       console.log(err);
   });
   };
   
   function getInitProjects(){
       
      $http.get('/api/projects/showAll')
           .then(function(res){
           $scope.projects = res.data;
   }).catch(function(err){
       console.log(err);
   });
   };
   
    $scope.createIssue = function () {
        console.log(this.issue);
    };

});

function getAllUsers(UserService, $scope) {
    UserService.GetAll()
            .then(function (res) {
                if (res.status == '200') {
                    console.log(res.data);
                    $scope.usersList = res.data;
                }
            }).catch(function (err) {
        console.log(err);
    });
}