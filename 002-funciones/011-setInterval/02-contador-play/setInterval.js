var h1 = document.getElementsByTagName("h1")[0];
var botones = document.getElementsByTagName("button");
var contador = 0;
var intContador;

//PLAY
botones[0].onclick = function(){
    intContador = setInterval(function(){
        h1.innerHTML = contador++;
    },1000);
    botones[0].style.display="none";
    botones[1].style.display="inline-block";
}

//PAUSE
botones[1].onclick = function(){
    clearInterval(intContador);
    botones[0].style.display="inline-block";
    botones[1].style.display="none";
}


//STOP
botones[2].onclick = function(){
    clearInterval(intContador);
    contador=0;
    h1.innerHTML = contador;
    botones[0].style.display="inline-block";
    botones[1].style.display="none";
}