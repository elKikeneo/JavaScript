
document.write("<h2>OP. ASIGNACIÓN (=) (+=) (-=)</h2>");

//(=)
var a = 3;
var b = 2;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//(+=)
a+=4;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//(-=)
b-=1;
a-=b;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<h2>OP. AUTOINCREMENTO (++) (--)</h2>");

//sobreescribimos el valor de a (++)
a=10;
b=a++;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//(--)
document.write("<p>Las variables valen "+a+" y "+(--b)+"</p>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<h2>OP. ARITMÉTICOS (+) (-) (*) (/) (%)</h2>");

var a=2;
var b=5;
var c=8;

//(+)
document.write("<p>a+b+c="+(a+b+c)+"</p>");

//(-)
var resta=a-b-c;
document.write("<p>a-b-c="+resta+"</p>");

//(*)
var multi=(a*b)*c;
document.write("<p>a*b*c="+multi+"</p>");

//(/)
var divi=multi/c;
document.write("<p>((a*b)*c)/c="+divi+"</p>");

//(%) -> el módulo devuelve el resto de una operación
document.write("<p>divi%2="+(divi%a)+"</p>");

document.write("<p>El resto de dividir "+divi+"%"+a+" da una valor de tipo <span>"+typeof(divi%a)+"</span></p>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<h2>OP. COMPARACIÓN (<) (>) (<=) (>=) (==) (!=) (===) (!==)</h2>");

var a=2;
var b=5;
var c=8;
var d="8";
var e=5;

//(>)
document.write("<p>¿El número "+b+" es mayor qué el "+c+"? -> "+(b>c)+"</p>");
console.log( typeof(b>c) );

//(>=)
document.write("<p>¿El número "+b+" es mayor o igual qué el "+e+"? -> "+(b>=e)+"</p>");

//(==) -> compara caracteres
document.write("<p>¿El número "+c+" es igual qué el "+d+"? -> "+(c==d)+"</p>");

//(===) -> compara caracteres y tipo de dato que almacena
document.write("<p>¿El número "+c+" es igual qué el "+d+"? -> "+(c===d)+"</p>");

//(!=) -> compara caracteres
document.write("<p>¿El número "+c+" es diferente qué el "+d+"? -> "+(c!=d)+"</p>");

//(!==) -> compara caracteres y tipo de dato que almacena
document.write("<p>¿El número "+c+" es diferente qué el "+d+"? -> "+(c!==d)+"</p>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<h2>OP. LÓGICOS (&&) (||)</h2>");

var a=2;
var b=5;
var c=8;

document.write("<p>"+( (a<=b) && (c<b) )+"</p>"); //T && F -> F
document.write("<p>"+( (a<=b) && (c>b) )+"</p>"); //T && T -> T
document.write("<p>"+( (c===b) && (a>b) )+"</p>"); //F && F -> F

document.write("<p>"+( (a<=b) || (c<b) )+"</p>"); //T || F -> T
document.write("<p>"+( (a<=b) || (c>b) )+"</p>"); //T || T -> T
document.write("<p>"+( (c===b) || (a>b) )+"</p>"); //F || F -> F





