/*
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values).
*/

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

// Obtener una lista nueva con todos los tipos de productos
const tiposDeProductos = [...new Set(objetos.flatMap(objeto => Object.keys(objeto)))];

console.log("Lista de tipos de productos:", tiposDeProductos);

// Obtener el total de productos vendidos por todos los objetos
const totalProductosVendidos = objetos.reduce((total, objeto) => {
    const cantidades = Object.values(objeto);
    return total + cantidades.reduce((sum, cantidad) => sum + cantidad, 0);
}, 0);

console.log("Total de productos vendidos:", totalProductosVendidos);
