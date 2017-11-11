despegarApp.factory('PedidosService', function() {

	var commerceList = 
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
		}
	]

	var Iservice = {
		addCommerce : function(commerce){
			console.log("nuevo pedido realizado");
			commerceList.push(commerce);
			return commerceList;
		},
		deleteCommerce: function(indexCommerce){
			commerceList.splice(indexCommerce, 1);
		},
		returnCommerce : function(){
			return commerceList;
		}
	}

  return Iservice;

});