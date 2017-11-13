despegarApp.controller('ListController', [ '$scope', '$location', 'PedidosService',
	function($scope, $location, PedidosService){

		var $ctrl = this;

		$ctrl.commerceList = [];
		$ctrl.commerceList = PedidosService.returnCommerce();
		



		$ctrl.goNewCommerce = function(){
			$location.path('/pedido');
		}

		$ctrl.callback = function(id){
			PedidosService.deleteCommerce(id);
			$ctrl.commerceList = PedidosService.returnCommerce();
		}

		$ctrl.delete= function(id){
			console.log("borrando: " + id);

			PedidosService.deleteCommerce(id);
			$ctrl.commerceList = PedidosService.returnCommerce();
		}

		$ctrl.columnsConfiguration = [
			{
				colName: 'Name',
				attr: 'nombre',
				order: function(list, attr){
					console.log(list.attr);
					return list.list.sort(
						function (a, b) {
						if (a[list.attr] > b[list.attr]) {
							return 1;
						}
						if (a[list.attr] < b[list.attr]) {
							return -1;
						}
							// a must be equal to b
							return 0;
						}
					).reverse();
				},
				filter: 'nombre'
			},
			{
				attr: 'descripcion',
				colName: 'Description',
				order: function(list, attr){
					console.log(list.attr);
					return list.list.sort(
						function (a, b) {
						if (a[list.attr] > b[list.attr]) {
							return 1;
						}
						if (a[list.attr] < b[list.attr]) {
							return -1;
						}
							// a must be equal to b
							return 0;
						}
					);
				},
				filter: 'descripcion'
			},
			{
				attr: 'comercial.email',
				colName: 'correo com',
				filter: 'email'
			},
			{
				attr: 'administrativo.telefono',
				colName: 'tel adm',
				filter: 'telefono'
			}
		]

	}]);