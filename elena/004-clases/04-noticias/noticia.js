
//SELECTORES
var menuNoticias = document.getElementById("menuNoticias");
var sectionNoticias = document.getElementById("noticias");
var fechaMod;

//NOTICIA
function Noticia(valorId,valorSrcImagen,valorTitulo,valorTexto,valorCat,valorFecha){
    this.id=valorId;
    this.src=valorSrcImagen;
    this.titulo=valorTitulo;
    this.texto=valorTexto;
    this.cat=valorCat;
    this.fecha=valorFecha;
}

var n1 = new Noticia(1,"img/pp.jpg","El PP vasco se aproxima a Bildu sin consultarlo a Génova","Arantza Quiroga rompe el discurso del Partido Popular sobre la izquierda 'abertzale' y libera a EH Bildu de condenar a ETA. Los 'abertzales' aplauden el cambio en el lenguaje y se abren al acuerdo.","política","2015-10-07");
var n2 = new Noticia(2,"img/img1.jpg","Bankia benefició con contratos exprés al comisionista de Rato","Aprobó en 2011 una inusual adjudicación exprés a la empresa Publicis para la que trabajaba Alberto Portuondo. Éste era asesor de la adjudicación en Bankia y presunto comisionista de Rato.","economía","2015-10-06");
var n3 = new Noticia(3,"img/mariocasas.jpg","Mario Casas en 'Palmeras en la nieve'","Esta superproducción dirigida por Fernando González-Molina, ha sido rodada a lo largo de 14 semanas, empleando a más de 70 actores, más de 250 técnicos y más de 2.200 extras. EL MUNDO estrena el tráiler de la película.","cultura","2015-09-25");
var n4 = new Noticia(4,"img/mas.jpg","La rendición de Mas","Es probable que se designe un presidente nominal de la república catalana. Mas sería el jefe del Ejecutivo para preservar la legalidad del Gobierno.","política","2015-10-01");
var n5 = new Noticia(5,"img/serif.jpg","El sheriff de Oregón, contra Obama","John Hanlin se ha convertido en protagonista colateral de la tragedia en el campus del Umpqua","política","2015-10-05");
var n6 = new Noticia(6,"img/piano.jpg","El piano prodigioso de Lang Lang suena en exclusiva en EL MUNDO","Ya puede escuchar 'Lang Lang in Paris', el disco con el que el genio de las teclas se rinde al romanticismo de la capital francesa con piezas de Chopin y Chaikovski.","política","2015-06-28");

var listadoNoticias = new Array(n1,n2,n3,n4,n5,n6);
var listadoCat = new Array();
console.log(listadoNoticias);
console.log(listadoCat);

//MENU 
////////////////////////////////////////////////////////////////////////////
//-> creamos un array vacío para poder ir añadiéndole cada una de las categorías de las noticias, siempre y cuándo ésta no exista ya en el array, es por ello que la buscamos antes de añadirla
for(var i=0; i<listadoNoticias.length; i++){
    if(listadoCat.indexOf(listadoNoticias[i].cat) == -1){
        listadoCat.push(listadoNoticias[i].cat);
    }
}

//Recorremos el array de catg para crear el menú
listadoCat.sort(); //ordena por defecto alfabéticamente los elementos de un array en orden asc
//listadoCat.unshift("all");

for(var i=0; i<listadoCat.length; i++){
    menuNoticias.innerHTML += "<li onclick=listarNoticias('"+listadoCat[i]+"')>"+listadoCat[i]+"</li>";
}

//seleccionamos todos los elemen de menu para poder jugar con su class
var elementsMenu = menuNoticias.getElementsByTagName("li"); //array


//NOTICIAS
////////////////////////////////////////////////////////////////////////////
//array.sort(function(obj,obj){}) -> si se le omite la función cómo parámetro de entrada, los elementos se ordenan alfabeticamente en orden ASC.
//Para ordenar de manera DESC debemos cambiar los operadores de comparación
listadoNoticias.sort(function(objA,objB){
    if(objA.fecha > objB.fecha){
        return -1;
    }else if(objA.fecha < objB.fecha){
        return 1;
    }else{
        return 0;
    }
});



listarNoticias("inicio");
function listarNoticias(tipo){
    
    //Activar el elemento de menu
    localStorage.setItem("tipoCatPulsada",tipo);
    for(var i=0; i<elementsMenu.length; i++){
        if( elementsMenu[i].innerHTML == localStorage.getItem("tipoCatPulsada") ){
            elementsMenu[i].className = "activo";
        }else{
            elementsMenu[i].className = "";
        }
    }
    
    
    //Modificar Titular
    document.getElementsByTagName('main')[0].getElementsByTagName('h2')[0].innerHTML = localStorage.getItem("tipoCatPulsada");
    
    //Pintar las noticias
    sectionNoticias.innerHTML="";
    
    for(var i=0; i<listadoNoticias.length ; i++){
        if(tipo == listadoNoticias[i].cat || tipo=="inicio"){
                //split("caracter de división") = convierte un string en un array a partir del caracter de división
                var fecha=listadoNoticias[i].fecha.split("-");
                var mes;
                switch(fecha[1]){
                    case "01":
                        mes="Enero";
                        break;
                    case "02":
                        mes="Febrero";
                        break;
                    case "03":
                        mes="Marzo";
                        break;
                    case "04":
                        mes="Abril";
                        break;
                    case "05":
                        mes="Mayo";
                        break;
                    case "06":
                        mes="Junio";
                        break;
                    case "07":
                        mes="Julio";
                        break;
                    case "08":
                        mes="Agosto";
                        break;
                    case "09":
                        mes="Septiembre";
                        break;
                    case "10":
                        mes="Octubre";
                        break;
                    case "11":
                        mes="Noviembre";
                        break;
                    case "12":
                        mes="Diciembre";
                        break;
                }
                fechaMod = fecha[2]+"-"+mes+"-"+fecha[0];
                
                var textoCorto=listadoNoticias[i].texto.substr(0,100);
                if(listadoNoticias[i].texto.length > 100){
                    textoCorto += "...";
                }

                sectionNoticias.innerHTML += "<article><div class='foto' style='background:url("+listadoNoticias[i].src+") no-repeat center; background-size:cover'></div><div class='datos'><h3 onclick=mostrarDetalleNoticia("+listadoNoticias[i].id+")>"+listadoNoticias[i].titulo+"</h3><p>"+textoCorto+"</p><p>"+listadoNoticias[i].cat+" | "+fechaMod+"</p></div></article>";

        }
    }

}


function mostrarDetalleNoticia(idNoticia){
    
   for(var i=0; i<listadoNoticias.length; i++){
       if(listadoNoticias[i].id == idNoticia){
           
           document.getElementsByTagName('main')[0].getElementsByTagName('h2')[0].innerHTML = listadoNoticias[i].titulo;
           
           sectionNoticias.innerHTML = "<article><div class='foto' style='background:url("+listadoNoticias[i].src+") no-repeat center; background-size:cover'></div><div class='datos'><p>"+listadoNoticias[i].texto+"</p><p>"+listadoNoticias[i].cat+" | "+fechaMod+"</p></div></article>";
       }
   }
   
   
   sectionNoticias.innerHTML += "<button onclick=listarNoticias('"+localStorage.getItem('tipoCatPulsada')+"')>Volver</button>"
    
}











