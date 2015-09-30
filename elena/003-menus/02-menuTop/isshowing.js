

var menu=document.getElementById("menu");
var boton=document.getElementById("btn_menu");


/*Mostrar u ocultar menu */
var isShowing=false;

boton.onclick=function(){
    if(isShowing){
       menu.style.height="0";
       isShowing=false; 
    }else{
       menu.style.height="180px";
       isShowing=true;
    }
}

/*Dejar activo el elemento de menu*/
var enlaces=document.getElementById("menu").getElementsByTagName("a");

for(var i=0;i<enlaces.length;i++){
    if(enlaces[i].href == window.location.href){
        enlaces[i].className="activo";
    }
}
