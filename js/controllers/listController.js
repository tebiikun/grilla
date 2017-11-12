despegarApp.controller('ListController', [ '$scope', '$location', 'PedidosService',
	function($scope, $location, PedidosService){

		var $ctrl = this;

		$ctrl.commerceList = [];
		$ctrl.commerceList = PedidosService.returnCommerce();
		



		$ctrl.goNewCommerce = function(){
			$location.path('/pedido');
		}

		$ctrl.delete= function(id){
			console.log("borrando: " + id);

			PedidosService.deleteCommerce(id);
			$ctrl.commerceList = PedidosService.returnCommerce();
		}


		$ctrl.columnsConfiguration = [
			{
				atributo: 'nombre',
				valor: 'Name'
			},
			{
				atributo: 'descripcion',
				valor: 'Description'
			}
		]

	}]);