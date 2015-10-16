

//Función css -> establecedor
$("h1").css("font-size","80px"); //prop simple
$("h1").css({"font-size":"40px",
             "color":"#34ac05",
             "letter-spacing":"-2px"}); //prop multiple

//Función css() -> obtenedor
var colorInicial = $("h1").css("color"); //document.getElementsByTagName(h1)[0].style.color
console.log( colorInicial );
console.log( $("h1").css("color") );


/////////////////////////////////////////////////////

var color;
function select(red){
    //almacenamos el color de fondo del botón que acciona la funcion, y se lo damos al color del texto h1
    colorBtn=$("."+red).css("background-color"); 
    $("h1").css("color",colorBtn);
}

function reset(){
    //hacemos que el h1, vuelva al color de origen previuamente dado en linea y recogido
    $("h1").css("color",colorInicial);
}

//////////////////////////////////////////////////

