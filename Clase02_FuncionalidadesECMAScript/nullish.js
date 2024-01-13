const balance = undefined;
console.log(balance || 'No es valido')

//|| operador or 

const balance2 = 0
console.log(balance ?? 'No es valido')
// "??" operador nulish


// # Propiedades privadas
class Developer {
    #salary = 5000
    getSalary() {
        return this.#salary
    }
}

//const karen = new Developer()
//console.log(karen.salary)
console.log(karen.getSalary())


