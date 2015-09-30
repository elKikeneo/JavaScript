
var btn_menu=document.getElementById("btn_menu");
var mascara=document.getElementById("mascara");
var menu=document.getElementById("menu");

btn_menu.onclick = function(){
    menu.style.left="0";
    mascara.style.display="block";
}

mascara.onclick=function(){
    menu.style.left="-151px";
    mascara.style.display="none"; 
}