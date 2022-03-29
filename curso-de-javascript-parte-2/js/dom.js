//? document

// console.log('asasdd')

// console.log(document)
// console.log(document.head)
// console.log(document.title)


//? getElementById()

// console.log(document.getElementById('tituloWeb'))
// console.log(document.getElementById('tituloWeb').textContent)

//? script, DOMContent, Loaded y defer

// document.addEventListener('DOMContentLoader', () => {
//     console.log(document.getElementById('tituloWeb'))
//     console.log(document.getElementById('tituloWeb').textContent)
// })


// console.log(document.getElementById('tituloWeb'))
// console.log(document.getElementById('tituloWeb').textContent)

//? querySelector() - Es un meotodo.

// console.log(document.querySelector('#tituloWeb'))
// console.log(document.querySelector('.text-primary'))
// console.log(document.querySelector('h1'))

// console.log(document.querySelector('.text-danger')) // Selecciona el primer elemento que encuentra
// console.log(document.querySelectorAll('.text-danger')) // Selecciona todos los elementos
// console.log(document.querySelectorAll('.container .text-danger')) // Selecciona unicamente las clases que estan dentro del text-danger.


//? querySelector vs getElementById

// Es poquito mas rapido
// console.log(document.getElementById('#tituloWeb')) 

// mas lento por menos
// console.log(document.querySelector('.text-primary'))


//? element 

// const h1 = document.getElementById("tituloWeb")

// h1.textContent = "Nuevo texto desde js"
// h1.style.backgroundColor = 'red';
// h1.style.color = 'white';
// console.log(h1.textContent)

//? Eventos (addEventListener)

// const h1 = document.getElementById("tituloWeb")

// h1.textContent = "Nuevo texto desde js"
// h1.style.backgroundColor = 'red';
// h1.style.color = 'white';
// console.log(h1.textContent)

const h1 = document.getElementById('tituloWeb')
const boton = document.querySelector('.btn-primary')

boton.addEventListener('click', () => {
    console.log('me diste click!')
    h1.textContent = 'texto desde js'
    h1.style.color = 'red'
})


