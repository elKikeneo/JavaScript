//Cuándo vinculamos los ficheros en cabecera, tendremos problemas con los selectores de las etiquetas porque aun no se han leido en el documento, por tanto sólo los podemos seleccionar cuándo el documento se ha cargado por completo

//Javascript
window.onload = init; //f() nombrada
function init(){
    //selectores
}

window.onload=function(){ //f() anónima
    //selectores
}

///////////////////////////////////////////////////////

//Jquery f() anónima
$(document).ready(function(){
    //selectores
});

//Jquery simplificado
$(function(){
    //selectores
});
