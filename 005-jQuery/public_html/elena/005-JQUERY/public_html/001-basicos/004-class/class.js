

function insertClase(){
    $("h1").addClass("verde");
    //document.getelementsByTagName('h1')[0].className = "verde"
}

function resetClase(){
    $("h1").removeClass("verde");
    //document.getelementsByTagName('h1')[0].className = ""
}

//var tieneClase=false;
function toggleClase(){
   $("h1").toggleClass("verde");
    
//    if(!tieneClase){
//        document.getElementsByTagName('h1')[0].className = "verde";
//        tieneClase=true;
//    }else{
//        document.getElementsByTagName('h1')[0].className = "";
//        tieneClase=false;
//    }
    
}