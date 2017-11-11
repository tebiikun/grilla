var despegarApp = angular.module('despegar',['ngRoute'])
	.component('home', {
	  template: '<h1>Home</h1><p>Hello, !</p>',
	  bindings: {
	    user: '<'
	  }
	})
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