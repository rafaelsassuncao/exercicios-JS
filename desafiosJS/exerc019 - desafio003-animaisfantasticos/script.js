// Adicione a classe ativo a todos os itens do menu

const adicionarClasse = document.querySelectorAll(".menu a");

adicionarClasse.forEach((item) => {
    item.classList.add("Ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

adicionarClasse.forEach((item) => {
    item.classList.remove("Ativo");
});

adicionarClasse[0].classList.add("Ativo");

// Verifique se as imagens possuem o atributo alt
imgs = document.querySelectorAll("img");

imgs.forEach(function (img) {
    const possuiAlt = img.hasAttribute("alt");
    console.log(img, possuiAlt);
});

console.log(imgs);

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');

link.setAttribute("href", "https://www.google.com.br/");

console.log(link);
