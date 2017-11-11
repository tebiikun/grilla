var despegarApp = angular.module('despegar',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html', 
				controller: mainController
			})
			.when('/pedido', {
				templateUrl: 'partials/pedido.html', 
				controller: mainController
			})
			.otherwise({redirectTo: '/'});

	}]);