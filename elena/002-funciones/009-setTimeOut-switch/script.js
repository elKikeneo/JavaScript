var estiloDia=document.getElementById('estiloDia');


function estilo(momento){
    estiloDia.style.opacity="1";
    switch(momento){
        case 'd':
            estiloDia.className="dia";
            estiloDia.innerHTML="buenos días";
            break;
        case 't':
            estiloDia.className="tarde";
            estiloDia.innerHTML="buenas tardes";
            break;
        case 'n':
            estiloDia.className="noche";
            estiloDia.innerHTML="buenas noches";
            break;
        default:"otro";      
    }
    setTimeout(ocultar,2000);
}

function ocultar(){
    estiloDia.style.opacity="0";
}

