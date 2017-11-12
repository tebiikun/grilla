var despegarApp = angular.module('despegar',['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider){

		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html', 
				controller: 'ListController as $ctrl' 
			})
			.when('/pedido', {
				templateUrl: 'partials/pedido.html', 
				controller: 'CommerceController'
			})
			.otherwise({redirectTo: '/'});

	}]);