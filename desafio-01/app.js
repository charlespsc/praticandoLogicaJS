let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = numero1 + numero2;

    alert(`Soma: ${numero1} + ${numero2} = ${soma}`);
}