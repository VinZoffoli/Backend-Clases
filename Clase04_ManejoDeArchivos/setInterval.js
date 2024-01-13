//Ejemplo de una operacion sincrona
// console.log('Inicio de programa');
// console.log('Realizando operacion');

// for (let contador = 0; contador < 5; contador + 1){
//     console.log(contador);
// }

// console.log("Fin del programa");

//Ejemplo de una operacion asincrona con setInterval
console.log("Inicio de programa");
let contador = () => {
    let contador = 0;
    console.log("Tomando un cafe en el Break")
    let timer = setInterval(() => {
        console.log(contador++);
        if(contador > 5){
            clearInterval(timer);
            console.log("Fin del programa");
        }
    },1000);
}

contador();
