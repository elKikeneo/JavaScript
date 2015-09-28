
//Llamamos a la función nada más entrar al documento y cuándo el body se redimensiona
getMedidas();


function getMedidas(){
    document.getElementById("width").innerHTML = window.innerWidth;
    document.getElementById("height").innerHTML = window.innerHeight;
    
    if(window.innerWidth>600){
        document.getElementsByTagName("main")[0].style.background="#666";
        //document.getElementsByTagName("link")[0].href="style.css";
    }else{
        document.getElementsByTagName("main")[0].style.background="#222";
        //document.getElementsByTagName("link")[0].href="styleMovil.css";
    }
    
}

