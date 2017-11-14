	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: {
			data: '=',
			config: '<'
		},
		controller: function ($scope, $filter) {
			var $ctrl = this;
			
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
					if (a[col.attr] > b[col.attr]) {
						return 1;
					}
					if (a[col.attr] < b[col.attr]) {
						return -1;
					}
				});

				if(col.direction == 'desc'){
					$ctrl.data.reverse();
					col.direction = 'asc';
				}else{
					
					col.direction = 'desc';
				}
			}

			$ctrl.safeContent = function(data, attr){
				var splited = attr.split('.');
				for(var i = 0; i < splited.length; i++){
					data = data[splited[i]];	
				}
				return data;
			}

			this.$onInit = function () {

				// init
			    $scope.sort = {       
	                sortingOrder : 'id',
	                reverse : false
	            };

				$ctrl.items = this.data;
				$scope.currentPage = 1;
				$scope.pageSize = $ctrl.rows;
				$scope.collection = this.data;
			};
		}
	});