

//CREAR UN MENU DINÁMICO

//1º Crear clase (plantilla) de tipo de menu <a href='url' >texto</a>
function elemntMenu(valorEnlace, valorTexto){
    this.enlace = valorEnlace;
    this.texto = valorTexto;
}

//2º Instanciamiento de los objetos de esa clase (dando valores a los atributos o propiedades)
var home = new elemntMenu("index.html","Home");
var servicios = new elemntMenu("servicios.html","Servicios");
var contacto = new elemntMenu("contacto.html","Contacto");

//3º Rellenar el html con obj de tipo menu
var listaObjMenu = new Array(home,servicios,contacto);
var menuDinamico = document.getElementById("menuDinamico");

for(var i=0; i<listaObjMenu.length; i++){
    menuDinamico.innerHTML += "<li><a href='"+listaObjMenu[i].enlace+"'>"+listaObjMenu[i].texto+"</a></li>";
}
