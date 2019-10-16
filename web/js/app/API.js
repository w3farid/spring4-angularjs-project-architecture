(function(){
    'use strict';
    angular
        .module('app')
        .factory('API', ApiService);

        function ApiService(){
            return {
                BASE_URL                : 'http://localhost:8081',
                LOGIN                   : '/userLogin',
                CREATE_PROJECT          : '/api/project/save'                
            };            
        }
})();


