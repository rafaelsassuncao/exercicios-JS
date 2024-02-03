// Por qual motivo o código abaixo retorna com erros?
//Nesse casso foi necessário aonde console.log(*var* > por cor, marca, portas);
{
    var cor = "preto";
    const marca = "Fiat";
    let portas = 4;
    console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(5));
console.log(dividirDois(10));

// O que fazer para total retornar 500?
//A solução foi transformar o var em const
const numero = 50;

//A solução foi transformar a var em let, pois dai o mesmo conseguiu coletar os valores fora do escopo//
for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
