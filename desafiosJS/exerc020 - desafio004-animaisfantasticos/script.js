// Verifique a distância da primeira imagem
// em relação ao topo da página

//Esta dando erro no console na linha 5, acredito que seja por causa da const imgTop = img.offsetTop;
//Vou deixa o codigo todo comentado !!!

/*const distanciaImg = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);*/

// Retorne a soma da largura de todas as imagens
function somaImagen() {
    const todasImagens = document.querySelectorAll("img");

    let soma = 0;
    todasImagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = function () {
    somaImagen();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, "Possui acessibilidade");
    } else {
        console.log(link, "Não possui acessibilidade");
    }
});

console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia("(max-width: 720px)").matches;

if (browser.matches) {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu-mobile");
}
