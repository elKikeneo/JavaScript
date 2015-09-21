

// Ctrl + shift + C  = comentario lineal
/*Comentario multilineal*/

//Definición de variables
//###############################
var noDefinida; //variable que está declarada pero no definida, es decir, no contiene valor
var nombre = "Elena"; //variable de tipo string
var edad = 45; //variable de tipo number
var altura = 1.8; //variable de tipo number
var isWorking = true; //variable boolean (true,false)

//nombre de variables NO PERMITIDOS vs SI PERMITIDOS
/*
 * var 2usuario (vs) var usuario2 -> el nombre de una variable NO puede comenzar en número
 * var nombre comp (vs) var nombre_comp / var nombreComp -> nada de espacios 
 * var nom#bre (vs) var nom_bre -> nada de caracteres extraños ni acentuaciones
 * SON SENSIBLES AL USO DE MAY Y MIN => var Name != var name
 */

/////////////////////////////////////////////////////////////////////

//Ejercicio 1 -> almacenar texto en varible y pintarlo en una ventana emergente
var txt_alert = "Adiós Mundo";
//alert(txt_alert);

/////////////////////////////////////////////////////////////////////

//Objetos -> en js todo son obj
//############################# obj.attr / obj.f()

//Obj definido por nosotros
var numLetras = nombre.length; //obj.length = attr obtenedor que devuelve el número de carácteres de un string

//Objeto predefinido por js (console,document,window,localstorage..)
document.write(numLetras);

/////////////////////////////////////////////////////////////////////

//FUNCIONES PRED.PARA EL MANEJO DE CADENAS DE TEXTO

// obj.toUpperCase() -> convertir un string en may
var nombreMay = nombre.toUpperCase();
document.write( nombreMay );

// obj.toLowerCase() -> convertir un string en min
document.write( nombreMay.toLowerCase() );

// obj.charAt(pos) -> función que devuelve el caracter tipográfico de un string, en función de la posición que le pase cómo parámetro de entrada
//1º letra del nombre -> pos=0
document.write( nombre.charAt(0) );
//Última letra
document.write( nombre.charAt( numLetras-1 ) );


// obj.substring(posStart, end) -> devuelve una porción de texto
document.write( nombre.substring(0,3) );
//Ejercicio-> devolver la extensión de un doc
var fichero = "foto.jpg";
document.write( fichero.substring(fichero.length-3) );


fichero="foto.gatito.bonito.jpg"; //sobreescritura
// obj.indexOf("caracter a buscar") -> f() que devuelve la posición que ocupa ese caracter buscado desde la izq, y sino lo encuentra devuelve el valor -1
document.write(fichero.substring(fichero.indexOf(".")+1));
document.write("<br>");
// obj.lastIndexOf("caracter a buscar") -> f() que devuelve la posición que ocupa ese caracter buscado desde la dcha, y sino lo encuentra devuelve el valor -1
document.write(fichero.substring(fichero.lastIndexOf(".")+1));


// obj.replace(search, replace) -> función para buscar y reemplazar. Es sensible al uso de may y min
var texto = "El curso de Js es muy difícil";
document.write( texto.replace("difícil","fácil") );

//Función para saber que tipo de variable tengo, es decir, que tipo de variable es en función de su contenido
document.write( typeof(edad)  );


// obj.match("string a buscar") -> bueca coincidencias devolviendo "null" si no las encuentra y si la encuentra devuelve la propia búsqueda. Es sensible al uso de may y min.
document.write( texto.match("difícil") );


//Funciones para generar ventanas emergentes:
//alert() = ventana emergente que comunica un mensaje
//prompt() = genera una ventana de diálogo y recoge un resultado
var respuesta = prompt("Cómo estás?");
document.write(respuesta);

document.write("<br>");

//Ejercicio__________________________________
//¿En qué escuela estudias? y ¿qué curso estás estudiando?
var resp_escuela=prompt('¿En qué escuela estudias?');
var resp_curso=prompt('¿qué curso estás estudiando?');

document.write(resp_escuela);
document.write(resp_curso);












