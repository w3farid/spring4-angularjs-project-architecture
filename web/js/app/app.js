(function () {
    'use strict';

    angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)
            .factory('httpRequestInterceptor', function () {
                return {
                    request: function (config) {

                        config.headers['Authorization'] = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiZmFyaWQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTcxMjAxNDI4LCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJqdGkiOiJjYzQ2YzFiMS05ZGE1LTQyNmMtYWI4OS0zMTRjZmM0Yjg3YzUiLCJjbGllbnRfaWQiOiJ0ZXN0and0Y2xpZW50aWQifQ.4dXbPniaLeXfJ6vx_maZ_7ml5qy1pPrzGLZjt9-t2ig';
                        config.headers['Accept'] = 'application/json;odata=verbose';

                        return config;
                    }
                };
            })
            .config(function ($httpProvider) {
                $httpProvider.interceptors.push('httpRequestInterceptor');
            })
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
//        $http.defaults.headers.common['Authorization'] = 'Basic 33f05894-af61-4130-9d18-7a34015ea2bf';
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
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