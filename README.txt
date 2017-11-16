Nombre: Esteban Adrián Ciccarelli
Edad: 27 años
Direccion: Andrade 1779
Nacionalidad: argentino
Teléfono: 11 31131537

He trabajado anteriormente con Angularjs de forma particular, uno de los motivos por los cuales me ofrezco a cambiar de trabajo es las ganas de seguir aprendiendo esta tecnología. 
La experiencia que tengo son conocimientos que fui adquiriendo con la experiencia, tratando siempre de aplicar las buenas practicas lo mejor posible.
Para este exámen lo que respecta investigación fueron varios temas relacionados al componente grilla.
Si bien había pensado un estructura similar a la final para la situación de arrays multidimensionales y aplicables a cualquier situación me trajo algunas dudas de como continuar el desarrollo.

Otra situacion similar me sucedió con el paginado, en principio habia realizado con datatables, luego fue hecho con una directiva externa que me resolvía lo pedido pero a fin de cuentas di por hecho que necesitaban que realize el ejercicio completo sin librerias externas para evaluar mi desempeño. opté por resolverlo manualmente pudiendo llegar a resultados interesantes.

A lo que respecta Angularjs tengo mas coasas buenas que malas para comentar, en si me gusta mucho pero como todo tiene sus partes malas. Quiero destacar que me gustó mucho desde un inicio ya que venia programando de una forma "no ordenada" y en parte aprender angular me hizo dar cuenta de conceptos y otra forma de pensar los desarrollos. Se me hizo dificil el primer tiempo pero poco a poco uno le va tomando el ritmo. 

para este desarrollo los puntos a tener en cuenta son los siguientes:

GRILLA:

Para utilizar la grilla en el html:

<grid-table data="data" config="gridConfig"></grid-table>

CONFIGURACIÓN: (listController.js)

$ctrl.gridConfig =
		{	
			pagination:{
				rowsForPage: [NUMBER]
			},
			data:
			[
				{
					attr: ['STRING'][ARRAY[STRING]][REQUIRED],		
					colName: [STRING],
					order: [BOOLEAN],
					reverse: [BOOLEAN],
					filter: [BOOLEAN],
					render: [FUNCTION],
					action: [FUNCTION],
					sortFunction: [FUNCTION]
				}
			]
		}
		
pagination: (object)
data: ([object, object]) cada objeto representa una columna a mostrar
rowsForPage: (number) define cantidad de filas a mostrar en la grilla.
attr: ('string' | ['string', 'string']) define que campo del array principal se quiere mostrar por columna
colName: ('string') define el nombre de la columna que se quiere mostrar.
order: (true | false) define de forma booleana si esa columna permite ordenamiento
reverse: (true | false) defina la orientacion principal a utilizar en el momento de ordenar el contenido ( el componente lo seteará en asc en caso que no tenga)
render: (function(){return '<html>' }) a travez de una funcion se puede mostrar en pantalla un contenido ( html )
action: (function(){ }) es la accion que se le quiere poner a un elemento renderizado en pantalla ( por ejemplo funcionalidad de un botón)
sortFunction: (function(a,b){ if(a.type === 'object'){ return }) permite definir por medio de una funcion una forma de ordenamiento (requiere preguntar object.type === 'object')


BOTONES EN PANTALLA: (Para las acciónes se asumió que no siempre se va a tener la necesidad de editar u eliminar un elemento, por este motivo se trabajan en 2 columnas separadas con su acción reperesentada por medio de una función del atributo ACTION)



PARA CORRER APLICACIÓN:

Para levantar  se utilizo un servidor local (WAMP, XAMPP, SIMILARES).
abrir localhost/despegar/#!/ o con el puerto (dependerá de como se tenga configurado)
La aplicacion corre a partir de un archivo index.html donde se levantaran el contenido de las otras vistas por medio de un ng-view.
Si se coloca una ruta no válida te dirige automaticamente al LIST como vista principal.