// let numeroMaquina = Math.floor(Math.random() * (11 - 1)) + 1
// // console.log(numeroMaquina)

// let vidas = 3

// let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'))

// while(numeroMaquina !== numeroUsuario && vidas > 1 ){

//     let mensaje = numeroMaquina > numeroUsuario
//         ? 'El numeroMaquina es mayor' 
//         : 'El numeroMaquina es menor'

//     vidas --
//     console.log('Te equivocaste!, ' + mensaje + ', te quedan ' 
//                     + vidas + ' intentos'
//     )
//     numeroUsuario = parseInt(prompt('numero del 1 al 10'))

// }

// if(numeroMaquina === numeroUsuario){
//     console.log('Ganaste 😍')
// } else{
//     console.log('Perdiste 😦')
// }



//? Array 

// let frutas = ['platano', 'sandia', 'perita', 'uva']
// console.log(frutas)
// console.log(frutas.length)
// console.log(frutas[0])

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }


//? for of. Sirve para recorrer objetos iterables. 

// let frutas = ['platano', 'sandia', 'uva']

// for (let fruta of frutas) {
//     console.log(fruta)
// }


// let nombreUsuario = 'Ignacio'
// let edad = 50

// for (let letra of nombreUsuario) {
//     console.log(letra)
// }


//? Funciones 


// function saludar (nombreUsuario) {
//     return 'Bienvenido! ' + nombreUsuario    
// }

// console.log(saludar('Steven'))


//? Ejercicio de la suma

// function sumar (n1, n2) {
//     return parseInt(n1) + parseInt(n2)
// }

// // console.log(sumar(2, 5))
// let numUno = prompt('Ingrese el primer numero: ')
// let numDos = prompt('Ingrese el segundo numero')

// console.log(sumar(numUno, numDos))



// function sumar (n1, n2) {
//     return 'El resultado de la suma es: ' + n1 + n2
// }

// let suma = sumar(10, 5)
// console.log(suma)

// function resta (n1, n2) {
//     return `El resultado de la resta es: ` + (n1 - n2)
// }

// console.log(resta(100, 2))

// function multiplicacion (n1, n2) {
//     return 'El resultado de la multiplicacion es: ' + n1 * n2 
// }

// let num1 = parseInt(prompt('Ingrese el primer numero: '))
// let num2 = parseInt(prompt('Ingrese el segundo numero: '))

// console.log(multiplicacion(num1, num2))

