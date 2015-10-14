
//Selectores
var menuFotos=document.getElementById("menuFotos"); //ul -> menu
var sectionFotos=document.getElementById("fotos"); //section -> galeria fotos
var titularGaleria = document.getElementsByTagName("main")[0].getElementsByTagName("h2")[0].getElementsByTagName("span")[0]; //span -> titular

var mascara = document.getElementById("mascara");
var contenedorFoto= document.getElementById("contenedorFoto");

var widthWindow;
var heightWindow;

function Foto(id,src,titulo,cat){
    this.id=id;
    this.src=src;
    this.titulo=titulo;
    this.cat=cat;
}

var f1= new Foto(1,"img/caja3img1.jpg","Foto 1","animales");
var f2= new Foto(2,"img/caja3img2.jpg","Foto 2","animales");
var f3= new Foto(3,"img/caja3img3.jpg","Foto 3","animales");
var f4= new Foto(4,"img/caja3img4.jpg","Foto 4","paisajes");
var f5= new Foto(5,"img/caja3img3.jpg","Foto 5","personas");
var f6= new Foto(6,"img/caja3img4.jpg","Foto 6","personas");

var listadFotos = new Array(f1,f2,f3,f4,f5,f6);
var catMenu=new Array();

//MENU
////////////////////////////////////////////
for(var i=0; i<listadFotos.length;i++){
    //recorremos todas las noticias y vemos cuales son sus categorías para crear el menú con estas
    if(catMenu.indexOf(listadFotos[i].cat) == -1){
        catMenu.push(listadFotos[i].cat);
    }
}

//ordenar array de menu
catMenu.sort();
catMenu.unshift("todas");
for(var i=0; i<catMenu.length; i++){
    menuFotos.innerHTML += "<li onclick=listarFotos('"+catMenu[i]+"')>"+catMenu[i]+"</li>";
}

var elemMenu=menuFotos.getElementsByTagName("li");


//FOTOS
////////////////////////////////////////////
listarFotos("todas");

function listarFotos(cat){
    
    titularGaleria.innerHTML = cat;
    
    sectionFotos.innerHTML = "";
    for(var i=0; i<listadFotos.length; i++){
        if(listadFotos[i].cat == cat || cat=="todas"){
            sectionFotos.innerHTML += "<div onclick='verFoto(this)' class='foto' style='background:url("+listadFotos[i].src+") no-repeat center; background-size:cover' title='"+listadFotos[i].titulo+"'></div>";
            
        }
    }
    
    recalcularTamaños();
}



function recalcularTamaños(){ //mantener las fotos cuadradas
    var divsFoto=sectionFotos.getElementsByClassName('foto');
    var anchuraDelPrimero=divsFoto[0].offsetWidth;
    
    for(var i=0; i<divsFoto.length; i++){
        divsFoto[i].style.height =  anchuraDelPrimero;
    }
}


function verFoto(divFoto){
    mascara.style.display="block";
    
    contenedorFoto.innerHTML = "<div class='fotoView'><div style='background:"+divFoto.style.background+"'></div><p>"+divFoto.title+"</p></div>";
    
}

function cerrar(){
    mascara.style.display="none";
    contenedorFoto.innerHTML ="";
}
