
function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

 document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

function modificarConteudo() {
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}

// Desafio 4: Soma de dois números

const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

console.log(mensagem);


// Desafio 5: Separar duas sentenças com ponto e vírgula

const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);


// Desafio 6: Separar número com split()
const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);