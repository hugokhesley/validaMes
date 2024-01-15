const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const dataAtual = document.querySelector("dataAtual");

// criando a formula da data atual

//cria um objeto  de data
var data = new Date();

// Obtém os componetes dia, mes e ano
var dia = data.getDate();
var mes = data.getMonth() + 1; // os meses são indexados de 0 a 11
var ano = data.getFullYear();

// formata a data como string

var dataFormatada = dia + "/ " + mes + "/ " + ano;

document.getElementById("dataAtual").innerText = "Data atual: " + dataFormatada;


frm.addEventListener("submit", (e)=>{
    const pegaMesInicio = new Date(frm.inMesInicio.value);
    const pegaMesAtual = new Date();

    const calculaMContrato = (pegaMesAtual.getFullYear() - pegaMesInicio.getFullYear()) * 12 + pegaMesAtual.getMonth() - pegaMesInicio.getMonth();

    resp.innerText = `O Cliente está em M${calculaMContrato}.`
    e.preventDefault();
})