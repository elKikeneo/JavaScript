
var botones = document.getElementsByClassName("btn");
var mensaje = document.getElementById("mensaje");

/////Llamada a función nombrada
////////////////////////////////////////////////////////////////////////////

//Función llamada desde el evento onclick declaro cómo attr en línea en el doc html
function darBuenosDias(){
    mensaje.innerHTML = "Buenos días";
    mensaje.className = "morning";
}

//obj. attr
botones[1].onclick = darBuenasTardes;
function darBuenasTardes(){
    mensaje.innerHTML = "Buenas tardes";
    mensaje.className = "evening";
}

//Llamada a función anónima
botones[2].onclick = function(){
    mensaje.innerHTML = "Buenas noches";
    mensaje.className = "nigth";
}

