

//DESTACAR el enlace que coincida con la URL

//1º Obtener la URL del navegador
var url=window.location.href;

//2º Comprobar y preguntar a todos los enlaces, cuál de ellos direcciona a esa url
var enlaces=document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("a");//array

for(var i=0; i<enlaces.length ; i++){
    if( enlaces[i].href == url ){
        enlaces[i].className="activo";
    }
}