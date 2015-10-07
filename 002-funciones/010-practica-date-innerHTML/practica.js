var mensaje = document.getElementsByTagName("h1")[0];
var tagBody = document.getElementsByTagName("body")[0];

//Validación de hora -> new Date();
var fecha = new Date();
console.log(fecha);

//Obtención de los datos que pone a mi disposición new Date() -> f()
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var txt; 

//Validaciones
if(hora>=6 && hora<=12){
    txt="Buenos días";
    tagBody.className = "morning";
}else if(hora>=13 && hora<=20){
    txt="Buenas tardes";
    tagBody.className = "evening";
}else{
    txt="Buenas noches";
    tagBody.className = "nigth";
}

mensaje.innerHTML = txt+" son las "+hora+":"+minutos;