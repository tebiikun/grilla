	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: { 
			rows: '@',
			data: '<',
			editPath: '@',
			columns: '<'
		},
		controller: function ($scope) {
			console.log($scope);
			var $ctrl = this;

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

			/*$(document).ready( function () {
				console.log("iniciando DataTable");
			    $('#mytable').DataTable({
			    	"lengthMenu": [[2, 5, 10, -1], [2, 5, 10, "All"]]
			    });
			});
			*/
		}
	});