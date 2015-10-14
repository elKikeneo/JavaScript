
//Navigator = objeto que nos da información relativa al navegador que está usando el usuario
//navigator.userAgent = nos devuelve una información completa sobre el agente de usuario representado por el navegador

var infoNavegador = navigator.userAgent.toLowerCase();

//search() = función que busca una cadena de texto dentro de un string devolviendo -1 sino lo encuentra o devolviendo la posición que ocupa esa palabra dentro del string
if(infoNavegador.search(/iphone|ipod|ipad|android/) != -1){
   window.location = "movil/"; 
}