// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;

// Liste 5 objetos do browser
document;
navigator;
frames;
location;
History;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

//Modo para pesquisar os metodos nos dois navegadores citados
if (typeof document.webkitHidden != "undefined") {
    console.log("Existe");
} else {
    console.log("Não existe");
}

window.chrome;
chrome.webstore;
