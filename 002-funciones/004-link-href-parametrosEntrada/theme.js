
var tagLink=document.getElementById("theme");

function theme(opc){
    switch(opc){
        case 'gris':
            tagLink.href = "css/gris.css";
            break;
        case 'azul':
            tagLink.href = "css/azul.css";
            break;
        case 'reload':
            tagLink.href = "";
            break;
    }
    
}
console.log(document.getElementsByTagName('link')[0].href);