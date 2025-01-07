// Desafio 1: Crie uma função que valide se um número é positivo, negativo ou zero.
let numero = 2;
function validarNumero(numero) {
    if (numero > 0) {
        return (`O número ${numero} é Positivo!`);
    } else if (numero < 0) {
        return (`O número ${numero} é Negativo!`);
    } else {
        return (`O número ${numero} é Zero!`);
    }
}
console.log(validarNumero(1))



// Desafio 2: Implemente uma função que verifique se uma pessoa é maior de idade.
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(verificarIdade(17));



// Desafio 3: Desenvolva uma função que valide se uma string é vazia ou não.
function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}
console.log(validarString("Aqui há um texto?"))
console.log(validarString(""))

