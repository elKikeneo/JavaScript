

//Selectores en Jquery = selector CSS

//por id
$("#formulario"); //document.getElementById("formulario")
//por class
$(".content");
//por atributo
$("input[name='nombre']");
//por descendencia
$("main ul.people li"); //document.getElementsByTagName('main')[0].getElementsByClassName('people')[0].getElementsByTagName('li')

//Refinamiento de selectores
$("h3").not(".foo"); //$('h3:not(.foo)')
$("h3").first();//$('h3:first-child')
$("h3").last();//$('h3:last-child')
$("h3").eq(2);//$('h3:nth-child(3)')


//Formateo de código encadenado
$("main").find("h3").eq(0).html("Texto añadido con jquery");


//Cuando se selecciona un elemento con $() lo que devuelve es un objeto, para saber si este objeto existe en el DOM hay que preguntar por la cantidad de elementos que posee con $().lenght, esto devuelve true o false si el objeto existe o no
if( $("h3.foo").length ){
    $("h3.foo").append(" - hola");
}else{
    $("main").append("<span>Texto introducido si no existe la etiqueta</span>");
}
