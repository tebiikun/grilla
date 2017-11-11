function mainController($scope, $location){

	$scope.test = "this is a test 1";
	$scope.pedido = [];
	$scope.commerce = {
		administrativo:{
			nombre: "nombre adm", 
			apellido: "ape adm", 
			telefono: "44887995544", 
			email: "micorreo@gmail.com"
		},
		comercial: {
			email: "micorreo@gmail.com", 
			telefono: "44887995544", 
			apellido: "ape com", 
			nombre: "nombre com"
		},
		descripcion: "comercio de prueba",
		direccion: "calle falsa 123",
		especialidades: "esta es mi especialidad de comidas",
		nombre: "nombre1",
		telefono: "4488775544"
		};

	$scope.commerceList = 
	[{
		administrativo:{
			nombre: "nombre adm", 
			apellido: "ape adm", 
			telefono: "44887995544", 
			email: "micorreo@gmail.com"
		},
		comercial: {
			email: "micorreo@gmail.com", 
			telefono: "44887995544", 
			apellido: "ape com", 
			nombre: "nombre com"
		},
		descripcion: "comercio de prueba",
		direccion: "calle falsa 123",
		especialidades: "esta es mi especialidad de comidas",
		nombre: "nombre1",
		telefono: "4488775544"
		},

		{
			administrativo:{
				nombre: "nombre adm", 
				apellido: "ape adm", 
				telefono: "44887995544", 
				email: "micorreo@gmail.com"
			},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "44887995544", 
				apellido: "ape com", 
				nombre: "nombre com"
			},
			descripcion: "comercio de prueba",
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre2",
			telefono: "4488775544"
		},
		{
			administrativo:{
				nombre: "nombre adm", 
				apellido: "ape adm", 
				telefono: "44887995544", 
				email: "micorreo@gmail.com"
			},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "44887995544", 
				apellido: "ape com", 
				nombre: "nombre com"
			},
			descripcion: "comercio de prueba",
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre3",
			telefono: "4488775544"
		}]

	$scope.createCommerce = function(){
		console.log($scope.commerce);

      if (!$scope.commerceForm.$valid) {
        console.log('Form invalid - Sign In.');
        return;
      }
	}

	$scope.addNew = function(){
		console.log("nuevo pedido realizado");
		$scope.commerceList.push($scope.commerce);
	}

	$scope.delete= function(id){
		console.log("borrando: " + id);
		$scope.commerceList.splice(id,1);
	}

	$(document).ready( function () {
		console.log("iniciando DataTable");
	    $('#mytable').DataTable();
	} );
}


