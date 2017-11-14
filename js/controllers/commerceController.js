despegarApp.controller('CommerceController', [ '$scope', '$location', '$routeParams', 'CommerceService',
	function($scope, $location, $routeParams, CommerceService){
		
		$ctrl = this;
		$ctrl.isNewCommerce = typeof $routeParams.id === 'undefined';
		
		$ctrl.commerce = {}
		$ctrl.commerceList = [];

		if($ctrl.isNewCommerce){
			$ctrl.commerce = CommerceService.getMockCommerce();
		}
		else{
			$ctrl.commerce = CommerceService.getCommerce($routeParams.id);
		}

		$ctrl.commerceList = CommerceService.returnCommerces();

		$ctrl.createCommerce = function(commerce){
			if (!$ctrl.commerceForm.$valid) {
				console.log('Form invalid');
				return;
			}

			CommerceService.addCommerce(commerce);

			$ctrl.commerceList = CommerceService.returnCommerces();
			$location.path('/');
		}

		$ctrl.updateCommerce = function(commerce){
			if (!$ctrl.commerceForm.$valid) {
				console.log('Form invalid');
				return;
			}

			CommerceService.updateCommerce(commerce);

			$ctrl.commerceList = CommerceService.returnCommerces();
			$location.path('/');
		}


		$ctrl.save = function(){
			if($ctrl.isNewCommerce){
				$ctrl.createCommerce($ctrl.commerce);
			}else{
				$ctrl.updateCommerce($ctrl.commerce);
			}
		}

	}]);

