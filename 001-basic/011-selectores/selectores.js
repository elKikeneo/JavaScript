//JS VINCULADO EN CABECERA
//El documento JS está vinculado en cabecera, por tanto, debido al sentido de lectura lineal es ejecutado antes que el propio documento html. Por ello en el JS no puede hacer referencia a una etiqueta si todavía no ha sido creado o cargado
//Solución -> llamamos al objeto WINDOW para que cuando esté cargado ejecute la función o vinculamos el JS antes del cierre del body

window.onload = function() {


    ////SELECTORES
    //por ID -> selector único 
    var info = document.getElementById("info");

    //por TAG -> genera un array con todos los elementos de esa etiqueta
    var enlaces = document.getElementsByTagName("a");

    //por CLASS -> genera un array con todos los elementos de esa clase
    var destacados = document.getElementsByClassName("dest");

//Contar e insertar información
    info.innerHTML = "Nº de enlaces: " + enlaces.length + "<br>";
    info.innerHTML += "Nº de elementos destacados: " + destacados.length + "<br>";

//Accedemos a los atributos de los objetos
//Mostrar el href del primer enlace
    info.innerHTML += "Atributo del primer enlace: " + enlaces[0].href + "<br>";

//Mostrar el href del último enlace
    info.innerHTML += "Atributo del último enlace: " + enlaces[enlaces.length - 1].href + "<br>";

//Hacer una lista con los enlaces

    info.innerHTML += "<ul id='lista'></ul>";
    var lista = document.getElementById('lista');
    for (var i = 0; i < enlaces.length; i++) {
        lista.innerHTML += "<li>" + enlaces[i] + "</li>";
    }

//Contar número de elementos que van al index
    var contadorIndex = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href.match('index') == 'index') {
            contadorIndex++;
        }
    }
    info.innerHTML += "Nº de enlaces que van a index: " + contadorIndex;

}
