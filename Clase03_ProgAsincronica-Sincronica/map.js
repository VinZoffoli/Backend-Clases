// const numbers = [1,3,5,7]

// const response = numbers.map(number => number * 2)


//forEach no retorna nada
//map retorna un array

const myForEach = function (array, cb) {
    for(let i = 0; i < array.length; i++){
        cb(array[i]);
    }
}

const numbers = [1,3,5,7]
myForEach(numbers, number => console.log(number))