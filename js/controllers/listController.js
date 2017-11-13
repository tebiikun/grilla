despegarApp.controller('ListController', [ '$scope', '$location', 'CommerceService',
	function($scope, $location, CommerceService){

		var $ctrl = this;

		$ctrl.commerceList = [];
		$ctrl.commerceList = CommerceService.returnCommerces();
		



		$ctrl.goCommerce = function(id){
			if(id){
				$location.path('/commerce/'+id);
			}else{
				$location.path('/commerce/');
			}
			
		}

		$ctrl.callback = function(id){
			CommerceService.deleteCommerce(id);
			$ctrl.commerceList = CommerceService.returnCommerces();
		}

		$ctrl.delete= function(id){
			console.log("borrando: " + id);

			CommerceService.deleteCommerce(id);
			$ctrl.commerceList = CommerceService.returnCommerces();
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