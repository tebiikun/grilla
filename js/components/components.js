	despegarApp.component('gridTable', {
		templateUrl: 'js/components/templates/gridTemplate.html',
		bindings: { 
			rows: '@',
			data: '<',
			editPath: '@',
			columns: '<'
		},
		controller: function () {
			
			var $ctrl = this;

			$ctrl.showColumnContent = function(){
				console.log("contenidooooo");
			}

		}
	});