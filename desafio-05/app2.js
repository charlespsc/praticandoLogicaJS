// Desafio 4: Crie uma função que determine se um ano é bissexto

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2024))


// Desafio 5. Implemente uma função que calcule a média de dois números, interrompendo a: execução se algum dos números não for válido.
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}
console.log(calcularMedia(8,5))



// Desafio 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function obterTamanhoArray(arr) {
    return arr.length;
}
//exemplo de uso
const minhaLista = [1,2,3,4,5,6,7,8,9,10]
console.log(obterTamanhoArray(minhaLista))
