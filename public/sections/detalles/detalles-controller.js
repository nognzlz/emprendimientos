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
            vm.mostrado = false;
        }

        function volver() {
            vm.mostrado = false;
        }

        function muestraColaborador() {
            vm.mostrado = true;
        }

        return vm;
    }
})();