
// if / else =====================================================
var edad = 24;

if (edad>18){
    document.write("<p>Tienes "+edad+" años, por lo que <span class='verde'>SÍ</span> puedes pasar</p>");
} else {
    document.write("<p>Tienes "+edad+" años, por lo que <span class='rojo'>NO</span> puedes pasar</p>");
}

//HAY MÁS FORMAS DE HACER LO MISMO... MIRAR LOS EJEMPLOS DE ELENA
 

// if / else ===============

var isPlaying=true;
 
if (isPlaying){
    document.write("<p>Pausa</p>");
} else {
    document.write("<p>Play</p>");
}

var ciudadano="Madrid";

if (ciudadano == "Madrid") {
    document.write("<p>Bienvenido Madrileño!</p>");
} else if (ciudadano == "Barcelona") {
    document.write("<p>Bienvenido Catalán!</p>");
} else if (ciudadano == "Zaragoza") {
    document.write("<p>Bienvenido Aragonés!</p>");
} else if (ciudadano == "Vigo") {
    document.write("<p>Bienvenido Gallego!</p>");
} else {
    document.write("<p>Bienvenido Cidadano del mundo!</p>");
}

//EJERCICIO DE VALIDACIÓN DEL DNI -> el calculo de la letra del DNI es un proceso matemático sencillo que se basa en obtener el resto de la división del número del DNI y el número 23. A partir del resto se obtiene la posición de la letra que corresponde dentro del listado de datos (Array).

var letras = new Array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","W","H","L","C","K","E");

//var numDni=prompt("¿Cuál es tu DNI?","Sin letra");
//var letra=prompt("Indica la letra del DNI");
//letra=letra.toUpperCase();



// terminar ejercicio...


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var resp=prompt("¿Sabes de web?");

if (resp=="si"){
    var conoc=prompt("¿Eres junior o senior?");
    if (conoc=="junior"){
        document.write("<p>Te ofrecemos prácticas.</p>");
    } else if(conoc=="senior"){
        document.write("<p>Te ofrecemos trabajo.</p>");
    } else{
        document.write("<p>Debes especificar si eres junior o senior.</p>");
    }    
} else {
    var otra=prompt("¿Qué conocimiento tienes?");
    if (otra=="gráfico"){
        document.write("<p>Eres diseñador gráfico.</p>");
    } else if (otra=="marketing"){
        document.write("<p>Eres experto en marketing.</p>");
    } else{
        document.write("<p>Eres experto en "+otra+".</p>");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        
