
//Definición de las variables globales
var inputProducto=document.getElementById("producto");
var inputPrecio=document.getElementById("precio");
var btnBorrar=document.getElementsByClassName("remove")[0];
var lista=document.getElementById("lista");
var total=document.getElementById("total");
var suma=0;

function addProducto(){
    //1º Obtener el valor de los inputs y convertirlos
    //////////////////////////////////////////////////////////////////////////////////////////
    //console.log(typeof (inputProducto.value));
    //console.log(typeof (inputPrecio.value));
    //Hemos comprobado que incluso teniedno el input de type="number" nos devuelve el dato en formato de string, podemos decir que en js no es necesario indicar el type de los inputs.
    var txt_prod=inputProducto.value;
    var precio_prod= Number(inputPrecio.value);
    
    //2º-preguntar si vienen datos
    if(txt_prod.trim().length == 0){
        alert("Debes introducir producto");
        inputProducto.focus();
    }else{
        if(precio_prod==0 ){
            alert("Debes introducir precio");
            inputPrecio.focus();
        }else if( isNaN(precio_prod) ){
            alert("Debes introducir un valor numérico");
            inputPrecio.value="";
            inputPrecio.focus();
        }else{
            //3ºuna vez comprobados los datos, añadimos los li
            lista.innerHTML += "<li onclick=borrarse(this)>"+txt_prod+" | <span>"+precio_prod+"</span> €</li>";
            //4ºcalcular total
            suma += precio_prod;
            total.innerHTML = suma;
            //5ºlimpiar inputs
            inputPrecio.value="";
            inputProducto.value="";
            inputProducto.focus();
            //6º mostrar btn borrar
            btnBorrar.style.display = "inline-block";
            
        }
    }
    
    
}

function borrar(){
    lista.innerHTML="";
    btnBorrar.style.display="none";
    suma=0;
    total.innerHTML = suma;
    inputProducto.focus();
}

function borrarse(elLi){
    //console.log(li);
    lista.removeChild(elLi);
    
    //num del li (this)
    var numprecio = elLi.getElementsByTagName("span")[0].innerHTML;
    suma -= numprecio;
    total.innerHTML = suma;
    
    //ocultamos el botón de borrar cuándo no queden li
    if(total.innerHTML == 0){
        btnBorrar.style.display="none";
    }
    
}