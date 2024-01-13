function mostrarLista(lista) {
    if (lista.length === 0) {
        console.log("Lista vacía");
    } else {
        console.log("Elementos de la lista:");
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i]);
        }
    }

    return `Longitud de la lista: ${lista.length}`;
}

// Caso de prueba 1: Lista vacía
const listaVacia = [];
const resultadoListaVacia = mostrarLista(listaVacia);
console.log(resultadoListaVacia);

// Caso de prueba 2: Lista con elementos
const listaConElementos = [1, 2, 3, 4, 5];
const resultadoListaConElementos = mostrarLista(listaConElementos);
console.log(resultadoListaConElementos);
