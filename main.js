//                                  PRODUCTOS
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

let total= 0;
const listaCarrito= ()=> {
    canvasCarrito.className= "carritoCanvas";
    canvasCarrito.innerHTML="";
    if(carrito.length > 0){
        carrito.forEach((producto, codigo)=>{
            total = total + producto.precio * producto.cantidad;
            const carritoFinal = document.createElement("div");
            carritoFinal.classList.add("d-flex" , "font" , "T-sizeS");
            carritoFinal.innerHTML=`
            <img class="w-05 productoCanvas" src="${producto.imagen}"/>
            <div class="w-100 productoCanvas ">${producto.nombre}</div>
            <div class="w-100 productoCanvas"> Cantidad: ${producto.cantidad}</div>
            <div class="w-100 productoCanvas"> Precio: $${producto.precio}</div>
            <div class="w-100 productoCanvas"> Subtotal: $${producto.precio * producto.cantidad}</div>
            <button type="button" class="w-10 productoCanvas btn-close btn-close-white" id="eliminar" onClick="eliminarCodigo(${codigo})"></button>
            `;
        canvasCarrito.appendChild(carritoFinal);
        });
        const totalFinal = document.createElement("div");
        totalFinal.className= "my-1";
        totalFinal.innerHTML= `
        <div class="totalStyle font T-sizeM my-1">Total: $${total}</div>
        <button class="finCompra btn-secondary btn-more2 text-decoration-none" onClick="">Finalizar Compra</button>`
        canvasCarrito.appendChild(totalFinal);
    } else {
        canvasCarrito.classList.remove("carritoCanvas")
    }
}

const eliminarCodigo = (codigo)=> {
    carrito.splice(codigo,1);
    listaCarrito();
}

