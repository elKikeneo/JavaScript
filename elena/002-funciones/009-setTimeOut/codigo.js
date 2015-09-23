
var botones = document.getElementsByClassName("btn");
var mensaje = document.getElementById("mensaje");

/////Llamada a función nombrada
////////////////////////////////////////////////////////////////////////////

//Función llamada desde el evento onclick declaro cómo attr en línea en el doc html
function darBuenosDias(){
    mensaje.style.opacity = "1";
    mensaje.innerHTML = "Buenos días";
    mensaje.className = "morning";
    //setTimeout() es una función que llama SOLO UNA VEZ a otra función con un tiempo de espera o delay en milisegundos
    setTimeout(ocultar,2000);
}

//obj.attr
botones[1].onclick = darBuenasTardes;
function darBuenasTardes(){
    mensaje.style.opacity = "1";
    mensaje.innerHTML = "Buenas tardes";
    mensaje.className = "evening";
    setTimeout(ocultar,2000);
}

//Llamada a función anónima
////////////////////////////////////////////////////////////////////////////
botones[2].onclick = function(){
    mensaje.style.opacity = "1";
    mensaje.innerHTML = "Buenas noches";
    mensaje.className = "nigth";
    setTimeout(ocultar,2000);
}



function ocultar(){
    mensaje.style.opacity = "0";
}