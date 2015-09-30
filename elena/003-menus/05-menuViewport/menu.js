
var btn_menu=document.getElementById("btn_menu");
var mascara=document.getElementById("mascara");
var viewport=document.getElementById("viewport");

//botón->Abre y la Máscara cierra

//btn_menu.onclick = function(){
//    viewport.style.left="150px";
//    mascara.style.display="block";
//}
//
//mascara.onclick=function(){
//    viewport.style.left="0px";
//    mascara.style.display="none";
//}


//botón -> abre y cierra
var isShowing=false;
btn_menu.onclick = function(){
    if(isShowing){
       viewport.style.left="0px";
       isShowing=false; 
    }else{
       viewport.style.left="150px";
       isShowing=true;
    }
}