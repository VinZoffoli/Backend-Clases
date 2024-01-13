const saludar = (cb) => {
    console.log(`Hola son las ${cb()}`)
}

const getTime = () => {
    return new Date()
}

console.log(getTime())

const numbers = [1,2,3]

const multyplyForTwo = number => number * 2
numbers.forEach(multyplyForTwo)