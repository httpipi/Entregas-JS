//                                      LISTA PRODUCTOS
const listaProductos = document.querySelector("#container")

let productos = []

const productoFetch = async()=>{
    const resp = await fetch("/data.json")
    const data = await resp.json()
    data.forEach((producto, codigo)=>{
        const card  = document.createElement("div")
                card.classList.add("card", "border-dark", "bg-dark", "m-auto", "w-30")
                card.innerHTML = `
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button type="button" class="btn-secondary pointer btn-more2 text-decoration-none" onClick="carritoAdd(${codigo})">Agregar al carrito</button>
                </div>`;
                listaProductos.append(card)
                productos.push(producto)
        })
}
productoFetch();

//                                      CARRITO
let canvasCarrito = document.getElementById("carritoCanvas");

const carritoAdd = (codigo) => {
    const codigoProducto = carrito.findIndex((item) => {
        return item.id === productos[codigo].id;
    })
    if (codigoProducto === -1) {
        const itemAdd = productos[codigo];
        itemAdd.cantidad = 1;
        carrito.push(itemAdd)
        Swal.fire({                 
            position: "center",
            icon: "success",
            title: "Producto Agregado",
            showConfirmButton: false,
            background: "#212529",
            color: "#f5f0f0",
            timer: 1000,
        });
        actStorage(carrito);
        listaCarrito();
    } else {
        carrito[codigoProducto].cantidad += 1;
        Swal.fire({                 
            position: "center",
            icon: "success",
            title: "Producto Agregado",
            showConfirmButton: false,
            background: "#212529",
            color: "#f5f0f0",
            timer: 1000,
        });
        actStorage(carrito);
        listaCarrito();
    }
};
//                                      TOTAL CARRITO
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
        //                          BOTON FINALIZAR COMPRA
        const totalFinal = document.createElement("div");
        totalFinal.className = "botoncompra";
        totalFinal.innerHTML = `
        <div class="form py-3">
            <h3 class="font d-flex justify-content-center">Ingrese sus datos</h3>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre Y Apellido" aria-label="Nombre Y Apellido" name="name" id="name" required>
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
        //                          EVENTO TECLA ENTER
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
//                                  BORRA ITEMS DEL CARRITO
const eliminarCodigo = (codigo) => {
    carrito.splice(codigo, 1);
    actStorage(carrito);
    listaCarrito();
    total.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
}
//                                  FORMULARIO DE CLIENTE
class Cliente {
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

//                                  CAPTURAR ITEMS
function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("adress").value;
    let cliente1 = new Cliente(nombre, telefono, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
}
//                                  ELIMINAR ITEMS
function mostrarCliente(cliente) {
    let formulario = document.getElementById("cliente");
    formulario.innerHTML = "";
    //                              AGREGAR ITEMS
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
//                                          JSON

const actStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
//                                    ARRAY CARRITO 
//(esta parte la tuve que poner aca por que sino me daba error de que no podia inicar una funcion antes de declararla necesito saber si puede estar ahi o donde deberia ubicarla para no recibir ese error originalmente estaba en la linea "58")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [] // OPERADOR LOGICO "OR" INCORPORADO
    actStorage(carrito);
    listaCarrito();
