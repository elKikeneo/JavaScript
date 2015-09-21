

///// if/else_____________________________
var edad=24;
if(edad>=18){
    document.write("<p>Tienes "+edad+" años, por lo que <span style='color:green'>SI</span> puedes pasar</p>");
}else{
    document.write("<p>Tienes "+edad+" años, por lo que <span style='color:red'>NO</span> puedes pasar</p>");
}

///// if/else_____________________________
var edad=24;
if(edad>=18){
    document.write("<p>Tienes "+edad+" años, por lo que <span class='si'>SI</span> puedes pasar</p>");
}else{
    document.write("<p>Tienes "+edad+" años, por lo que <span class='no'>NO</span> puedes pasar</p>");
}

///// if/else_____________________________
var edad=14;
var css;

if(edad>=18){
   css="si";
}else{
   css="no";
}
document.write("<p>Tienes "+edad+" años, por lo que <span class='"+css+"'>"+css+"</span> puedes pasar</p>");


//////// if / else______________________________
var isPlaying=true;
if(isPlaying){
    document.write("Pause"+"<br>");
}else{
    document.write("Play"+"<br>");
}

////// if / else if / else if / .... / else_______________
//var ciudad=prompt("¿De dónde eres?","Indica tu ciudad natal");
//ciudad = ciudad.toLowerCase();
//
//if( (ciudad=="zaragoza") || (ciudad=="huesca") || (ciudad=="teruel") ){
//    document.write("Eres maño");
//}else if(ciudad=="madrid"){
//    document.write("Eres madrileño");
//}else if(ciudad=="andalucía"){
//    document.write("Eres andaluza");
//}else{
//    document.write("Eres ciudadano del mundo");
//}


//Ejercicio de validación de DNI -> el cálculo de la letra del DNI es un proceso matemático sencillo que se basa en obtener el resto de la división del número del DNI y el número 23. A partir del resto se obtiene la posición de la letra que le corresponde dentro del listado de datos (Array)
var letras = new Array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");

//var numDni = prompt("¿Cuál es tu DNI?","Sin letra");
//var letra = prompt("¿Indica tu letra del DNI?");
//letra = letra.toUpperCase();
//
//if( numDni.length != 8 ){
//   document.write("Tu número de DNI "+numDni+" no es correcto, debes introducir 8 caracteres"); 
//}else{
//    
//    //El número tiene 8 digitos-> vamos a comprobar si el numero corresponde con la letra
//    if( letras[numDni%23] == letra ){
//        document.write("Tu número "+numDni+letra+" es correcto");
//    }else{
//        document.write("Tu número "+numDni+letra+" es incorrecto");
//    }
//    
//}


////////////////////////////////////Ejercicio
var conWeb=prompt("¿Sabes de web?","Responde si o no");
conWeb=conWeb.toLowerCase();

if( conWeb=="si" ){
    
    var cat=prompt("¿Eres junior o senior?");
    cat = cat.toLowerCase();
    if(cat=="junior"){
        document.write("Te damos prácticas");
    }else if(cat=="senior"){
        document.write("Te damos empleo");
    }else{
        document.write("Especifica junior o senior");
    }
    
}else if(conWeb=="no"){
    
    var conOtros=prompt("¿Qué conocimientos tienes?");
    conOtros = conOtros.toLowerCase();
    if(conOtros=="gráfico"){
        document.write("Eres diseñador");
    }else if(conOtros=="marketing"){
        document.write("Eres comercial");
    }else{
        document.write("Vemos dónde te ponemos");
    }
    
}else{
    document.write("Debes responder si o no");
}













