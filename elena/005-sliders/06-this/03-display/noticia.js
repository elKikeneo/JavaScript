
function Noticia(vtitulo,vtexto){
    this.titulo=vtitulo;
    this.texto=vtexto;
}

var n1= new Noticia("Se acaban las clases","Lorem fistrum papaar papaar pecador te va a hasé pupitaa por la gloria de mi madre diodeno. Va usté muy cargadoo ahorarr tiene musho peligro pupita no puedor por la gloria de mi madre ese que llega mamaar jarl. Diodeno ahorarr sexuarl la caidita está la cosa muy malar te voy a borrar el cerito a wan está la cosa muy malar ese pedazo de torpedo diodeno. A wan ahorarr pupita ese pedazo de diodenoo ese hombree qué dise usteer caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor te va a hasé pupitaa a peich.");
var n2= new Noticia("Chiquito ipsum dice","Lorem fistrum papaar papaar pecador te va a hasé pupitaa por la gloria de mi madre diodeno. Va usté muy cargadoo ahorarr tiene musho peligro pupita no puedor por la gloria de mi madre ese que llega mamaar jarl. Diodeno ahorarr sexuarl la caidita está la cosa muy malar te voy a borrar el cerito a wan está la cosa muy malar ese pedazo de torpedo diodeno. A wan ahorarr pupita ese pedazo de diodenoo ese hombree qué dise usteer caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor te va a hasé pupitaa a peich.");
var n3= new Noticia("Condemor","Ese que llega condemor ese que llega jarl te voy a borrar el cerito sexuarl la caidita fistro se calle ustée ahorarr. La caidita pecador a wan te voy a borrar el cerito apetecan quietooor la caidita no te digo trigo por no llamarte Rodrigor amatomaa. ");

var listadoNoticas= new Array(n1,n2,n3);

//////////////////////////////////////////////////////////

var main = document.getElementsByTagName("main")[0];
for(var i=0; i<listadoNoticas.length; i++){
    main.innerHTML += "<div class='noticia' onclick=mostrar(this)><h2>"+listadoNoticas[i].titulo+"</h2><p style='display:none'>"+listadoNoticas[i].texto+"</p></div>";
}



function mostrar(noticia){
    //console.log(noticia);
    if(noticia.getElementsByTagName("p")[0].style.display=="none"){
        noticia.getElementsByTagName("p")[0].style.display="block";
    }else{
        noticia.getElementsByTagName("p")[0].style.display="none";
    }
    
    
    
}