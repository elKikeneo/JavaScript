var palabra="Elena";
palabra.length; //attr .length sobre cadena de texto, nos devuelve el número de caracteres, pero si utilizamos el .length para un array, éste nos devuelve el número del elementos que contiene

//Array -> listado de datos accesibles por su posición
var alumnos=new Array("Imanaol","Yolanda","Iván","Kike"); 
alumnos=["Imanaol","Yolanda","Iván"]; // También se puede crear un array solo con poner [ ]  y no "new Array"

//Extraer un dato del array
document.write(alumnos+"<br>");
document.write(alumnos[0]+"<br>");

//Listado de alumnos
document.write("<ul>");
for(var i=0; i<alumnos.length; i++){ // length aquí nos devuelve el número de elementos que contiene el array, en un string nos devuleve el número de caracteres
    document.write("<li>"+alumnos[i]+"</li>")
    
}
document.write("</ul>");

//Ejercicios -> listado de alumnos con los elementos pares en rojo

document.write("<ul>");
for(var i=0; i<alumnos.length; i++){ // length aquí nos devuelve el número de elementos que contiene el array, en un string nos devuleve el número de caracteres
    if(i%2==0){
        document.write("<li>"+alumnos[i]+"</li>");
    }else{
        document.write("<li><span>"+alumnos[i]+"</span></li>");
    }
}
document.write("</ul>");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciones para añadirle elementos
//push() = añade elementos al final del array
alumnos.push("Kike");
document.write(alumnos+"<br>");

//unshift() = añade elementos al principio del array
alumnos.unshift("Oscar");
document.write(alumnos+"<br>");

//splice(pos, num. de elementos a borrar, valor a añadir) = modifica el array añadiendo elementos en la posición indicada
//alumnos.splice(2,0,"Jesús","Daniel");
//document.write(alumnos+"<br>");
alumnos.splice(2,1,"Jesús","Daniel"); //aquí estoy borrando un elemento que se encuentra en la posición indicada, borro a Yolanda
document.write(alumnos+"<br>");

//Ejercicios -> escoge 3 destinos 

//var d1=prompt("Escoge 1 destino");
//var d2=prompt("Escoge 2 destino");
//var d3=prompt("Escoge 3 destino");
//
//var destinos=[];
//destinos.push(d1,d2,d3);
//document.write(destinos);



var n=prompt("¿A cuántos destinos quieres ir?");
var destinos=new Array();

for(var i=0; i<n; i++){
    var p=prompt("Elige destino "+(i+1));
    destinos.push(p);
    document.write(p+"<br>");
}

//Una vez que hemos rellenado el array con todos los destinos, lo recorremos para puntar su contenido
for(var i=0; i<destinos.length; i++){
    document.write(destinos[i]+"<br>");
}





////////////////////////////////////////////////////////////
//Funciones de array para BUSCAR elementos

//indexOf(elem) = buscamos un elelemento dentro de un array desde la izq devolviendo la posición si lo encuentra o -1 si no lo encuentra
//lastIndexOf(elem) = buscamos un elemento dentro de un array desde la drch devolviendo la posción si lo encuentra o -1 si no lo encuentra

var stock=["lavadora","plancha","sartén"];
//qué suerte, sí lo tenemos // no tenemos de ese producto

var busca=prompt("¿Qué artículo buscas?");
busca=busca.toLowerCase();
result=stock.indexOf(busca);
if (result>0){
    document.write("qué suerte, sí lo tenemos <span>"+busca+"</span><br>");
}else{
    document.write("no tenemos de ese producto <span>"+busca+"</span><br>");
}

////////////////////////////////////////////////////////////////
//Funciones de array para ORDENAR  elementos
////////////////////////////////////////////////////////////////
//función sort() = ordena alfabétcamente los elementos de una array sobreescribiéendo sobre este orden nuevo...
document.write(alumnos.sort()+"<br>");
document.write(alumnos);






//VER EL LINK QUE ELENA SUBE AL EDMODO
//Link para ver más funciones :http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206














