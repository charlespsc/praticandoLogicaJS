
/* FUNCTION  DECLARATION (aceita HOISTING)
essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo () {
    let palavra = "café";
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }

}
*/

//FUNCTION  EXPRESSION (NÃO aceita HOISTING) 
const essaPalavraEUmPalindromo = function(palavra) {
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}
essaPalavraEUmPalindromo("radar");