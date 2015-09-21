
var palabra="Elena";
palabra.length; //attr .length sobre cadena de texto, nos devuelve el número de caracteres, pero si utilizamos el .length para un array, éste nos devuelve el número del elementos que contiene

////////////////////////////////////////////////////////////////////////////////////////
//Array = listado de datos accesibles por su posición. Se puede escribir de ambas formas.
////////////////////////////////////////////////////////////////////////////////////////

var alumnos= new Array("Imanol","Yolanda","Iván");
alumnos = ["Imanol","Yolanda","Iván"];

//Extraer un dato del array
document.write(alumnos+"<br>");
document.write(alumnos[0]+"<br>");

//Listado de alumnos
document.write("<ul>");
for(var i=0; i<alumnos.length ;i++){
    document.write("<li>"+alumnos[i]+"</li>");
}
document.write("</ul>");

//////Ejercicio -> listado de alumnos, con los elementos pares en rojo
document.write("<ul>");
for(var i=0; i<alumnos.length ;i++){
    if(i%2 != 0){
        document.write("<li><span>"+alumnos[i]+"</span></li>");
    }else{
        document.write("<li>"+alumnos[i]+"</li>");
    }
}
document.write("</ul>");

////////////////////////////////////////////////////////////////////////////////////////
//Funciones de array para AÑADIRLE elementos
//////////////////////////////////////////////////////////////////////////////////////////

// push(x) = añade elementos al final del array
alumnos.push("Kike");
document.write(alumnos+"<br>");

// unshift(x) = añade elementos al principio del array
alumnos.unshift("Óscar");
document.write(alumnos+"<br>");

// splice( pos , num elem a borrar, valor a añadir... ) = modifica el array añadiendo elementos en la posición indicada
alumnos.splice(2,0,"Jesús","Daniel");
document.write(alumnos+"<br>");

//Ejercicio -> Escoge 3 destinos
//var d1=prompt('Escoge 1 destino');
//var d2=prompt('Escoge 2 destino');
//var d3=prompt('Escoge 3 destino');
//
//var destinos=[];
//destinos.push(d1,d2,d3);
//document.write(destinos);

//////////////////////////////////////
var cant=prompt('¿Cuántos destinos quieres elegir?');
var destinos=new Array();

//Generamos tantos destinos cómo cant indicada en el prompt anterior
for(var i=0; i<cant ; i++){
    var resp=prompt('Elige tu destino '+(i+1));
    destinos.push(resp); //rellenamos el array en cada vuelta con cada una de las respuestas
}

//Una vez que hemos rellenado el array con todos los destinos, lo recorremos para pintar su contenido
for(var i=0; i<destinos.length ; i++){
    document.write(destinos[i]+"<br>");
}

////////////////////////////////////////////////////////////////////////////////////////
//Funciones de array para BUSCAR elementos
////////////////////////////////////////////////////////////////////////////////////////

// indexOf(elem) = buscamos un elemento dentro de un array desde la izq, devolviendo la posición si lo encuentra o -1 sino lo encuentra
// lastIndexOf(elem) = buscamos un elemento dentro de un array desde la dcha, devolviendo la posición si lo encuentra o -1 sino lo encuentra
var stock=["lavadora","plancha","sartén","sarten"];
var resp=prompt("¿Qué producto desea?");
resp=resp.toLowerCase();

if( stock.indexOf(resp) != -1 ){
    document.write("Que suerte, si tenemos "+resp+"<br>");
}else{
    document.write("Que pena, no tenemos "+resp+"<br>");
}


////////////////////////////////////////////////////////////////////////////////////////
//Funciones de array para ORDENAR elementos
////////////////////////////////////////////////////////////////////////////////////////
//función sort() ordena alfabeticamente los elementos de un array sobrescribiéndolo con este orden nuevo
document.write(alumnos.sort()+"<br>");
document.write(alumnos);


//Link para ver más funciones :http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206