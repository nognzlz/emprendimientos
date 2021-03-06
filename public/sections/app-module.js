( function() {

    angular.module('app', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/seleccion', {
            templateUrl: 'sections/seleccion/colaboradores-tpl.html',
            controller: 'ColaboradoresController',
            controllerAs: '$ctrl'
          })
          .when('/listado', {
              templateUrl: 'sections/listado/listado-tpl.html',
              controller: 'ListadoController',
              controllerAs: '$ctrl'
           })
            .when('/detalles', {
              templateUrl: 'sections/detalles/detalles-tpl.html',
              controller: 'DetallesController',
              controllerAs: '$ctrl'
           })
           .otherwise({redirectTo:'/seleccion'});

        $locationProvider.html5Mode(
            {
              enabled: true,
              requireBase: false
            }
        );

    }]);

})();
