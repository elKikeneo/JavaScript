//símbolos para hace comentarios
 
/*símbolos para hace comentarios (recuerda que se puede usar el comando Ctrl+shift+c para hacer comentario múltiple.)*/
  
//Definición de variables
//###########################################
var noDefinida; //variable que está declarada pero no definida, es decir, no contien valor.
var nombre = "Kike"; //variable de tipo string.
var edad=45; //variable de tipo number.
var altura = 1.8; //variable de tipo number.
var isWorking = true; //variable de tipo boolean (true, false).

//nombres de variables no permitidos, frente a los permitidos
/*
 * var 2usuario (vs) var usuario2 -> el nombre de la variable no puede comenzar en número.
 * var nombre comp (vs) var nombre_comp / var nombreComp -> nada de espacios
 * var nom#bre (vs) var nom_bre -> nada de caracteres extraños ni acentuaciones (excepto el guión bajo (_))
 * SON SENSIBLES AL USO DE MAY Y MIN: var Name != var name
 */


/////////////////////////////////////////////////////////////////////////////////

//Ejercicio 1 -> almacenar texto en variable y pintarlo en una ventana emergente
var txt_alert = "Hola mundo";
//alert (txt_alert);

//Objetos
//###########################################
//obj.attr / obj.f()

//Objeto definido por nosotros
var numLetras = nombre.length; //obj.length = attr obtenedor que devuelve el número de caracteres de un string

//Objeto predefinido por JS (console, document, window, localstorage...)
document.write(numLetras);

/////////////////////////////////////////////////////////////////////////////////
//Funciones predefinidas para el manejo de cadenas de texto

//obj.toUpperCase()-> convertir un string en mayúsculas
document.write(nombre.toUpperCase());

//obj.toLowerCase()-> convertir un string en mayúsculas
var nomMin=nombre.toLowerCase();//otra manera de hacerlo con variables...
document.write(nomMin);


//obj.charAt(pos) -> función que devuelve el caracter tipográfico de un string en función de la posición que le pase como parámetro de entrada

//1º letra del nombre -> pos=0
document.write(nombre.charAt(0));
//la última letra
document.write(nombre.charAt(nombre.length - 1));

//obj.substring(posStart, cantidad) -> devuelve una porción de texto
document.write(nombre.substring(0,3));

//ejercicio -> devolver la extención de un doc
var fichero = "foto.jpg";
document.write(fichero.substring(fichero.length-3));

//obj.indexOf("caracter a buscar") -> es una función que devuelve la posición que ocupa ese caracter y si no lo encuentra devuelve el valor -1
document.write(fichero.substring(fichero.indexOf(".")+1));

//obj.lastIndexOf("caracter a buscar") -> es una función que devuelve la posición que ocupa ese caracter buscado desde la derecha y si no lo encuentra devuelve el valor -1
fichero = "foto.gatito.bonito.jpg";
document.write(fichero.substring(fichero.indexOf(".")+1));
document.write(fichero.substring(fichero.lastIndexOf(".")+1));

//obj.replace(search, replace) -> función para buscar y remplazar lo que buscamos. Es sensible al uso de may y min. 
var texto = "El curso de JS es muy difícil";
document.write(texto);
document.write(texto.replace("difícil", "fácil"));

//función para saber qué tipo de variable tengo, es deir, qué tipo de variable es en función de su contenido
document.write(typeof(edad));

//obj.match("string a buscar") -> busca coincidencias devolviendo "null" si no las encuentra y si las encuentra devuelve la propia búsqueda. Es sensible al uso de may y min.
document.write(texto.match("difícil"));
document.write("<br>");

//Ventanas emergentes
//alert() = ventana emergente que comunica un mensaje
//promp() = genera una ventana de diálogo y recoge un resultado

//var respuesta = prompt("Cómo estás?");
//document.write(respuesta);

document.write("<br>");

//ejercicio=====================================================
//¿En qué escuela estudias? y ¿Qué curso estás estudiando?
var answer1=prompt("¿En qué escuela estudias?");
var answer2=prompt("¿Qué curso estás estudiando?");

document.write(answer1);
document.write(" ",answer2);






