const RandomNumbers = require("./proyectoNode.class")

const getRandomNumbers = (min, max, totalNumbers) => {
    try {
        const numbers = [];
        for (let i= 0; i < totalNumbers;i++){
            numbers.push(Math.round(Math.random() * (max-min) + min));
        }
        return numbers;
    } catch (error) {
        console.log('No se pudo generar')
    }
}

const numbers1 = getRandomNumbers(3, 12, 20)
console.log(numbers1)

const numbers2 = getRandomNumbers(5,8,6)
console.log(numbers2)

const randomNumbers = new RandomNumbers()
const numbers3 = randomNumbers.getRandomNumbers(100,120,8)
console.log(numbers3)