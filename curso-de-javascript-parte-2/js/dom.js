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

// const h1 = document.getElementById('tituloWeb')
// const boton = document.querySelector('.btn-primary')

// boton.addEventListener('click', () => {
//     console.log('me diste click!')
//     h1.textContent = 'texto desde js'
//     h1.style.color = 'red'
// })


//? createElement

// const lista = document.querySelector('#lista')

// const arrayPaises = ['Peru', 'Bolivia', 'Colombia']

// arrayPaises.forEach( pais => {
//     const li = document.createElement('li')
//     li.textContent = pais
//     lista.appendChild(li)
// })

// // arrayPaises.forEach(pais => {
// //     lista.innerHTML += `<li>${pais}</li>`
// // })


//? Fragment / insertBefore

// const lista = document.querySelector('#lista')

// const arrayPaises = ['Peru', 'Mexico', 'Colombia']

// const fragment = document.createDocumentFragment()
// // const fragment = new DocumentFragment()

// arrayPaises.forEach( pais => {
//     const newNode = document.createElement('li')
//     newNode.textContent = pais

//     const referenceNode = fragment.firstChild
    
//     fragment.insertBefore(newNode, referenceNode)
// })

// lista.appendChild(fragment)

//todo Practica

// const lista = document.querySelector('#lista')

// const arrayPaises = ['Peru', 'Mexico', 'Colombia']

// const fragment = document.createDocumentFragment()

// {/* <li class="list">
//     <b>Pais:</b>
//     <span class="text-primary">Aqui va el pais</span>
// </li> */}

// arrayPaises.forEach( pais => {

//     const li = document.createElement('li')
//     li.className = 'lista'

//     const b = document.createElement('b')
//     b.textContent = 'Pais: '

//     const span = document.createElement('span')
//     span.className = 'text-primary'
//     span.textContent = pais

//     li.appendChild(b)
//     li.appendChild(span)
    
//     fragment.appendChild(li)

// })

// lista.appendChild(fragment)


//todo practica hecha mas simple con innerHTML

// const lista = document.querySelector('#lista')

// const arrayPaises = ['Peru', 'Mexico', 'Colombia']

// const fragment = document.createDocumentFragment()

// arrayPaises.forEach( pais => {
//     lista.innerHTML += `
//         <li class="list">
//             <b>Pais:</b>
//             <span class="text-primary">${pais}</span>
//         </li>
//     `
// })


//? Template

// const lista = document.querySelector('#lista')
// const fragment = document.createDocumentFragment()
// const liTemplate = document.querySelector('#liTemplate')

// const arrayPaises = ['Peru', 'Mexico', 'Colombia']

// const clickPaises = (e) => console.log('Me diste click', e.target)

// arrayPaises.forEach( pais => {

//     const clone = liTemplate.content.firstElementChild.cloneNode(true)
//     clone.querySelector('span').textContent = pais

//     clone.addEventListener('click', clickPaises)

//     fragment.appendChild(clone)

// })

// lista.appendChild(fragment)



// const clone = liTemplate.content.cloneNode(true)

// clone.querySelector('.text-primary').textContent = 'Agregue a travez de un template'

// lista.appendChild(clone)



//? 