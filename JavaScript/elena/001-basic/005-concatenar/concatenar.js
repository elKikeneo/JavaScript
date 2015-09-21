
//Definición de variables
var nombre="Elena";
var lugarNacimiento="Granada";
document.write('<b>'+nombre+" ha nacido en "+lugarNacimiento+'</b>');

//Ejercicio -> recoger info del usuario y mostrar oración
nombre=prompt("¿Cuál es tu nombre??","Elena");
lugarNacimiento=prompt("¿Dónde has nacido??");
document.write("<p>"+nombre+" ha nacido en <span style='color:green'>"+lugarNacimiento.toUpperCase()+"</span></p>");


//Ejercicio_________________________
var string="árbol vErdE"; //Árbol verde
document.write( string.charAt(0).toUpperCase()+string.substring(1).toLowerCase() );

