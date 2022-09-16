//                  PRODUCTOS
let productos = [
    {
        id: 1,
        nombre: "Berlin",
        precio: 1000,
        imagen: "img/m-13.png",
    },
    {
        id: 2,
        nombre: "Paris",
        precio: 400,
        imagen: "img/m-14.png",
    },
    {
        id: 3,
        nombre: "Dublin",
        precio: 500,
        imagen: "img/m-15.png",
    },
    {
        id: 4,
        nombre: "Moscu",
        precio: 300,
        imagen: "img/m-16.png",
    },
    {
        id: 5,
        nombre: "Roma",
        precio: 400,
        imagen: "img/m-17.png",
    },
    {
        id: 6,
        nombre: "Havana",
        precio: 500,
        imagen: "img/m-18.png",
    },
];
//                      LISTA PRODUCTOS
const listaProductos = () => {
    let contenedor = document.getElementById("container");
    productos.forEach((producto, codigo) => {
        let card = document.createElement("div");
        card.classList.add("card", "border-dark", "bg-dark", "m-auto", "w-30");
        card.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn-secondary btn-more2 text-decoration-none" onClick="carritoAdd(${codigo})">Agregar al carrito</a>
        </div>`;
        contenedor.appendChild(card);
    });
};
//                      CARRITO
listaProductos();
let carrito = [];
let canvasCarrito = document.getElementById("carritoCanvas");

const carritoAdd = (codigo) => {
    const codigoProducto = carrito.findIndex((item) => {
        return item.id === productos[codigo].id
    });
    if (codigoProducto === -1) {
        const itemAdd = productos[codigo]
        itemAdd.cantidad = 1;
        carrito.push(itemAdd);
        listaCarrito();
    } else {
        carrito[codigoProducto].cantidad += 1;
        listaCarrito();
    }
};
//                      TOTAL CARRITO
let total = document.getElementById('precioTotal')

const listaCarrito = () => {
    canvasCarrito.className = "carritoCanvas";
    canvasCarrito.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach((producto, codigo) => {
            const carritoFinal = document.createElement("div");
            carritoFinal.classList.add("d-flex", "font", "T-sizeS");
            carritoFinal.innerHTML = `
            <img class="w-05 productoCanvas" src="${producto.imagen}"/>
            <div class="w-100 productoCanvas ">${producto.nombre}</div>
            <div class="w-100 productoCanvas"> Cantidad: ${producto.cantidad}</div>
            <div class="w-100 productoCanvas"> Precio: $${producto.precio}</div>
            <div class="w-100 productoCanvas"> Subtotal: $${producto.precio * producto.cantidad}</div>
            <button type="button" class="w-10 productoCanvas btn-close btn-close-white" id="eliminar" onClick="eliminarCodigo(${codigo})"></button>
            `;
            canvasCarrito.appendChild(carritoFinal);
            total.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
        });
        //                  BOTON FINALIZAR COMPRA
        const totalFinal = document.createElement("div");
        totalFinal.className = "botoncompra";
        totalFinal.innerHTML = `
        <div class="form py-3">
            <h3 class="font d-flex justify-content-center">Ingrese sus datos</h3>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre Y Apellido" aria-label="Nombre Y Apellido" name="name" id="name">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Telefono" aria-label="Telefono" name="phone" id="phone">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" name="adress" id="adress">
                </div>
            </div>
		</div>
        <button class="finCompra font btn-secondary btn-more2 text-decoration-none d-flex justify-content-center" id="enviarInfo" onClick="(mostrarCliente)">Finalizar Compra</button>
        `
        canvasCarrito.appendChild(totalFinal);
        let boton = document.getElementById("enviarInfo");
        boton.addEventListener("click", cargarCliente);
        //                  EVENTO TECLA ENTER
        var input = document.getElementById("adress");
        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("enviarInfo").click();
        }
        });
    } else {
        canvasCarrito.classList.remove("carritoCanvas")
    }
}
//                          BORRA ITEMS DEL CARRITO
const eliminarCodigo = (codigo) => {
    carrito.splice(codigo, 1);
    listaCarrito();
    total.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
}
//                          FORMULARIO DE CLIENTE
class Cliente {
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

// capturar elementos
function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("adress").value;
    let cliente1 = new Cliente(nombre, telefono, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
}
//eliminar elementos
function mostrarCliente(cliente) {
    let formulario = document.getElementById("cliente");
    formulario.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `
    <div class="alert alert-success m-4" role="alert">
        <h4 class="alert-heading">¡${cliente.nombre}, Muchas Gracias!</h4>
        <p>Sus datos fueron ingresados y su compra fue exitosa.</p>
        <hr>
        <p class="mb-0">Dentro de las proximas 48hs recibira su pedido en: ${cliente.direccion}.</p>
    </div>`;
    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
}