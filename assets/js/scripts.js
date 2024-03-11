
console.log("iniciamos el script");

/////////////ramo HTML
var nota1HTML = prompt("Ingrese la nota 1 de HTML");
var nota2HTML = prompt("Ingrese la nota 2 de HTML");
var nota3HTML = prompt("Ingrese la nota 3 de HTML");


var sumaHTML = (parseInt(nota1HTML) + parseInt(nota2HTML) + parseInt(nota3HTML));
var promedioHTML = (sumaHTML / 3);

HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;
HTMLPROMEDIO.innerHTML = promedioHTML.toFixed(2); 

/////////////ramo CSS
var nota1CSS = prompt("Ingrese la nota 1 de CSS");
var nota2CSS = prompt("Ingrese la nota 2 de CSS");
var nota3CSS = prompt("Ingrese la nota 3 de CSS");

var sumaCSS = (parseInt(nota1CSS) + parseInt(nota2CSS) + parseInt(nota3CSS));
var promedioCSS = (sumaCSS / 3);

CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;
CSSPROMEDIO.innerHTML = promedioCSS.toFixed(2); 

/////////////ramo JS
var nota1JS = prompt("Ingrese la nota 1 de JS");
var nota2JS = prompt("Ingrese la nota 2 de JS");
var nota3JS = prompt("Ingrese la nota 3 de JS");

var sumaJS = (parseInt(nota1JS) + parseInt(nota2JS) + parseInt(nota3JS));
var promedioJS = (sumaJS / 3);

JS1.innerHTML = nota1JS;
JS2.innerHTML = nota2JS;
JS3.innerHTML = nota3JS;
JSPROMEDIO.innerHTML = promedioJS.toFixed(2); 

