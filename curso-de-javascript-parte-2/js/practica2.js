const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')
const fragment = document.createDocumentFragment()
const botones = document.querySelectorAll('.card .btn')

const carritoObjeto = {}

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    carritoObjeto[producto.titulo] = producto
}

botones.forEach( btn => btn.addEventListener('click', agregarAlCarrito))
