despegarApp.factory('CommerceService', function() {

	var commerceList = 
	[
		{	
			id: (new Date()).getTime() + 1,
			administrativo:{
				nombre: "Pablo", 
				apellido: "Perez", 
				telefono: "1145647897", 
				email: "pablocorreo@gmail.com"
		},
			comercial: {
				email: "pablo.comercial@gmail.com", 
				telefono: "1178987456", 
				apellido: "ape comercial", 
				nombre: "poablo comercio"
		},
			descripcion: "comidas rapidas",
			direccion: "calle falsa 123",
			especialidades: "rapida",
			nombre: "RapidDelivery",
			telefono: "4488775544",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{	
			id: (new Date()).getTime() + 2,
			administrativo:{
				nombre: "nombre adm", 
				apellido: "apellido adm", 
				telefono: "44878465", 
				email: "adminsitrativo@hotmail.com"
			},
			comercial: {
				email: "comerciocorreio@gmail.com", 
				telefono: "887458955", 
				apellido: "Carlin", 
				nombre: "Carlon"
			},
			descripcion: "Empanadas salteñas",
			direccion: "salta 648",
			especialidades: "empanadas",
			nombre: "empanadas rapidas",
			telefono: "445834512",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{
			id: (new Date()).getTime() + 3,
			administrativo:{
				nombre: "Claudia", 
				apellido: "Alvarez", 
				telefono: "1164874845", 
				email: "claudialvarez@delivery.com"
			},
			comercial: {
				email: "comercial.claudia@gmail.com", 
				telefono: "8877484314", 
				apellido: "Comer Claudia", 
				nombre: "claudia comercial"
			},
			descripcion: "pastas ricas",
			direccion: "pesto 7784",
			especialidades: "pastas caseras",
			nombre: "Il tano",
			telefono: "665784215",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{
			id: (new Date()).getTime() + 4,
			administrativo:{
				nombre: "Iwao", 
				apellido: "Komiyama", 
				telefono: "648885215", 
				email: "iwao.komiyama@gmail.com"
			},
			comercial: {
				email: "sushiman@sushi.com", 
				telefono: "64815425", 
				apellido: "Komiya", 
				nombre: "komiya comercial"
			},
			descripcion: "los mejores sushis",
			direccion: "Niponia 465",
			especialidades: "Sushi y salteados",
			nombre: "Sushi & Wok",
			telefono: "4488775544",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{
			id: (new Date()).getTime() + 5,
			administrativo:{
				nombre: "Pedro", 
				apellido: "Pedro adm", 
				telefono: "551122443", 
				email: "Pedro.adm@gmail.com"
			},
			comercial: {
				email: "pedropesca@gmail.com", 
				telefono: "118877445", 
				apellido: "Pesquero", 
				nombre: "Pedro"
			},
			descripcion: "Ricas truchas",
			direccion: "Pacu 779",
			especialidades: "Pescados a la parrilla",
			nombre: "Pedro",
			telefono: "4488775544",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{
			id: (new Date()).getTime() + 6,
			administrativo:{
				nombre: "Mariana", 
				apellido: "Fontana", 
				telefono: "446885522", 
				email: "fontanam@gmail.com"
			},
			comercial: {
				email: "marifontana@comercio.com", 
				telefono: "44551134", 
				apellido: "Fontana", 
				nombre: "Mariana"
			},
			descripcion: "fondue veloz",
			direccion: "Gruyere 885",
			especialidades: "esta es mi especialidad de comidas",
			nombre: "Fondue love",
			telefono: "471293574",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
		},
		{
			id: (new Date()).getTime() + 7,
			administrativo:{
				nombre: "Pollero", 
				apellido: "Pollo", 
				telefono: "1177448855", 
				email: "polleriaespecial@pollo.com"
			},
			comercial: {
				email: "polloalhorno@gmail.com", 
				telefono: "64852134", 
				apellido: "polleron", 
				nombre: "pollito"
			},
			descripcion: "pollo al spiedo",
			direccion: "gallina 44875",
			especialidades: "Pollos al spiedo",
			nombre: "Parripollo",
			telefono: "7984512",
			open: new Date(1970, 0, 1, 14, 57, 0),
			close: new Date(1970, 0, 1, 14, 57, 0),
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
		}
	}

  return Iservice;

});