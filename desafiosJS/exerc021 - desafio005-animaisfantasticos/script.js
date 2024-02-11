// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInternos = document.querySelectorAll('a[href^="#"]');

function handlelink(event) {
    event.preventDefault();
    linkInternos.forEach((links) => {
        links.classList.remove("ativo");
    });
    this.classList.add("ativo");
}

linkInternos.forEach((link) => {
    link.addEventListener("click", handlelink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
    console.log(event.currentTarget);
}

todosElementos.forEach((element) => {
    element.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*function handleElemento(event) {
    event.currentTarget.remove();
}*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
    console.log(event.key);
    if (event.key === "t") {
        document.documentElement.classList.toggle("textomaior");
    }
}

window.addEventListener("keydown", handleClickT);
