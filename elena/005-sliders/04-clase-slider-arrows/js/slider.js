
var pos_left=0; //content_divs.style.left

//////////////////////////////////////////////////////////////////////////////////
//SELECTORES
//////////////////////////////////////////////////////////////////////////////////
//SLIDER
var slider=document.getElementById("slider");
var content_divs=document.getElementById("content_divs");


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
//recalculamos el tamaño de las img y ponemos tantas bolitas cómo img tengamos
for(var i=0; i<divFoto.length; i++){
    divFoto[i].style.width = (100/divFoto.length)+"%";
}

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
}



function pasarDir(dir){
    if(dir=='prev'){
        if(pos_left==0){
            pos_left += (divFoto.length*100)-100;
        }else{
            pos_left -= (divFoto.length*100)-100;
        }        
    }
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


















