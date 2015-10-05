//Definiciín de variables 
var nombre; //variable declarada (cuando no tienen asignado valor)
var nombre = "Kike"; //variable definida
var lugarNacimiento = "Lima";

document.write(nombre+" ha nacido en "+lugarNacimiento);

  
//Ejercicio -> recoger info del usuario y mostrar oración

 
var name = prompt("¿Cuál es tu nombre?","Kike");
var lugarNac = prompt("¿Dónde has nacido?");

document.write("<p>Tu nombre es "+name+" y has nacido en <span style='color:red'>"+lugarNac+"</span></p>");

//Ejercicio -> 
var string="árbol vErdE"; //Árbol verde

document.write(string.charAt(0).toUpperCase()+string.substring(1).toLowerCase());

