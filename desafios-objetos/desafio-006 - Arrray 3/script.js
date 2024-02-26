// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();

comidas.splice(0, 0, "Peixe", "Batata");
comidas.splice(5, 4, "Arroz");

console.log(comidas);

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
estudantes.sort().reverse();

const verficacaoEstudantes = estudantes.includes("Joana");

console.log(verficacaoEstudantes);
console.log(estudantes);

// Substitua section por ul e div com li,
// utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("div");
html = html.join("li");

console.log(html);

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ["Ford", "Fiat", "VW", "Honda"];
const cloneCarros = carros.slice();
carros.pop();

console.log(carros);
console.log(cloneCarros);
