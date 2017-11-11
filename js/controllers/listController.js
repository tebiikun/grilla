despegarApp.controller('ListController', [ '$scope', '$location', 'PedidosService',
	function($scope, $location, PedidosService){

		var $ctrl = this;

		$ctrl.commerceList = [];
		$ctrl.commerceList = PedidosService.returnCommerce();
		console.log($ctrl.commerceList);

		$ctrl.goNewCommerce = function(){
			console.log("puto");
			$location.path('/pedido');
		}

		$ctrl.delete= function(id){
			console.log("borrando: " + id);

			PedidosService.deleteCommerce(id);
			$ctrl.commerceList = PedidosService.returnCommerce();
		}

	}]);