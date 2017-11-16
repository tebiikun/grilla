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
					attr: ['nombre'],
					colName: 'Comercio',
					order: true,
					reverse: true,
					filter: true,
					sortFunction: function(a,b){
						if(a.type === 'object'){
							if(a.value.nombre.length > b.value.nombre.length){
								return 1;
							} 
							if(a.value.nombre.length < b.value.nombre.length){
								return -1;
							}
							return 0;
						}
					}
				},
				{
					attr: 'descripcion',
					colName: 'Descripcion',
					order: true,
					reverse: true,
					filter: true
				},
				{
					attr: ['comercial.telefono', 'administrativo.telefono'],
					colName: 'Telefonos',
					order: false,
					reverse: true
				},
				{
					attr: 'especialidades',
					colName: 'Especialidades',
					order: true,
					reverse: true,
					filter: true
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