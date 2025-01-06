//Desafio 2: Manipulando Arrays

// Declarando uma variável do tipo array
let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3, 4);
console.log("Adicionando elementos (minhaLista) com push:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [4, 5, 6, 1];
console.log("Adicionando elementos (outrosNumeros) com array:", outrosNumeros);

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays:", novaLista);

// Removendo o último elemento
novaLista.pop();
console.log("Removendo último elemento com pop:", novaLista);


// Desafio 4: Embaralhando elementos em um array Incremente com as informações a partir do Desafio 2

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Embaralhando novaLista
  novaLista = embaralharArray(novaLista);
  console.log("Embaralhando a Lista:", novaLista);



//Desafio 5: Removendo duplicatas
  
// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);