despegarApp.controller('CommerceController', [ '$scope', '$location', 'PedidosService',
	function($scope, $location, PedidosService){
		
		$scope.commerceList = [];

		$scope.commerce = {
			administrativo:{
				nombre: "nombre adm", 
				apellido: "ape adm", 
				telefono: "44887995544", 
				email: "micorreo@gmail.com"
			},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "44887995544", 
				apellido: "ape com", 
				nombre: "nombre com"
			},
			descripcion: "comercio de prueba",
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre1",
			telefono: "4488775544"
		};

		

		$scope.commerceList = PedidosService.returnCommerce();

		$scope.createCommerce = function(){

			if (!$scope.commerceForm.$valid) {
				console.log('Form invalid - Sign In.');
				return;
			}

			PedidosService.addCommerce($scope.commerce);

			$scope.commerceList = PedidosService.returnCommerce();
			$location.path('/');
		}



/*		$(document).ready( function () {
			console.log("iniciando DataTable");
		    $('#mytable').DataTable();
		});
*/
	}]);

