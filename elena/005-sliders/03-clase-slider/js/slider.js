
var pos_left=0; //content_img.style.left
var pos_bullet=0; //bullet.style.background

//////////////////////////////////////////////////////////////////////////////////
//SELECTORES
//////////////////////////////////////////////////////////////////////////////////
//SLIDER
var slider=document.getElementById("slider");
var content_divs=document.getElementById("content_divs");
//BULLETS
var content_bullets=document.getElementById("content_bullets");


//////////////////////////////////////////////////////////////////////////////////
///////////INSERTAR FOTOS -> div class ="foto"
//////////////////////////////////////////////////////////////////////////////////
function foto(valorSrc,valorAlt, valorTitulo){
    this.rutaImagen = valorSrc;
    this.descripcion = valorAlt;
    this.titulo = valorTitulo;
}

var f1=new foto("img/foto1.jpg","Foto bonita de chica con cámara","Fotografía");
var f2=new foto("img/foto2.jpg","Foto de modelo","Foto estudio");
var f3=new foto("img/foto3.jpg","Paisaje melancólico","Bosque");

var listaFotos= new Array(f1,f2,f3);

for(var i=0; i<listaFotos.length; i++){
    content_divs.innerHTML += "<div class='foto' style='background:url("+listaFotos[i].rutaImagen+") no-repeat center; background-size:cover'><h2>"+listaFotos[i].titulo+"</h2></div>";
}
var divFoto=content_divs.getElementsByClassName("foto");


//////////////////////////////////////////////////////////////////////////////////
//RECALCULAR TAMAÑOS -> para hacer un slider que funcione independientemente del nºde fotos
////////////////////////////////////////////////////////////////////////////////////

//recalculamos el tamaño del contenedor para que quepan las img
content_divs.style.width = divFoto.length*100+"%";
//recalculamos el tamaño del contenedor para que quepan las bolitas en f() del num de img
content_bullets.style.width = (divFoto.length*20)+((divFoto.length-1)*5)+"px";

//recalculamos el tamaño de las img y ponemos tantas bolitas cómo img tengamos
for(var i=0; i<divFoto.length; i++){
    divFoto[i].style.width = (100/divFoto.length)+"%";
    content_bullets.innerHTML += "<div class='bullet' onclick='mostrarFoto("+i+")'></div>";
}
var bullets=content_bullets.getElementsByClassName("bullet");

//////////////////////////////////////////////////////////////////////////////////
//CONTROLADOR
////////////////////////////////////////////////////////////////////////////////////

//Intervalo que se ejecuta nada más entrar al documento
var animacionSlider = setInterval(moverContentDiv,2000);

//FUNCIÓN QUE MUEVE EL CONTENEDOR
//////////////////////////////////////////////////////////////////////////////////////////////////////
function moverContentDiv(){
    //Mov contenedor de fotos
    pos_left+=100; 
    if(pos_left == divFoto.length*100){
        pos_left=0;
    }
    content_divs.style.left="-"+pos_left+"%"; 
    
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
    moverContentDiv();
}

//EVENTOS
////////////////////////////////////////////////////////////////////////////////////////////////////////
///Paramos el mov de slider al pasar por ecnima, para poder así pinchar los bullets
slider.onmouseover = function(){
    clearInterval(animacionSlider);
}
slider.onmouseout = function(){
    animacionSlider = setInterval(moverContentDiv,2000);
}







///////////////////////////////////////////////////

var mosaico = document.getElementById("mosaico");
for(var i=0; i<listaFotos.length; i++){
    mosaico.innerHTML += "<div style='float:left;width:50px;height:50px;background:url("+listaFotos[i].rutaImagen+") no-repeat center; background-size:cover'></div>";
}
















