
var h1 = document.getElementsByTagName("h1")[0];
var botones = document.getElementsByTagName("button");
var contador=0;
var intContador;

// setInterval(nameFuncion, milisegundos) = función que llama a otra función INFINITAS veces cada X milisegundos, hasta que yo no diga que se detenga con la función clearInterval(nombre del Intervalo a parar)
//PLAY
botones[0].onclick = function(){
    intContador = setInterval(function(){
        h1.innerHTML = contador++;
    },1000);
    botones[0].style.display="none"; //ocultamos play
    botones[1].style.display="inline-block"; //mostramos pause
}

//PAUSE
botones[1].onclick = function(){
    clearInterval(intContador);
    botones[0].style.display="inline-block"; //mostramos play
    botones[1].style.display="none"; //ocultamos pause
}

//STOP
botones[2].onclick = function(){
    clearInterval(intContador);
    //Reseteamos el valor del contador para que se inicie
    contador=0;
    h1.innerHTML = contador;
    botones[0].style.display="inline-block"; //mostramos play
    botones[1].style.display="none"; //ocultamos pause
}