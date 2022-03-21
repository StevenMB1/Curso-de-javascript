//? Operador ternario

// let nombreUsuario = 'bluuweb'
// let estado = true

// console.log(`bienvenido: ${nombreUsuario.toUpperCase()}`)

// console.log(`

// ${estado ? 'en linea': 'offline'}

// `)


//? var vs let vs const

//* var
//* las var se sobreescriben la variable.
// var nombreUser = 'bluuweb'
// var nombreUser = 'ignacio'

//* let
//* let no se sobreescribe, pero se puede modificar su valor.
// let nombreUser = 'bluuweb'
// nombreUser = 'ignacion'

// console.log(nombreUser)

// let estado = true //

// if(estado) {
//     console.log('Entro al if')
//     //* Este let estado es diferente al de afuera, ya que vive dentro de este scope. y no es el mismo que esta en el scope global.
//     let estado = false
// }

// console.log(estado)

//* const

//* Las con stantes no se pueden sobreescribir, son variables solo de lectura.
// const estado = true
// const estado = false

// for(const i = 0; i < 5; i++){
//     console.log(i)
// }

// const estado = true 

// if(estado){
//     const estado = false
//     console.log(estado)
// }

// console.log(estado)

//? Array vs const 

// const frutas = []
// frutas[0] = 'sandias'

// console.log(frutas)

//? array(push, pop, shift, unshift)

// const frutas = ['sandia', 'pera']

// frutas.push('banana')  // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
// frutas.unshift('banana')  // El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
// frutas.pop()  // El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
// frutas.shift()  // El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// const frutaEliminada = frutas.shift() 

// console.log(frutas)
// console.log(frutaEliminada)


//? Practica carrito de compra

// const frutas = []
// const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

// frutas.push(fruta)

// while (confirm('¿Desea agregar otro elemento al 🛒?')) {
//     const fruta = prompt('¿qué fruta desea comprar?')
//     frutas.push(fruta)
// }

// console.log('Ustede compró: ')
// for (let fruta of frutas) {
//     console.log(fruta)
// }


//? Funcion expresada
const numAzar = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
// console.log(numAzar(100, 201))


//? Funciones de flecha de

// const azarFlecha = (min, max) =>{
//     return Math.floor(Math.random() * (max - min)) + min
// }

// const azarFlecha = max => Math.floor(Math.random() * (max - 1)) + 1

// const azarFlecha = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min

// console.log(azarFlecha(null, 11))

//? Arrow & forEach()

// let frutas = ['manzana','sandia','pera']

// frutas.forEach((fruta, index, array) => {
//     console.log(`${index} : ${fruta}`)
//     // console.log(array)
// })

