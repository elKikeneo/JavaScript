
//Definir var
var input = document.getElementById("producto");
var lista = document.getElementById("lista");
var btnBorrar = document.getElementsByClassName("remove")[0];

function addProducto(){
    //Funcion trim() = elimina espacio del principio y final de la cadena de texto
    if(input.value.trim() != ""){
        lista.innerHTML +="<li>"+input.value+"</li>";
        btnBorrar.style.display="inline-block";
        input.value="";
        input.focus();
    }else{
        alert("Debes introducir producto");
    }
}

function borrar(){
    lista.innerHTML = "";
    btnBorrar.style.display="none";
}



