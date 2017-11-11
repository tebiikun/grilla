angular.module('despegarApp').controller('MainController', MainController)

function MainController($scope){

	$scope.test = "this is a test 1";
	$scope.pedido = [];

	$scope.addNew = function(){
		console.log("nuevo pedido realizado");
		$scope.pedido.push(1);
	}
}
