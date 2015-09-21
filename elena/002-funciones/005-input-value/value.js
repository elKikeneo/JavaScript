
var input = document.getElementById("producto");
var lista = document.getElementById("lista");
var btnBorrar = document.getElementsByClassName("remove")[0];

function addProducto(){
    //Función trim() = elimina espacios del principo y final de la cadena de texto
    if( input.value.trim()=="" || input.value.trim().length==0 ){
        alert("Debes introducir producto");
    }else{
        lista.innerHTML += "<li>"+input.value+"</li>";
        btnBorrar.style.display="inline-block";
        input.value="";
        input.focus();
    }
}

function borrar(){
    lista.innerHTML = "";
    btnBorrar.style.display="none";
}

