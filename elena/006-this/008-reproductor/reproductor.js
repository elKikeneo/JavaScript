
var num_portadas=23;
var content_reproductor= document.getElementById("content_reproductor");
var content_portadas= document.getElementById("content_portadas");



function cancion(valueImagen,valueAudio,valueTitulo){
    this.imagen=valueImagen;
    this.audio=valueAudio;
    this.titulo=valueTitulo;    
}

////////1-Instanciamiento de objetos para rellenar un array
var listaCanciones = new Array();

for(var i=1; i<=num_portadas ; i++ ){
    var pista = new cancion("portadas/portada"+i+".jpg","mp3/pista"+i+".mp3","Canción "+i+"");
    //añado cada uno de los objetos al array previamente vacio
    listaCanciones.push(pista);
}
//console.log(listaCanciones);

////////2- Recorremos el array y montamos la vista
for(var i=0; i<listaCanciones.length ; i++ ){
    content_portadas.innerHTML += "<div class='portada'><img src='"+listaCanciones[i].imagen+"' alt='"+listaCanciones[i].titulo+"' onclick='reproducir("+i+")'/></div>";
}

//Al iniciar el documento ejecutamos la pista que ocupa la posición 0 dentro del array
reproducir(0);

//Cada vez que pinchamos sobre una portada se llama a esta función pasándole la posición que ocupadentro del array
function reproducir(pos){
    content_reproductor.getElementsByTagName("img")[0].src = listaCanciones[pos].imagen;
    content_reproductor.getElementsByTagName("h3")[0].innerHTML = listaCanciones[pos].titulo;
    document.getElementById("reproductor").src = listaCanciones[pos].audio;
    
    //ejecutamos la reproducción
    document.getElementById("reproductor").play();
}