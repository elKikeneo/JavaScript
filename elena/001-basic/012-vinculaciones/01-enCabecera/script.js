
//SIEMPRE al cargar el js en cabecera debemos esperar a que cargue la ventana antes de hacer los selectores
window.onload = function(){
    
   document.getElementsByTagName("div")[0].innerHTML+="- Hola";
   
    
}