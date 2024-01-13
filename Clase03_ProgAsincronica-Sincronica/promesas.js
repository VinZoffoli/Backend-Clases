//Una promesa funciona muy similar al mundo real
/*
Al prometer algo, es una promesa en estado pendiente (pending), no sabemos cuandos e resolvera esa promesa. Sin embargo, cuando llega el momento, se nos notifica si la promesa se cumplio (Fulfilled, tambien lo encontramos como Resolved) o tal vez, a pesar del tiempo, al final nos notifiquen que la promesa no pudo cumplirse, se rechazo (Rejected).
*/

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se puede dividir por 0')
        }
        const response = dividendo / divisor
        resolve(response)
    })
}

dividir(10,5)
.then(response => {
    console.log(response)
    return response
})
.then(response => {
    response = response / 2
    console.log(response)
    return response
})
.then(response => {
    response = response / 2
    console.log(response)
    return response
})
.catch(error => console.log(error))