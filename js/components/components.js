	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: {
			data: '=',
			config: '<'
		},
		controller: function ($scope, $filter) {
			var $ctrl = this;
			$ctrl.search;
			$ctrl.changeStateFilter = false;
			$ctrl.searchFilter = {};

			$ctrl.runAction = function(row, col){
				if(col.action){
					return col.action(row.id);
				}
			}

			$ctrl.showContent = function(row, col){
				if(col.render){
					return col.render();
				} 
				
				return $ctrl.safeContent(row, col.attr);
			}

			

			$ctrl.setToValue = function(obj, value, path) {
			    path = path.split('.');
			    for (i = 0; i < path.length - 1; i++){
			    	if(typeof obj[path[i]] === 'undefined'){
			        	obj = obj[path[i]] = {};
			        } else {
			        	obj = obj[path[i]];
			        }
			    }

			    obj[path[i]] = value;
			}

			$ctrl.createFilterModel = function(attr, value){

				if(Array.isArray(attr)){
						$ctrl.setToValue($ctrl.searchFilter, value, attr[0]);
				} else {
					$ctrl.setToValue($ctrl.searchFilter, value, attr);
				}
				$ctrl.changeStateFilter = !$ctrl.changeStateFilter;
			}
			

			$ctrl.sortFunction = function(col){
				if(col.reverse == undefined){
					col.reverse = false;
				} else{
					col.reverse = !col.reverse;
				}
				$ctrl.orderByReverse = col.reverse;
				$ctrl.orderByExpression = col.attr;
				
				if(col.sortFunction){
					$ctrl.orderByExpression = null;
				}

				$ctrl.orderByComparator = col.sortFunction;
			}

			$ctrl.safeContent = function(data, attr){
				if(Array.isArray(attr)){
					var newContent = [];
					for(var i = 0; i < attr.length; i++){
						newContent.push($ctrl.safeContent(data, attr[i]));
					}
					return newContent.join(' ');
				} else {
					var splited = attr.split('.');
					for(var i = 0; i < splited.length; i++){
						data = data[splited[i]];	
					}
					return data;
				}
			}

			this.$onInit = function () {
				$ctrl.currentPage = 1;
				$ctrl.rowsForPage = $ctrl.config.pagination.rowsForPage;
			};

			$ctrl.updatePages = function(){
				var data = $filter('filter')($ctrl.data, $ctrl.searchFilter);

				//si al filtrar queda vacío seteo para que quede seleccionada la primer pagina
				if($ctrl.currentPage == 0){
					$ctrl.setPage(1);
				}
				//calculo la cantidad de paginas
				$ctrl.pages = new Array(Math.ceil(data.length / $ctrl.config.pagination.rowsForPage));
				if($ctrl.currentPage > $ctrl.pages.length){
					$ctrl.currentPage = $ctrl.pages.length;
				}
			}

			$ctrl.setPage = function(page){
				$ctrl.currentPage = page;
			}

			$ctrl.previousPage = function(){
				if($ctrl.currentPage > 1){
					$ctrl.currentPage = $ctrl.currentPage - 1;
				}
			}

			$ctrl.nextPage = function(){
				if($ctrl.currentPage < $ctrl.pages.length){
					$ctrl.currentPage = $ctrl.currentPage + 1;
				}
			}

			$scope.$watch('$ctrl.currentPage + $ctrl.rowsForPage + $ctrl.data + $ctrl.changeStateFilter', function() 
            {	
            	$ctrl.beginPage = (($ctrl.currentPage - 1) * $ctrl.rowsForPage);
            	$ctrl.updatePages();
            });

		}
	});