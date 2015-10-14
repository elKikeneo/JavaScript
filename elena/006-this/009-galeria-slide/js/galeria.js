
function recalc(){
    window.location="index.html";
}

////////////////Selectores
var galeria=document.getElementById("galeria");
var view=document.getElementById("view");
var content_thumb=document.getElementById("thumbs");
var listadoFotos= new Array("foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg","foto07.jpg","foto02.jpg","foto08.jpg","foto09.jpg");
var num_tirada=5;

for(var i=0; i<listadoFotos.length;i++){
    content_thumb.innerHTML += "<div style='background:url(img/"+listadoFotos[i]+") no-repeat center; background-size:cover' onclick='mostrarDetalle("+i+")'></div>";
}

////////////////Recalcular
//size galeria
galeria.style.width = (window.innerWidth-200)+"px";
var tamano = galeria.style.width;
var sizeGaleria=tamano.replace("px","");

//size thumbs
var listaThumbs= content_thumb.getElementsByTagName("div");
for(var i=0; i<listaThumbs.length;i++){
    listaThumbs[i].style.width = (sizeGaleria/num_tirada)+"px";
}

//size content thumbnails
content_thumb.style.width = (sizeGaleria/num_tirada)*listaThumbs.length+"px";


///////////////////////////////////////////Carga
mostrarDetalle(0);
function mostrarDetalle(pos){
    view.style.background = "url(img/"+listadoFotos[pos]+") no-repeat center";
    view.style.backgroundSize="cover";
}

///////////////////////////////////////////Flechas
var pos_left=0;
var faltaPorVer = (sizeGaleria/num_tirada)*(listaThumbs.length-num_tirada);

function next(){
    if(pos_left<faltaPorVer){
        pos_left += sizeGaleria/num_tirada; //desplazo lo que mide 1foto
        content_thumb.style.left = "-"+pos_left+"px";
    }
}
function prev(){
     if(pos_left!=0){
        pos_left -= sizeGaleria/num_tirada; //desplazo lo que mide 1foto
        content_thumb.style.left = "-"+pos_left+"px";
    }
}