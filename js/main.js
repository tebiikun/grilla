var despegarApp = angular.module('despegar',['ngRoute', 'ngSanitize', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider){

		$routeProvider.
			when('/', {
				templateUrl: 'partials/list.html', 
				controller: 'ListController as $ctrl' 
			})
			.when('/commerce', {
				templateUrl: 'partials/commerce.html', 
				controller: 'CommerceController as $ctrl'
			})
			.when('/commerce/:id', {
				templateUrl: 'partials/commerce.html', 
				controller: 'CommerceController as $ctrl'
			})
			.otherwise({redirectTo: '/'});

	}]);