/*
Hace algunos ayeres cuando se te enseño a programar, entendiste que las instrucciones se ejecutaban en cascada, es decir, que la tarea 1 debia finalizar para que pudiera comenzar la ejecucion de la tarea dos, etc
*/

function funcA(){
    console.log(1)
    funcB()
    console.log(2)
}
function funcB(){
    console.log(3)
    funcC()
    console.log(4)
}
function funcC(){
    console.log(5)
    funcD()
    console.log(6)
}

funcA()

//