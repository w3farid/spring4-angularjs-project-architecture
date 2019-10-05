'use strict';
    var app = angular.module('app');

    app.controller('HomeController', function($scope, $location, $http, $rootScope, LoginService){
       $rootScope.logout = function(){
            LoginService.ClearCredentials();
            $location.path('/login');
       };
       
    });
    
    app.controller('UserController', function($scope, $location, $http, $rootScope, LoginService, UserService){
        
       $scope.usersList = [];
       $scope.user = {};
       getAllUsers(UserService, $scope);
       $scope.userEdit = function(user){
           
           UserService.GetById(user.id)
                   .then(function(res){
               if(res.status == '200'){
                   console.log(res);
                  $scope.user=res.data; 
               }
           }).catch(function(err){
               console.log(err);
           });
       };
       
    });
    
    function getAllUsers(UserService, $scope){
            UserService.GetAll()
                   .then(function(res){
               if(res.status == '200'){
                   console.log(res.data);
                  $scope.usersList=res.data; 
               }
           }).catch(function(err){
               console.log(err);
           });
       }