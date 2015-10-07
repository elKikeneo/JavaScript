//Variables globales con los selectores de los elementos que sufren y accionan
var parrafo = document.getElementsByClassName("info")[0];
var classNameOrg = parrafo.className; //Recogemos el nombre de la clase original que tiene el párrafo para poderselo volver a aplicar en el reset

//podemos dar los eventos en linea en el html o se los damos dinámicamente con js obj.attr
var botones = document.getElementsByClassName("btn");
botones[0].onclick = cambiarEstilo;
botones[1].onclick = reset;

function cambiarEstilo(){
    if(parrafo.className.match("destacado") != "destacado" ){//busca la palabra si lo encuentra devuelve la palabra y si no lo encuentra te devuelve -1
        parrafo.className += " destacado";
    }
}

function reset(){
    parrafo.className = classNameOrg;
    
}


