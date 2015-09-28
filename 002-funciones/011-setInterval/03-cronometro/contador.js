var hora=document.getElementById("hora");
var min=document.getElementById("min");
var sg=document.getElementById("sg");

var contadorSg=0;
var contadorMin=0;
var contadorHora=0;

setInterval(function(){
    //control del tiempo
    if(contadorSg==60){
        contadorSg=0;
        min.innerHTML = contadorMin++;
        if(contadorMin==60){
            contadorMin=0;
            hora.innerHTML = contadorHora++;
        }
    }
    
    sg.innerHTML = contadorSg++;
    
},1000);