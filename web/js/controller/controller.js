/* global addmember, selectedMember, project */

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

    $scope.project = [
        {p1: 'pro1',
            p2: 'in progress'
        },

        {p1: 'pro2',
            p2: 'ogress'

        },

        {
            p1: 'pro3',
            p2: 'fdfdf'
        }
    ];



    $scope.review = function () {
        alert("Review Okay");
    };


    $scope.member = [
        {
            id: '01',
            name: 'abcd',
            username: 'a2alim'
        },
        {
            id: '02',
            name: 'abrar',
            username: 'asif'
        },
        {
            id: '03',
            name: 'abcd',
            username: 'a2alim'
        },
        {
            id: '04',
            name: 'abrar',
            username: 'asif'
        }
    ];

    $scope.selectedMember = [];
    $scope.addmember = '';
    $scope.cRow = function () {
        var m = $scope.addmember;
        var data = {
            id: m.id,
            name: m.name,
            username: m.username
        };
        this.selectedMember.push(data);
    };

    $scope.closeUse = function (member, index) {
        var id = member.id;
        var result = confirm("Are You Sure?");
        if (result === true) {
            var index = getSelectedIndex(id);
            $scope.selectedMember.splice(index, 1);

        }
    };

    $scope.project = {
        project_name:'',
        project_dsc: '',
        start_date: '',
        target_end_date: '',
        status: '',
        teams: $scope.selectedMember
    };

    $scope.createProject = function () {

        alert($scope.project.name);
        console.log(this.project);
    };

    function getSelectedIndex(id) {
        for (var i = 0; i < $scope.selectedMember.length; i++) {
            if ($scope.selectedMember[i].id === id)
                return i;
        }
    }
    ;


});

app.controller('IssueController', function ($scope, $location, $http, $rootScope, LoginService) {
    $scope.users = [];
    $scope.projects = [];
    getInitUsers();
    getInitProjects();

    $scope.issueabc = function () {

        $scope.msg = 'fhgfhgf';
        alert($scope.msg);
    }

    function getInitUsers() {

        $http.get('/api/users/showAll')
                .then(function (res) {
                    $scope.users = res.data;
                }).catch(function (err) {
            console.log(err);
        });
    }
    ;

    function getInitProjects() {

        $http.get('/api/projects/showAll')
                .then(function (res) {
                    $scope.projects = res.data;
                }).catch(function (err) {
            console.log(err);
        });
    }
    ;

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