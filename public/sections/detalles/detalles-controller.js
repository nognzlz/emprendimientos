( function() {
    angular.module('app')
        .controller('DetallesController', detallesController);

    function detallesController (){
        var vm = this;

        //valores
        vm.cargado = false;

        //functiones
        vm.muestraColaborador = muestraColaborador;
        vm.volver = volver;

        function initialize() {
            vm.cargado = false;
        }

        function volver() {
            vm.cargado = false;
        }

        function muestraColaborador() {
            vm.cargado = true;
        }

        return vm;
    }
})();