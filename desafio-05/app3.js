// Desafio 7: Crie um array e utilize a função includes para verificar se um elemento específico está presente
const meuArray1 = [10, 20, 30, 40, 50];
console.log("O array contém o número 30?", meuArray1.includes(30));
//saída esperada: "O array contém o número 30?" true



// Desafio 8: Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
// Função que verifica se um elemento está presente no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray2 = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArray2, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}



// Desafio 9: Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
const palavras = ["apple", "banana", "orange", "grape"];
console.log("A palavra 'banana' está no array?", palavras.includes("banana"));

//saída esperada: "A palavra 'banana' está no array?" true
