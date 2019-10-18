(function () {
    'use strict';

    angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)            
            .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'views/dashboard.html',
                    controllerAs: 'vm'
                })

                .when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'views/login.html',
                    controllerAs: 'vm'
                })

                .when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'views/register.html',
                    controllerAs: 'vm'
                })
                .when('/users', {
                    controller: 'UserController',
                    templateUrl: 'views/users.html',
                    controllerAs: 'vm'
                })
                .when('/project', {
                    controller: 'ProjectController',
                    templateUrl: 'views/project.html',
                    controllerAs: 'vm'
                })
                .when('/issue', {
                    controller: 'IssueController',
                    templateUrl: 'views/issue.html',
                    controllerAs: 'vm'
                })
                .when('/page', {
                    controller: 'ProjectController',
                    templateUrl: 'views/project/asif_page.html',
                    controllerAs: 'vm'
                })
                .when('/createproject', {
                    controller: 'ProjectController',
                    templateUrl: 'views/project/create_project.html',
                    controllerAs: 'vm'
                })

                .otherwise({redirectTo: '/login'});
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common.Authorization = 'bearer ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();