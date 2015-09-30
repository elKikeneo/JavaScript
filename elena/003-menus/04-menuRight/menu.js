
var btn_menu=document.getElementById("btn_menu");
var mascara=document.getElementById("mascara");
var menu=document.getElementById("menu");

btn_menu.onclick = function(){
    menu.style.right="0";
    mascara.style.display="block";
    btn_menu.style.background="url(icon-nav-close.png) no-repeat center";
    btn_menu.style.backgroundSize="20px";
}

mascara.onclick=function(){
    menu.style.right="-151px";
    mascara.style.display="none"; 
    btn_menu.style.background="url(icon-menu.png) no-repeat center";
    btn_menu.style.backgroundSize="20px";
}
