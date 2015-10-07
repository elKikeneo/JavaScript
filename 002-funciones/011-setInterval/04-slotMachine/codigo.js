var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var mensaje = document.getElementsByTagName("h3")[0];
var boton = document.getElementById("boton");

//IMG FRUTAS
//SLOT 1
var imagenActualSlot1 = Math.floor(Math.random()*6); //valor aleatorio de posición que me sirve para cargar una imagen en el src (0.png, 1.png...)
slot1.src = "frutas/"+imagenActualSlot1+".png";
//SLOT 2
var imagenActualSlot2 = Math.floor(Math.random()*6);
slot2.src = "frutas/"+imagenActualSlot2+".png";
//SLOT 3
var imagenActualSlot3 = Math.floor(Math.random()*6);
slot3.src = "frutas/"+imagenActualSlot3+".png";

//TIEMPO O VUELTAS QUE DA CADA SLOT______________________
var timeSlot1 = 0;
var timeSlot2 = 0;
var timeSlot3 = 0;

//function();
//boton.onclick = funtion(){};
//boton.onclick = nameFunction;
//boton.addEventListener("name del evento sin prefijo on", función a la que llama );
boton.addEventListener("click",iniciar);

var intervalo1;
var intervalo2;
var intervalo3;

function iniciar(){
    intervalo1 = setInterval(bucleSlot1,200);
    intervalo2 = setInterval(bucleSlot2,200);
    intervalo3 = setInterval(bucleSlot3,200);
    
    mensaje.innerHTML = "A jugar!";
    //QUITAMOS EL EVENTO AL BOTÓN DURANTE LA PARTIDA
    boton.removeEventListener("click",iniciar);
    boton.innerHTML = "jugando...";
}

function bucleSlot1(){
    timeSlot1++;
    imagenActualSlot1++
    //Determinamos frutas
    if(imagenActualSlot1>5){
        imagenActualSlot1 = 0;
    }
    slot1.src = "frutas/"+imagenActualSlot1+".png";
    
    //determinamos número de vueltas-> tiempo que tarda en parar la función
    if(timeSlot1>10){
        timeSlot1 = 0;
        clearInterval(intervalo1);
    }
}
function bucleSlot2(){
    timeSlot2++;
    imagenActualSlot2++
    //Determinamos frutas
    if(imagenActualSlot2>5){
        imagenActualSlot2 = 0;
    }
    slot2.src = "frutas/"+imagenActualSlot2+".png";
    
    //determinamos número de vueltas-> tiempo que tarda en parar la función
    if(timeSlot2>12){
        timeSlot2 = 0;
        clearInterval(intervalo2);
    }
}
function bucleSlot3(){
    timeSlot3++;
    imagenActualSlot3++
    //Determinamos frutas
    if(imagenActualSlot3>5){
        imagenActualSlot3 = 0;
    }
    slot3.src = "frutas/"+imagenActualSlot3+".png";
    
    //determinamos número de vueltas-> tiempo que tarda en parar la función
    if(timeSlot3>14){
        timeSlot3 = 0;
        clearInterval(intervalo3);
        //Cuándo termine el slot3 quiere decir que ha terminado el juego 
        resolver();
    }
}
//Función llamada cuándo termina el slot3
function resolver(){
    if(imagenActualSlot1==imagenActualSlot2 && imagenActualSlot1==imagenActualSlot3){
        mensaje.innerHTML = "Congratulations!!!";
    }else{
        mensaje.innerHTML = "Try again?";
    }
    
    boton.innerHTML = "Start";
    boton.addEventListener("click",iniciar);
}


