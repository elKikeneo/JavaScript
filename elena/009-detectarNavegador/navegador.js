
var infoNavegador = navigator.userAgent.toLowerCase();
var tagLink = document.getElementById("extra");

if(infoNavegador.search("firefox") != -1){
    tagLink.href = "css/firefox.css";
}else if(infoNavegador.search("opera") != -1){
    tagLink.href = "css/opera.css";
}else if(infoNavegador.search("msie") != -1){
    tagLink.href = "css/explorer.css";
}