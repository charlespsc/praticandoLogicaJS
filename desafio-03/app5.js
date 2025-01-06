//Desafio 5: Conversão de Temperatura

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso Fahrenheit p/ Celsius:
//let temperaturaFahrenheit = 77;
//let temperaturaCelsius = converterTemperatura(temperaturaFahrenheit, 'fahrenheit');

//console.log(`Temperatura em Fahrenheit (77) = ${temperaturaCelsius}°C`);   
// Saída esperada: 25

// Exemplo de uso Celsius p/ Fahrenheit:
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');

console.log(`Temperatura em Celsius (25) = ${temperaturaFahrenheit}°F`);   
// Saída esperada: 77