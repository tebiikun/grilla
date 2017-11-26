despegarApp.controller('ListController', [ '$scope', '$location', 'CommerceService', '$uibModal', '$document',
	function($scope, $location, CommerceService, $uibModal, $document){

		var $ctrl = this;

		$ctrl.commerceList = [];
		$ctrl.commerceList = CommerceService.returnCommerces();

		$ctrl.goCommerce = function(row){

			if(row){
				$location.path('/commerce/'+row.id);
			}else{
				$location.path('/commerce/');
			}
			
		}

		$ctrl.showAlertDelete = function(row){
		    var modalInstance = $uibModal.open({
				templateUrl: 'partials/modals/delete.html',
				controller: 'ModalController',
				controllerAs: '$ctrl',
				size: 'lg',
				resolve: {
					element: function () {
						return row;
					}
				}
		    }).result.catch(function (resp) {
			    if (['cancel', 'backdrop click', 'escape key press'].indexOf(resp) === -1) throw resp;
			});;
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
					action: function(row){
						$ctrl.goCommerce(row);
					}
				},
				{
					attr: '',
					colName: 'Borrar',
					render : function(){
						return 	'<a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></a>'
					},
					action: function(row){
						$ctrl.showAlertDelete(row);
					}
				}
			]
		}

	}]);