
//Diferencia entre dar eventos en linea o en js con el this:
// eventos HTML -> onclick=nameFuncion(this) // JS -> nameFuncion(tag) = cuándo doy los eventos en linea en el html paso el this cómo parámetro de entrada, haciendo que la función de js recoja ese parámetro con un nombre de representante
//eventos JS -> div[0].onclick=nameFuncion; // nameFuncion(){  this.  } = cuándo doy el evento en js, no puedo pasar parámetro de entrada y por tanto la función no puede acceder a ese dato, por tanto el this se utiliza como representante de ese elemento dentro de la función

//Eventos en js
var divs=document.getElementsByClassName("caja");
for(var i=0; i<divs.length;i++){
    divs[i].onclick = clickCambiarBody;
    divs[i].addEventListener("mouseover",overCambiarFondoCaja);
    divs[i].addEventListener("mouseout",outEliminarFondoCaja);
    divs[i].ondblclick = negroBody;
}



function overCambiarFondoCaja(){ //console.log(tagDiv);
    
   switch(this.title){
       case "caja1":
           this.style.background="#227422";
           break;
       case "caja2":
           this.style.background="#3f845b";
           break;
       case "caja3":
           this.style.background="#825b45";
           break;
   }
    
}

function outEliminarFondoCaja(){
    this.style.background="#fff";
}

//Función llamada al pinchar sobre el elemento, para ello hemos debido pasar el mouse por encima y por tanto hemos activado previamente la función de "cambiarFondoCaja" que otorga a la etiqueta el atributo style. Por tanto cuándo lo pincho, el "this" que viene cómo parámetro de entrada ya contiene el style con el color de la caja que querré poner como color de fondo del body
function clickCambiarBody(){
    document.getElementsByTagName("body")[0].style.background = this.style.background;
}

//2click
function negroBody(){
    document.getElementsByTagName("body")[0].style.background = "#222";
}