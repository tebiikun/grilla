despegarApp.factory('CommerceService', function() {

	var commerceList = 
	[
		{	
			id: (new Date()).getTime() + 1,
			administrativo:{
				nombre: "nombre adm 4", 
				apellido: "ape adm", 
				telefono: "111", 
				email: "micorreo@gmail.com"
		},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "111", 
				apellido: "ape com", 
				nombre: "nombre com"
		},
			descripcion: "b",
			direccion: "calle falsa 345",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre1",
			telefono: "4488775544"
		},
		{	
			id: (new Date()).getTime() + 2,
			administrativo:{
				nombre: "nombre adm 7", 
				apellido: "ape adm", 
				telefono: "222", 
				email: "micorreo@gmail.com"
			},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "222", 
				apellido: "ape com", 
				nombre: "nombre com"
			},
			descripcion: "a",
			direccion: "calle falsa 222",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre2",
			telefono: "4488775544"
		},
		{
			id: (new Date()).getTime() + 3,
			administrativo:{
				nombre: "nombre adm3", 
				apellido: "ape adm", 
				telefono: "333", 
				email: "micorreo@gmail.com"
			},
			comercial: {
				email: "micorreo@gmail.com", 
				telefono: "333", 
				apellido: "ape com", 
				nombre: "nombre com"
			},
			descripcion: "d",
			direccion: "calle falsa 756",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre3",
			telefono: "4488775544"
		}
	]

	var Iservice = {

		addCommerce : function(commerce){
			commerce.id = (new Date()).getTime();
			commerceList.push(commerce);
			console.log("comercio generado con id: " + commerce.id);
			return commerceList;
		},

		updateCommerce: function(commerce){
			for(var i=0; i< commerceList.length; i++){
				if(commerceList[i].id == commerce.id){
					commerceList[i] = commerce
					break;
				}
			}
			console.log("se actualizo el comercio: " + commerce.id);
			return commerceList;
		},

		deleteCommerce: function(id){
			for(var i=0; i< commerceList.length; i++){
				if(commerceList[i].id == id){
					commerceList.splice(i, 1);
					break;
				}
			}
			console.log("se elimino el comercio: " + id);
		},

		getCommerce: function(id){
			for(var i=0; i< commerceList.length; i++){
				if(commerceList[i].id == id){
					return commerceList[i];
				}
			}
		},

		returnCommerces : function(){
			return commerceList;
		},

		getMockCommerce : function(){
			return {
				administrativo:{
					nombre: "nombre adm mock", 
					apellido: "ape adm mock", 
					telefono: "000 mock", 
					email: "correo.adm.mock@mock.com"
				},
				comercial: {
					email: "micorrecomercial.mock@mock.com", 
					telefono: "999 mock", 
					apellido: "ape com mock", 
					nombre: "nombre com mock"
				},
				descripcion: "comercio mock",
				direccion: "calle mock 666",
				especialidades: "esta es mi especialidad de comidas mockeadas",
				nombre: "nombre princ mock",
				telefono: "0303456 mock"
			};
		}
	}

  return Iservice;

});