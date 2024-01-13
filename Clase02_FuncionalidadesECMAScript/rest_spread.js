// const Vincenzo = {
//     name: 'Vincenzo',
//     age: 24,
//     country: 'Chile',
// }

// const newUser = {
// ...Vincenzo, //Se propaga la informacion (spread)
// role: 'admin'
// }
// console.log(newUser)
// console.log(Vincenzo)

//reduce, lo que sea que tu me mandes guardamelo en numbers
const result = (...numbers) =>{
    console.log(numbers.reduce((prev,curr) => prev + curr))
} //que guarde los parametros como un array

result(5,6,7,9,3,4,5,2,3,4,23,54,324,211,45,3,2)