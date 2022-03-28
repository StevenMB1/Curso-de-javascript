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
// const numAzar = function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }
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


//? Objeto literal

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros']
// }

// console.log(gato.nombre)
// console.log(gato['nombre'])
// console.log(gato.duerme)
// console.log(gato['enemigos'][0]) 
// console.log(gato.enemigos[0])

//? CRUD

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros']
// }

// // CREATE
// gato.color = 'azul'

// // UPDATE
// gato.edad = 5

// // DELETE
// delete gato.duerme

// // REED
// console.log(gato)


//? hasOwnProperty

// console.log(gato.hasOwnProperty('edaddos'))

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros']
// }

// if(gato.hasOwnProperty('nombre')){
//     gato.nombre = 'flojera'
// }

// console.log(gato)


//? Objetos anidados

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     otros: {
//         amigos: ['cobarde', 'timido'],
//         favoritos:{
//             comida: {
//                 frio: 'salmon',
//                 caliente: 'pollo'
//             },
//         }
//     }
// }

// console.log(gato.otros.favorito?.comida.frio)
// console.log(gato.otros.amigos[0])


//? Encadenamiento opcional

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     otros: {
//         amigos: ['cobarde', 'timido'],
//         favoritos:{
//             comida: {
//                 frio: 'salmon',
//                 caliente: 'pollo'
//             },
//         }
//     }
// }

// console.log(gato.otros.favorito?.comida.frio)


//? Propiedades, metodos y this

// Las propiedades no lleva parentesis.
// Los metodos llevan parentesis.

// const amigos = ['cobarde', 'timido'];
// console.log(amigos.length)
// console.log(amigos.push())

// const nombre = 'bluuweb'

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     comer: (alimento) => {
//         console.log(`
//             ${this.nombre} está comiendo ${alimento}
//         `)
//     },
//     listarEnemigos(){
//         this.enemigos.forEach( (item) => console.log(item))
//     }
// }

// gato.listarEnemigos()


//? Recorrer un objeto (for... in)


// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
// }

// for(let propiedad in gato) {
//     console.log(gato[propiedad])
// }


//? Object.values()

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
// }

// console.log(Object.values(gato))
// Object.values(gato).forEach( item => console.log(item))


//? Destructuring Objects
// Alias, Por defecto, anidados y metodos.

// const nombre = 'bluuweb'

// const gato = {
//     // nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// }

// // const {amigos: amigosArray} = gato.otros

// const amigosArray = ["Cobarde", "Tímido", "Pegajoso"]

// const [aUno, aDos, aTres, aCuatro = 'No existe'] = amigosArray

// console.log(aCuatro)


// metodos

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
//     mostrarEnemigos() {
//         return this.enemigos.forEach((item) => console.log(item));
//     },
// }

// const {comer} = gato

// console.log(comer('pez'))


//? Getter y Setter

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ['agua', 'perros'],
//     get nombreMayuscula() {
//         return this.nombre.toUpperCase()
//     },
//     set agregarEnemigo(nuevoEnemigo) {
//         this.enemigos.push(nuevoEnemigo)
//     }
// }

// console.log(gato.nombreMayuscula)
// gato.agregarEnemigo = 'Batman'

// console.log(gato)


//? Por valor vs por referencia

// let a = {nombre: 'hola'}
// let b = a

// a.nombre = 'chao'

// console.log(b)

