

//Al cargar el js antes del cierre del body, no necesitamos esperar a que la ventana o documento se hayan cargado, ya que las etiquetas, gracias al sentido de lectura lineal, ya existen y por tanto se pueden seleccionar
document.getElementsByTagName("div")[0].innerHTML+="- Hola";
