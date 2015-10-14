
//Sentencias si en el doc html -> onclick=cambiarFondoCaja(2)
//##################################################################

//var divs=document.getElementsByClassName("caja");
//function cambiarFondoCaja(num){
//    for(var i=0;i<divs.length;i++){
//        if(i == num){
//            divs[i].style.background="#458b74";
//        }else{
//            divs[i].style.background="#fff";
//        }
//    }
//}
function overCambiarFondoCaja(tagDiv){ //console.log(tagDiv);
    
   switch(tagDiv.title){
       case "caja1":
           tagDiv.style.background="#227422";
           break;
       case "caja2":
           tagDiv.style.background="#3f845b";
           break;
       case "caja3":
           tagDiv.style.background="#825b45";
           break;
   }
    
}

function outEliminarFondoCaja(tagDiv){
    tagDiv.style.background="#fff";
}

//Función llamada al pinchar sobre el elemento, para ello hemos debido pasar el mouse por encima y por tanto hemos activado previamente la función de "cambiarFondoCaja" que otorga a la etiqueta el atributo style. Por tanto cuándo lo pincho, el "this" que viene cómo parámetro de entrada ya contiene el style con el color de la caja que querré poner como color de fondo del body
function clickCambiarBody(tagDiv){
    document.getElementsByTagName("body")[0].style.background = tagDiv.style.background;
}

//2click
function negroBody(){
    document.getElementsByTagName("body")[0].style.background = "#222";
}