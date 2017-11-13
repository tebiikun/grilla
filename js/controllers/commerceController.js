despegarApp.controller('CommerceController', [ '$scope', '$location', '$routeParams', 'CommerceService',
	function($scope, $location, $routeParams, CommerceService){
		
		$ctrl = this;

		$ctrl.isNewCommerce = typeof $routeParams.id === 'undefined';
		
		$ctrl.commerceList = [];

		$ctrl.commerce = {
			id: 1,
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

		

		$ctrl.commerceList = CommerceService.returnCommerces();

		$ctrl.createCommerce = function(commerce){
			if (!$ctrl.commerceForm.$valid) {
				console.log('Form invalid');
				return;
			}

			CommerceService.addCommerce(commerce);

			$ctrl.commerceList = CommerceService.returnCommerces();
			$location.path('/');
		}

		$ctrl.updateCommerce = function(commerce){
			if (!$ctrl.commerceForm.$valid) {
				console.log('Form invalid');
				return;
			}

			CommerceService.updateCommerce(commerce);

			$ctrl.commerceList = CommerceService.returnCommerces();
			$location.path('/');
		}


		$ctrl.save = function(){
			console.log($routeParams.id);

			if($ctrl.isNewCommerce){
				$ctrl.createCommerce($ctrl.commerce);
			}else{
				$ctrl.updateCommerce($ctrl.commerce);
			}
		}


/*		$(document).ready( function () {
			console.log("iniciando DataTable");
		    $('#mytable').DataTable();
		});
*/
	}]);

