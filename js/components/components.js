	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: {
			data: '=',
			config: '<'
		},
		controller: function ($scope, $filter) {
			var $ctrl = this;
			$ctrl.search;
			$ctrl.changeStateSort = false;

			$ctrl.runAction = function(row, col){
				if(col.action){
					return col.action(row.id);
				}
			}

			$ctrl.showContent = function(row, col){
				if(col.render){
					return col.render();
				} else {
					return $ctrl.safeContent(row, col.attr);
				}
				
			}

			$ctrl.sortFunction = function(col){
				if(col.direction == undefined){
					col.direction = 'asc';
				}

				$ctrl.data.sort( col.sortFunction || function (a, b) {
					if ($ctrl.safeContent(a, col.attr) < $ctrl.safeContent(b, col.attr)) {
						return -1;
					}
					if ($ctrl.safeContent(a, col.attr) > $ctrl.safeContent(b, col.attr)) {
						return 1;
					}
				});

				if(col.direction == 'asc'){
					col.direction = 'desc';
					$ctrl.data.reverse();
				}else{
					col.direction = 'asc';
				}

				$ctrl.changeStateSort = !$ctrl.changeStateSort;
			}

			$ctrl.safeContent = function(data, attr){
				var splited = attr.split('.');
				for(var i = 0; i < splited.length; i++){
					data = data[splited[i]];	
				}
				return data;
			}

			this.$onInit = function () {
				$ctrl.currentPage = 1;
				$ctrl.rowsForPage = $ctrl.config.pagination.rowsForPage;
			};

			$ctrl.updatePages = function(){
				$ctrl.pages = new Array(Math.ceil($ctrl.data.length / $ctrl.config.pagination.rowsForPage));
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

			$scope.$watch('$ctrl.currentPage + $ctrl.rowsForPage + $ctrl.data + $ctrl.changeStateSort', function() 
            {	
                var desde = (($ctrl.currentPage - 1) * $ctrl.rowsForPage);
                var hasta = desde + $ctrl.rowsForPage;
				$ctrl.updatePages();
                $ctrl.nuevaData = $ctrl.data.slice(desde, hasta);
            });
		}
	});