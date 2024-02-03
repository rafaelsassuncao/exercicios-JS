// Retorne o url da página atual utilizando o objeto window
// R: tive que pesquisar no google qual a linha de codigo que fazia isso.
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
//R: Nesse exercicio precise ver como o professor resolveu.
const classeAtiva = document.querySelectorAll(".ativo");

// Retorne a linguagem do navegador
//R: Achei a resposta no Google.
const linguagem = window.navigator.language;

// Retorne a largura da janela
const janela = window.innerWidth;

console.log(`A janela têm ${janela} pixels.`);
