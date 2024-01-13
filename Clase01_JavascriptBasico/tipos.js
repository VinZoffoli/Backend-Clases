people =  [
    {id: 1, name: 'Mate', isStudent:true},
    {id: 2, name: 'Vin', isStudent:false},
    {id: 3, name: 'Juan', isStudent:false},
]

person = people.find(p => p.id === 2)

console.log(person)

const familia = {
    papa: 'Diego',
    mama: 'Caro',
    hermanito: 'Bebe nuevo',
}

console.log(familia)

familia = 'hola'

//Temple Strings

const saludo = (nombre, mama) =>{
    console.log('hola', nombre, 'como estas')
    console.log('hola ', nombre, + ' como estas')
    console.log('hola %s como estas')

    console.log(`hola ${nombre} como estas y como esta tu mama ${mama}?`)

    return 4 + 5
}

const response = saludo2 ('Benja', 'Caro')
console.log(response)

const despedida = () => 'chao me fui'

