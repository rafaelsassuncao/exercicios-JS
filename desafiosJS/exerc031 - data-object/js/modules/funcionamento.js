export default function initFuncionamento {

}

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split().map(Number);
const horarioSemana = funcionamento.dataset.horario.split().map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const teste = [1,2,3,4,5].indexOf(5);
const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

console.log(horarioAgora);