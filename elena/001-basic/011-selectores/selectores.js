
//JS VINCULADO EN CABECERA
//el documento js está vinculado en cabecera, por tanto debido al sentido de lectura lineal, es ejecutado antes que el propio documento html. Por ello en el js no puedo hacer referencia a una etiqueta si todavía no ha sido creada o cargada
//Solución -> llamamos al obj window para que cuándo esté cargado ejecute la función o vinculamos el js antes del cierre del body
window.onload = function(){

    //SELECTORES
    //por ID -> selector único
    var info = document.getElementById("info");
    //por TAG -> genera un array con todos los elementos de esa etiqueta
    var enlaces = document.getElementsByTagName("a");
    //por CLASS -> genera un array con todos los elementos de esa clase
    var destacados = document.getElementsByClassName("dest");
    
    //CONTAR E INSERTAR INFO
    info.innerHTML = "Nº de enlaces:"+enlaces.length+"<br>";
    info.innerHTML += "Nº de elem.destacados:"+destacados.length+"<br>";
    
    //OBJ.ATTR
    //Mostrar el href del primer enlace
    info.innerHTML += enlaces[0].href+"<br>";
    //Mostrar el href del último enlace
    info.innerHTML += enlaces[enlaces.length-1].href+"<br>";
    
    //Listado de links
    info.innerHTML += "<ul id='lista'></ul>";
    var lista=document.getElementById('lista');
    for(var i=0; i<enlaces.length;i++){
        lista.innerHTML += "<li>"+enlaces[i]+"</li>" 
    }
    
    //Contar número de elementos que van al index
    var contadorIndex=0;
    for(var i=0 ; i<enlaces.length; i++){
        if(enlaces[i].href.match("index")=="index"){
            contadorIndex++;
        }
    }
    info.innerHTML += "Nº de enlaces que van a info:"+contadorIndex;
    
    
    
    
    
}
