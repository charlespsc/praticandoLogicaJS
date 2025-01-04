/*Suponha que você está desenvolvendo um programa para calcular o custo total de uma viagem de carro com base em diferentes fatores. Você deseja que os usuários informem a distância da viagem (em quilômetros), a eficiência do carro (em quilômetros por litro), o preço da gasolina por litro e a velocidade média durante a viagem (em quilômetros por hora). Com essas informações, você calculará o custo total da viagem.

Agora, você precisa criar uma função que recebe esses valores como entrada e retorna o custo total da viagem. Você escreveu o seguinte código para representar uma função que realiza o cálculo:*/

function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return custoTotal;
}