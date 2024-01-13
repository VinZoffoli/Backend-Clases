//Se basa en retornar otra funcion

const contar = () => {
    let numero = 0
    return () => {
        numero = numero + 1
        console.log(numero)
    }
}

const resultadoDeContar = contar ()
resultadoDeContar();
resultadoDeContar();
resultadoDeContar();
resultadoDeContar();
resultadoDeContar();
resultadoDeContar();
resultadoDeContar();

console.log();