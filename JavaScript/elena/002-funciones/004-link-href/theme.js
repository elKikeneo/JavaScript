

var tagLink=document.getElementById("theme");

function themeGris(){
    tagLink.href = "css/gris.css";
}
function themeAzul(){
    tagLink.href = "css/azul.css";
}
function reload(){
    tagLink.href = "";
    //location.reload();
}

console.log(document.getElementsByTagName("link")[0].href);