var h1 = document.getElementsByTagName("h1")[0];
var contador = 0;

//setInterval(nameFunction, milisegundos)= función que llama a otra función INFINITAS veces cada X milisegundos hasta que yo no diga que se detenga con la función clearInterval(nombre del intervalo a parar)

setInterval(contar,1000);

function contar(){
    h1.innerHTML = contador++;
}