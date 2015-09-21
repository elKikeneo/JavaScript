
//// Switch = Instrucciones de control
//=== el switch hace comparativas del valor que contiene la variable. Compara caracter y tipo de dato
//#########################################

//var posDia=prompt("Di un día del 0-6"); //prompt me devuelve el valor ingresado por el user en formato STRING, por tanto en el switch debería hacer comparativas con 'STRINGS'

var posDia=new Date().getDay(); //el objeto Date me devuelve la posición del día [0,6] en formato NUMBER, por tanto en el switch debería hacer comparativas con NUMBER

console.log(typeof (posDia));

//var declarada que toma un valor u otro dependiendo del caso del switch
var nameDia;

switch(posDia){
    case 0: 
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
        nameDia="Otro día que no tenemos";
}
document.write("<p>"+nameDia+"</p>");

//////////////////////////////
//if(posDia==0){
//    nameDia="Domingo";
//}else if(posDia==1){
//    nameDia="Lunes";
//}
//document.write("<p>"+nameDia+"</p>");   


/////////////////////////////////////////////////////////////////////////////////////////////

var animal = prompt('¿Qué animal tienes?');
animal = animal.toLowerCase();
var edadAnimal = prompt('¿Qué edad tiene?');
var mensaje;

switch(animal){
    case "perro":
        if(edadAnimal==='1' || edadAnimal==2){
            mensaje="Es un cachorro";
        }else if(edadAnimal>2 && edadAnimal<10){
            mensaje="Perro Adulto";
        }else if(edadAnimal>=10 && edadAnimal<=14){
            mensaje="Perro mayorcete";
        }else{
            mensaje="Edad inviable para el perro";
        }
        break;
    case "caballo":
        if(edadAnimal>=1 && edadAnimal<=10){
            mensaje="Caballo joven";
        }else if(edadAnimal>=11 && edadAnimal<=20){
            mensaje ="Caballo Adulto";
        }else{
            mensaje="Edad inviable para el Caballo";
        }
        break;
    case "tortuga":
        if(edadAnimal>=1 && edadAnimal<101){
            mensaje="Tortuga normalita";
        }else if(edadAnimal>=101){
            mensaje="Tortuga centenaria";
        }else{
            mensaje="Tortuga no nacida";
        }
        break;
    default:
        mensaje="No se que es el animal "+animal+" y que corresponde con su edad de "+edadAnimal;
}


document.write("<p>"+mensaje+"</p>");












