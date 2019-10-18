(function () {
    'use strict';

    angular
            .module('app')
            .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'LoginService'];
    function LoginController($location, LoginService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            LoginService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            LoginService.Login(vm.username, vm.password, function (response) {
                console.log(response);
                if (response.status == '200') {
                    LoginService.SetCredentials(response);
                    $location.path('/');
                    vm.dataLoading = false;
                }else {
                    vm.dataLoading = false;
                }
            });           
        };
    }

})();