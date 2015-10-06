//var global
var titulo;
var texto;

//Hacemos los selectores una vez cargado el documento, y lo hacemos con var globales para que el resto de funciones tengan acceso a ellos
function init(){
   titulo=document.getElementsByTagName("h1")[0];
   texto=document.getElementById("texto");
}

function ponerEstiloAzul(){
    var colorAzul = "#2d437f";
    titulo.style.color = colorAzul;
    texto.style.color = colorAzul;
    texto.innerHTML = "El color utilizado es "+colorAzul;
}

function ponerEstiloVerde(){
    var colorVerde='#47bf58';
    titulo.style.color=colorVerde;
    texto.style.color=colorVerde;
    texto.innerHTML = "El color utilizado es "+colorVerde;
}

function reset(){
    location.reload();
}