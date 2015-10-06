//ÁMBITO DE LAS VARIABLES
//var local = una variable definida CON el prefijo "var" dentro de una función, la estoy haciendo inaccesible para el resto de funciones. Ya que las variables nacen y mueren dentro de una función.
//var global = es aquella variable declarada al principio del documento o aquella que no lleva el prefijo. Esta es accesible por el resto de funciones.

//var globales

var parrafo;

function init(){
    parrafo=document.getElementById("texto");
}



function saludar(){
    parrafo.innerHTML = "Hola";
}

function despedir(){
    parrafo.innerHTML = "Adios";
}

function reset(){
    parrafo.innerHTML = "";
}