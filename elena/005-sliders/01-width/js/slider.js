
var pos_left=0;
var slider=document.getElementById("slider");
var content_img=document.getElementById("content_img");
var imagenes=content_img.getElementsByTagName("img");

setInterval(moverContentImg,2000);
function moverContentImg(){
    pos_left+=100;
    
    if(pos_left == imagenes.length*100){
        pos_left=0;
    }
    content_img.style.left="-"+pos_left+"%";
}
