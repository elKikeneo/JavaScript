//SWITCH -> Instrucciones de control
 
//var posDia=prompt("Escribe un día del 0-6");
var posDia=new Date().getDay();
console.log(typeof(posDia));//Me dice en  el inspector de elemento (console) el tipo de dato que es (string, number,...)
var nameDia;
 
//var declarada que toma un valor u otro dependiendo del caso del switch

switch (posDia){
    case 0: //lee el tipo de caracter que es...
        nameDia="Domingo";
        break;
    case 1:
        nameDia="Lunes";
        break;
    case 2:
        nameDia="Martes";
        break;
    case 3:
        nameDia="Miércoles";
        break;
    case 4:
        nameDia="Jueves";
        break;
    case 5:
        nameDia="Viernes";
        break;
    case 6:
        nameDia="Sábado";
        break;
    default:
        nameDia="No existe la posición del día";
}

document.write("<p>"+nameDia+"</p>");


//Ejercicios ========================================================

var name=prompt("¿Qué animal tienes?");
name=name.toLowerCase();
var edad=prompt("¿Qué edad tiene?");
var result;

switch(name){
    case "perro":
        if (edad==1 && edad<=2){
            result="tienes un cachorro";
        }else if (edad>2 && edad<10){
            result="tienes un perro adulto";
        }else{
            result="tienes un perro viejo";
        }
        break;
    case "caballo":
        if (edad==1 && edad<=10){
            result="tienes un caballo joven";
        }else{
            result="tienes un caballo adulto";
        }
        break;
    case "tortuga":
        if (edad==1 && edad<=100){
            result="tienes una tortuga joven";
        }else{
            result="tienes una tortuga centenaria";
        }
        break;
    default:
        result="No sé qué es el animal "+name+" y qué corresponde con su edad de "+edad+".";
}
document.write("<p>"+result+"</p>");