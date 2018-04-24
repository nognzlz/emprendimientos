( function() {
    angular.module('app')
        .controller('ColaboradoresController', colaboradoresController);

    function colaboradoresController (){
        var vm = this;

        //valores
        vm.cargado = false;

        //functiones
        vm.cargarColaborador = cargarColaborador;
        vm.volver = volver;

        function initialize() {
            vm.cargado = false;
        }

        function volver() {
            vm.cargado = false;
        }

        function cargarColaborador() {
            vm.cargado = true;
        }

        return vm;
    }
})();