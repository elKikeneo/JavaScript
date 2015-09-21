

//Al cargar el JS antes del cierre del body, no necesitamos esperar a que la ventana se haya cargado, ya que las etiquetas gracias al sentido lineal de la lectura ya existen y por tanto se pueden seleccionar


document.getElementsByTagName("div")[0].innerHTML+="- Hola";




