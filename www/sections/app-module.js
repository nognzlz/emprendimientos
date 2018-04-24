( function() {

    angular.module('app', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/seleccion', {
            templateUrl: 'http://localhost:8080/seleccion/colaboradores-tpl.html',
            controller: 'ColaboradoresController',
            controllerAs: '$ctrl'
          })
          .when('/listado', {
              templateUrl: 'http://localhost:8080/listado/listado-tpl.html',
              controller: 'ListadoController',
              controllerAs: '$ctrl'
           });

        $locationProvider.html5Mode(
            {
              enabled: true,
              requireBase: false
            }
        );

    }]);

})();