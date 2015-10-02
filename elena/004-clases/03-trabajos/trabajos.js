
function trabajo(valueTitulo, valueImg, valueCat){
    this.titulo=valueTitulo;
    this.rutaImagen=valueImg;
    this.categoria=valueCat;
}

var trabajo1=new trabajo("60","img/graphic3.jpg","graphic");
var trabajo2=new trabajo("Tipografía","img/graphic1.jpg","graphic");
var trabajo3=new trabajo("Cartel","img/graphic2.jpg","graphic");
var trabajo4=new trabajo("Web naturaleza","img/web4.jpg","web");
var trabajo5=new trabajo("Web Estética","img/web3.jpg","web");
var trabajo6=new trabajo("Web Ciudad","img/web5.jpg","web");
var trabajo7=new trabajo("Web Agua","img/web2.jpg","web");

var listTrabajos = new Array(trabajo1,trabajo2,trabajo3,trabajo4,trabajo5,trabajo6,trabajo7);

var div = document.getElementById("trabajos");

//Inicialmente mostramos los trabajos pertenciente a la cat web
mostrar("web");

//recogemos como parámetro de entrada el nombre de la categoria que viene del evento onclik del html para poder diferenciar que trabajos mostrar
function mostrar(cat){ 
    
    if(cat=="web"){
        document.getElementsByClassName("btn")[0].className +=" active";
        document.getElementsByClassName("btn")[1].className = "btn";
    }else{
        document.getElementsByClassName("btn")[0].className = "btn";
        document.getElementsByClassName("btn")[1].className +=" active";
    }
    
    div.innerHTML="";    
    for(var i=0; i<listTrabajos.length;i++){
        if( listTrabajos[i].categoria == cat ){
            div.innerHTML += "<div class='trabajo'><img src='"+listTrabajos[i].rutaImagen+"' /><span>"+listTrabajos[i].titulo+"</span></div>";
        }
    }
    
}