
var pos_left=0; //content_img.style.left
var pos_bullet=0; //bullet.style.background


//////////////////////////////////////////////////////////////////////////////////
//SELECTORES
//////////////////////////////////////////////////////////////////////////////////
//SLIDER
var slider=document.getElementById("slider");
var content_img=document.getElementById("content_img");
var imagenes=content_img.getElementsByTagName("img");
//BULLETS
var content_bullets=document.getElementById("content_bullets");



//////////////////////////////////////////////////////////////////////////////////
//RECALCULAR TAMAÑOS -> para hacer un slider que funcione independientemente del nºde fotos
////////////////////////////////////////////////////////////////////////////////////

//recalculamos el tamaño del contenedor para que quepan las img
content_img.style.width = imagenes.length*100+"%";
//recalculamos el tamaño del contenedor para que quepan las bolitas en f() del num de img
content_bullets.style.width = (imagenes.length*20)+((imagenes.length-1)*5)+"px";

//recalculamos el tamaño de las img y ponemos tantas bolitas cómo img tengamos
for(var i=0; i<imagenes.length; i++){
    imagenes[i].style.width = (100/imagenes.length)+"%";
    content_bullets.innerHTML += "<div class='bullet' onclick='mostrarFoto("+i+")'></div>";
}
var bullets=content_bullets.getElementsByClassName("bullet");

//////////////////////////////////////////////////////////////////////////////////
//CONTROLADOR
////////////////////////////////////////////////////////////////////////////////////

//Intervalo que se ejecuta nada más entrar al documento
var animacionSlider = setInterval(moverContentImg,2000);

//FUNCIÓN QUE MUEVE EL CONTENEDOR
//////////////////////////////////////////////////////////////////////////////////////////////////////
function moverContentImg(){
    //Mov contenedor de fotos
    pos_left+=100; 
    if(pos_left == imagenes.length*100){
        pos_left=0;
    }
    content_img.style.left="-"+pos_left+"%"; 
    
    //Color bullet
    pos_bullet++;
    if(pos_bullet==bullets.length){
        pos_bullet=0;
    }
    for(var i=0; i<bullets.length; i++){
        if(pos_bullet==i){
            bullets[i].style.background="#6c7a89";
        }else{
            bullets[i].style.background="#fff";
        }
    }
    
}


//FUNCIÓN BULLETS
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Función activada al pinchar los bullets, recalculamos la pos_left y volvemos a llamar a la función encargada de aplicarle el estilo al content_img
function mostrarFoto(pos){
    pos_left = (pos*100)-100; //restamos 100 para compensar el ++ que sufre al llamar a la f() moverConte...
    pos_bullet = pos-1; //restamos 1 para compensar el ++ que sufre al llamar a la f() moverConte...
    moverContentImg();
}

//EVENTOS
////////////////////////////////////////////////////////////////////////////////////////////////////////
///Paramos el mov de slider al pasar por ecnima, para poder así pinchar los bullets
slider.onmouseover = function(){
    clearInterval(animacionSlider);
}
slider.onmouseout = function(){
    animacionSlider = setInterval(moverContentImg,2000);
}