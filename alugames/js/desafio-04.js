function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"