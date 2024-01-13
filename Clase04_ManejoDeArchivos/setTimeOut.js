//Ejemplo de operacion sincrona
console.log('inicio del programa')
console.log('hola')
console.log('fin del programa')

//Operacion asincrona con setTimeOut
//sirve para establecer un temporizador, es decir, que algo se ejecute despues del tiempo que nosotros le asignemos
const temporizador = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
}

let operacion = () => {
    console.log("Hola");
}

console.log('Inicio del programa');
temporizador(operacion);
console.log("Fin del programa");
