	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: { 
			rows: '@',
			data: '<',
			editPath: '@',
			columns: '=',
			delete: '&',
			call: '&',
			orderList : '&'
		},
		controller: function ($scope, $filter) {
			console.log($scope);
			var $ctrl = this;
			
			$ctrl.orderFunction = function(colName, pos){
				var obj = {list: $ctrl.items, attr: colName};

				$ctrl.items = $ctrl.columns[pos].order(obj);
			}

			$ctrl.showColumnContent = function(attrKey, data){
				var splited = attrKey.split('.');
				
				for(var i = 0; i < splited.length; i++){
					data = data[splited[i]];
				}

				$ctrl.columnValue = data;

				if(data){
					return true;
				}
			}

			/*$ctrl.safeModel = function(){
				var objeto = {};
				var modelo = "atributo.prototipo"
				var splited = modelo.split('.');
				var final = {};
				for(var i = 0; i < splited.length; i++){

					objeto.[splited[i]] = {};
					
					console.log("hasta ahora: "+ objeto);
				}
			}*/

			/*$ctrl.reverse = function(nombre){
				$ctrl.items.sort(
					function (a, b) {
					if (a[nombre] > b[nombre]) {
						return 1;
					}
					if (a[nombre] < b[nombre]) {
						return -1;
					}
						// a must be equal to b
						return 0;
					}
				).reverse();	
			}*/
			this.$onInit = function () {

				// init
			    $scope.sort = {       
	                sortingOrder : 'id',
	                reverse : false
	            };

				$ctrl.items = this.data;
				console.log("mis items");
	            console.log($ctrl.items);
				$scope.currentPage = 1;
				$scope.pageSize = $ctrl.rows;
				$scope.collection = this.data;
			};


			$ctrl.filterOptions = [];

			$( '.dropdown-menu a' ).on( 'click', function( event ) {

			   var $target = $( event.currentTarget ),
			       val = $target.attr( 'data-value' ),
			       $inp = $target.find( 'input' ),
			       idx;

			   
			   return false;
			});
		}
	});