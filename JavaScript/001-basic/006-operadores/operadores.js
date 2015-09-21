document.write("<h2>OP. ASIGNACIÓN (=) (+=) (-=)</h2>");
 
//(=)
var a = 3;
var b = 2;

document.write("<b>el valor de 'a' es "+a+" y el valor de 'b' es "+b+"</b>");
document.write("<br>");

//(+=)
a+=4;

document.write("<b>el valor de 'a' es "+a+" y el valor de 'b' es "+b+"</b>");
document.write("<br>");

//(-=)
b-=1;
a-=b;
 
document.write("<b>el valor de 'a' es "+a+" y el valor de 'b' es "+b+"</b>");
document.write("<br>");

document.write("<h2>OP. AUTOINCREMENTO (++) (--)</h2>");
//Sobreescribimos el valor de a

a=10;
b=a++;

document.write("<b>el valor de 'a' es "+a+" y el valor de 'b' es "+b+"</b>");

b--;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

///////////////////////////////
document.write("<h2>ARITMÉTICOS (+)(-)(*)(%)</h2>");

var a=2;
var b=5;
var c=8;

//(+)
document.write("<p>a+b+c="+(a+b+c)+"</p>");

//(-)
var resta=(a-b-c);
document.write("<p>a-b-c="+resta+"</p>");

//(*)
var multi=(a*b)*c;
document.write("<p>(a*b)*c="+multi+"</p>");

//(/)
var divi=multi/c;
document.write("<p>multi / c="+divi+"</p>");

//(%)-> el módulo devuelve el resto de una operación
document.write("<p>divi%2="+(divi%a)+"</p>");

document.write("<p>El resto de dividir "+divi+"%"+a+" da un valor de tipo <span>"+typeof(divi%a)+"</span></p>");

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("<h2>COMPARACIÓN (<)(>)(<=)(>=)(==)(!=)(===)(!==)</h2>");

var a=2;
var b=5;
var c=8;
var d="8";
var e=5;

//(>)
document.write("<p>El número "+b+" es mayor que "+c+"? "+(b>c)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");
console.log( typeof(b>c) );

//(>=)
document.write("<p>El número "+b+" es mayor que "+e+"? "+(b>=e)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");


//(==)
document.write("<p>El número "+c+" es mayor que "+d+"? "+(c==d)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");


//(===)
document.write("<p>El número "+c+" es mayor que "+d+"? "+(c===d)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");


//(!=)
document.write("<p>El número "+c+" es mayor que "+d+"? "+(c!=d)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");

//(!==)
document.write("<p>El número "+c+" es mayor que "+d+"? "+(c!==d)+", el resultado es de tipo <span>"+typeof(b>c)+".</span></p>");


///////////////////////////////////////
document.write("<h2>OP. LÓGICOS (&&)(||)</h2>");

var a=2;
var b=5;
var c=8;

document.write("<p>"+( (a<=b) && (c<b) )+"</p>");
document.write("<p>"+( (a<=b) && (c>b) )+"</p>");
document.write("<p>"+( (a===b) && (c>b) )+"</p>");

document.write("<p>"+( (a<=b) || (c<b) )+"</p>");
document.write("<p>"+( (a<=b) || (c>b) )+"</p>");
document.write("<p>"+( (a===b) || (c>b) )+"</p>");


