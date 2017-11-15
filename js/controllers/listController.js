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

		$ctrl.delete= function(id){
			CommerceService.deleteCommerce(id);
			$ctrl.commerceList = CommerceService.returnCommerces();
		}

		$ctrl.gridConfig =
		{	
			pagination:{
				rowsForPage: 3
			},
			data:
			[
				{
					attr: 'nombre',
					colName: 'Name',
					order: true,
					direction: 'asc',
					filter: true
				},
				{
					attr: 'descripcion',
					colName: 'Description',
					order: true,
					direction: 'asc'
				},
				{
					attr: 'comercial.nombre',
					colName: 'com nomb',
					order: true,
					direction: 'asc'
				},
				{
					attr: 'direccion',
					colName: 'direccion',
					order: true,
					direction: 'asc'
				},
				{
					attr: '',
					colName: 'Editar',
					render : function(){
						return 	'<a class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-pencil"></span></a>'
								
					},
					action: function(id){
						$ctrl.goCommerce(id);
					}
				},
				{
					attr: '',
					colName: 'Borrar',
					render : function(){
						return 	'<a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></a>'
					},
					action: function(id){
						$ctrl.delete(id);
					}
				}
			]
		}

	}]);