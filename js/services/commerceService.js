despegarApp.factory('CommerceService', function() {

	var commerceList = 
	[
		{	
			id: 0,
			administrativo:{
				nombre: "nombre adm", 
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
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre1",
			telefono: "4488775544"
		},
		{	
			id: 1,
			administrativo:{
				nombre: "nombre adm", 
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
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre2",
			telefono: "4488775544"
		},
		{
			id: 2,
			administrativo:{
				nombre: "nombre adm", 
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
			direccion: "calle falsa 123",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "nombre3",
			telefono: "4488775544"
		}
	]

	var Iservice = {
		addCommerce : function(commerce){
			var uniq = (new Date()).getTime();
			console.log(uniq);
			commerce.id = uniq;
			commerceList.push(commerce);
			return commerceList;
		},
		updateCommerce: function(commerce){
			for(var i=0; i< commerceList.length; i++){
				if(commerceList[i].id == commerce.id){
					commerceList[i] = commerce
					break;
				}
			}

			return commerceList;
		},
		deleteCommerce: function(idCommerce){
			commerceList.splice(commerceList.map( (el) => el.id ).indexOf(idCommerce), 1);
		},
		returnCommerces : function(){
			return commerceList;
		}
	}

  return Iservice;

});