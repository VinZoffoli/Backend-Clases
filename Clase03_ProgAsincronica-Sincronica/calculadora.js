const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicacion = (num1, num2) => {
    return num1 * num2
}
const division = (num1, num2) => {
    return num1 / num2
}

const calculadora = (number1, number2, cb) => {
    return cb(null, number1, number2)
}
const numbers = {
    number1: 10,
    number2: 5,
}