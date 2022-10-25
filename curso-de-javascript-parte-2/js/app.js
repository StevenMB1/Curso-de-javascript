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

//* Las constantes no se pueden sobreescribir, son variables solo de lectura.
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


// console.log(juegos)


// //? Funcion expresada
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



//REVIEW 
//* 10 FUNDAMENTOS MODERNOS DE JAVASCRIPT


//?TODO Practicando objetos, arreglos, slice y spreet operators

// const automoviles = {
//     honda: {
//         civic: {
//             marca: 'Honda',
//             color: 'Negro',
//             tipo: 'Sedan',
//             puertas: '4 puertas',
//             fechaSalida: 2016,
//         },
//         accord: {
//             marca: 'Honda',
//             color: 'rojo',
//             tipo: 'Sedan',
//             puertas: '4 puertas',
//             fechaSalida: {
//                 ano: 2018
//             }
//         }
    
//     },


// }



// console.log(automoviles.honda.accord)


// const lista1 = [1, 2, 3, 4, 5]
// const lista2 = [6, 7, 8, 9, 10]

// const lista3 = lista2.slice()

// lista3.push(11, 12, 13, 14, 15)
// console.log(lista2)
// console.log(lista3)


// // console.log(`Usted compro un automovil: ${automovil.marca} ${automovil.modelo} ${automovil.fechaSalida}, color: ${automovil.color}, tipo ${automovil.tipo}, y tiene ${automovil.puertas} `)


// // var arrayPrimero = [2,3,4,5]
// // var arraySegundo = arrayPrimero.slice();




// // console.log(arrayPrimero);
// // console.log(arraySegundo);



//? Funciones

// function sumar(num){
//     console.log(num)
// }

// sumar(10)

// const sumarDos = (num1, num2) => (num1 + num2);

// const resultado = sumarDos(20, 30)
// console.log(resultado)

// const mensaje = nombre => ('Hola soy ' + nombre)


// const resultadoDos = mensaje('Steven')
// console.log(resultadoDos)

// const sumaTres = (num = 1) => { // Aqui le estamos pasando al parametro un valor por defecto.
//     console.log(num + 3)
// }

// sumaTres(10)


// const nombreCompleto = (nombre, primerApellido, segundoApellido) => {
//     return `Mi nombre es ${nombre} ${primerApellido} ${segundoApellido}`
// }

// const miNombre = nombreCompleto('Steven', 'Medina', 'Batista')
// console.log(miNombre) 


//? Template string

// const numero = (num1, num2) => `El numero es: ${num1 + num2}`

// const resultado = numero(10, 20)
// console.log(resultado)


//? Objetos 

// const mascota = {
//     nombre: 'Tom',
//     edad: 10,
//     vivo: true,
//     razas: ['Americano de pelo duro', 'Abisinio', 'Asiático']
// }

// console.log(mascota.razas[1])
// console.log(mascota.nombre)
// console.log(mascota.edad)
// console.log(mascota.vivo)

// mascota.id = 1  // para añadir una nueva propiedad al objeto
// mascota.color = 'Gris'

// console.log(mascota.id)    


//? Destructuring de objetos

// const mascota = {
//     nombre: 'Tom',
//     edad: 10,
//     vivo: true,
//     razas: ['Americano de pelo duro', 'Abisinio', 'Asiático']
// }

// const {edad, nombre} = mascota

// console.log(edad, nombre)


//? Array de objetos

// const web = {
//     nombre: 'bluuweb',
//     links: {
//         enlace: 'www.bluuweb.cl'
//     },
//     redesSociales: {
//         youtube: {
//             enlace: 'youtube.com/bluuweb',
//             nombre: 'bluuweb yt'
//         },
//         facebook: {
//             enlace: 'facebook.com/bluuweb',
//             nombre: 'bluuweb fb'
//         }
//     }
// }

// const enlaceYT = web.redesSociales.youtube.enlace
// console.log(enlaceYT)


// const {enlace, nombre} = web.redesSociales.youtube
// console.log(enlace)
// console.log(nombre)


//? Fetch API

//TODO Aplicamos fetch, Fetch consume una API(una url), como esta informacion 
//TODO es una promesa que viene en JSON, nosotros la transformamos y luego 
//TODO volvemos a leer la informacion.

// fetch('https://rickandmortyapi.com/api/character')
//     // Aca devolvemos el json
//     .then( res => {
//         return res.json()   // le desimos que nos de la repuesta en formato json.
//     })
    
//     // hacemos otro then porque Ahora tenemos que devolver la data.
//     .then( data => {    // Aqui obtenemos la data.
//         console.log(data.results)
//         data.results.forEach(element => {
//             console.log(element.name)
//         });
//     })
//     .catch( error => console.log(error) )


//TODO simplificacin de las funciones

// fetch('https://rickandmortyapi.com/api/character')
//     //*funcion flecha en 1 una linea.
//     .then( res => res.json())

//     //* funcion flecha en 1 una linea.
//     // .then( data => console.log(data.results))
// .then( data => {
//     console.log(data.results)   
//     data.results.forEach(element => console.log(element.name))
// } )
    // .catch(error => console.log(error))


// fetch('https://rickandmortyapi.com/api/character')
//     .then( res => res.json() )
//     .then( data => data.results.forEach(element => { console.log(element.name) }))
//     .catch(error => console.log(error))


//? Async & Await

// Antes de la funcion de flecha se coloca async y el await va a funcionar siempre
// que estedentro de una funcion async.
// const obtenerPersonajes = async() => {
//     try {
//         const res = await fetch('https://rickandmortyapi.com/api/character')
//         const data = await res.json()
//         // console.log(data.results)
//         data.results.forEach( elemento => console.log(elemento.name) )
//     } catch (error) {
//         console.log(error)
//     }
// }

// obtenerPersonajes()

// Practica...

// const obtenerPersonajes = async() => {
//     try{
//         const res = await fetch('https://rickandmortyapi.com/api/character')
//         const data = await res.json()
//         // console.log(data.results)
//         data.results.forEach( elemento => console.log(elemento.name, elemento.id, elemento.status))
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// obtenerPersonajes()


//? map() 
//Es un metodo que crea un nuevo array con los resultados de la llamada
// a la funcion indicada aplicados a cada uno de sus elementos.

// const obtenerPersonajes = async() => {
//     try {
//         const res = await fetch('https://rickandmortyapi.com/api/character')
//         const data = await res.json()
//         // console.log(data.results)
//         const arrayNombres = data.results.map( personajes => personajes.name)  // El map() va a tomar una funcion de flecha, donde su parametros sera cada uno de nuestros objetos.
//         console.log(arrayNombres)
//     } catch (error) {
//         console.log(error)
//     }
// }

// obtenerPersonajes()

// // Practica
// const arrayId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const recorrido = arrayId.map( recorrido => console.log(recorrido) )


//? filter()

// Este metodo crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada.

// const obtenerPersonajes = async() => {
//     try {
//         const res = await fetch('https://rickandmortyapi.com/api/character')
//         const data = await res.json()
//         // console.log(data.results)
//         const arrayNombres = data.results.filter( personajes => personajes.name === 'Rick Sanchez')
//         //TODO practicando
//         const arrayNombres2 = data.results.filter( personajes => personajes.name !== 'Rick Sanchez')
//         const arrayNombres3 = data.results.filter( personajes => personajes.id > 9)
//         console.log(arrayNombres)
//         console.log(arrayNombres2)
//         console.log(arrayNombres3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// obtenerPersonajes()