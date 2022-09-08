//                                  INICIO DE APP
iniciarApp();
function iniciarApp() {
    alert("Bienvenido a Sucupots");
    console.log("Bienvenido, iniciando compra...");
    nombreUsuario();
}
//                                  FUNCTION USUARIO
function nombreUsuario() { }
let usuario = prompt("Ingrese su nombre:");
console.log(`El cliente es: ${usuario}`);
//                                  PRODUCTOS

const maceta1 = {
    nombre: "Berlin",
    precio: 1000,
    disponibles: true,
};
const maceta2 = {
    nombre: "Paris",
    precio: 400,
    disponibles: true,
};
const maceta3 = {
    nombre: "Dublin",
    precio: 500,
    disponibles: true,
};
const maceta4 = {
    nombre: "Moscu",
    precio: 300,
    disponibles: true,
};
const maceta5 = {
    nombre: "Roma",
    precio: 400,
    disponibles: true,
};
const maceta6 = {
    nombre: "Havana",
    precio: 500,
    disponibles: false,
};
//                                      ARRAYS

maceta1.precio = 1000;
maceta2.precio = 1000;
maceta3.precio = 1000;
maceta4.precio = 1000;
maceta5.precio = 1000;
maceta6.precio = 1000;

maceta1.disponibles = 15;
maceta2.disponibles = 10;
maceta3.disponibles = 10;
maceta4.disponibles = 0;
maceta5.disponibles = 23;
maceta6.disponibles = 10;

producto();
//                                  SWICH/FUNCTION PRODUCTO
function producto() {
    let action = prompt(`Hola ${usuario} ¿Que maceta Sucupot desea adquirir?
    1: Berlin
    2: Paris
    3: Dublin
    4: Moscu
    5: Roma
    6: Havana
    7: Salir
    `);
    switch (action) {
        case "1":
            console.log(
                `La maceta ${maceta1.nombre} tiene un valor de: $${maceta1.precio}`
            );
            break;
        case "2":
            console.log(
                `La maceta ${maceta2.nombre} tiene un valor de: $${maceta2.precio}`
            );
            break;
        case "3":
            console.log(
                `La maceta ${maceta3.nombre} tiene un valor de: $${maceta3.precio}`
            );
            break;
        case "4":
            console.log(
                `La maceta ${maceta4.nombre} tiene un valor de: $${maceta4.precio}`
            );
            break;
        case "5":
            console.log(
                `La maceta ${maceta5.nombre} tiene un valor de: $${maceta5.precio}`
            );
            break;
        case "6":
            console.log(
                `La maceta ${maceta6.nombre} tiene un valor de: $${maceta6.precio}`
            );
            break;
        case "7":
            break;
        default:
            console.log(`${usuario} No ingreso una opcion valida.`);
            producto();
    }
    //                                      TOTAL MACETA 1
    if (action === "1") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta1.nombre} desea adquirir? La cantidad disponible es de ${maceta1.disponibles}`)
        );
        suma1();
        function suma1() {
            return cantidad * maceta1.precio;
        }
        let resultado = suma1(cantidad, maceta1.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado}`
        );
        mas();
        //                                  TOTAL MACETA 2
    } else if (action === "2") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta2.nombre} desea adquirir? La cantidad disponible es de ${maceta2.disponibles}`)
        );
        suma2();
        function suma2() {
            return maceta2.precio * cantidad;
        }
        let resultado2 = suma2(cantidad, maceta2.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado2}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado2}`
        );
        mas();
        //                                  TOTAL MACETA 3
    } else if (action === "3") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta3.nombre} desea adquirir? La cantidad disponible es de ${maceta3.disponibles}`)
        );
        suma3();
        function suma3() {
            return cantidad * maceta3.precio;
        }
        let resultado3 = suma3(cantidad, maceta3.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado3}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado3}`
        );
        mas();
        //                                  TOTAL MACETA 4
    } else if (action === "4") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta4.nombre} desea adquirir? La cantidad disponible es de ${maceta4.disponibles}`)
        );
            suma4();
        function suma4() {
            return cantidad * maceta4.precio;
        }
        let resultado4 = suma4(cantidad, maceta4.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado4}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado4}`
        );
        mas();
        //                                  TOTAL MACETA 5
    } else if (action === "5") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta5.nombre} desea adquirir? La cantidad disponible es de ${maceta5.disponibles}`)
        );
        suma5();
        function suma5() {
            return cantidad * maceta5.precio;
        }
        let resultado5 = suma5(cantidad, maceta5.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado5}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado5}`
        );
        mas();
        //                                  TOTAL MACETA 6
    } else if (action === "6") {
        let cantidad = Number(
            prompt(`${usuario} ¿Cuantas macetas ${maceta6.nombre} desea adquirir? La cantidad disponible es de ${maceta6.disponibles}`)
        );
        suma6();
        function suma6() {
            return cantidad * maceta6.precio;
        }
        let resultado6 = suma6(cantidad, maceta6.precio);
        console.log(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado6}`
        );
        alert(
            `${usuario} llevando ${cantidad} macetas su compra seria de: $${resultado6}`
        );
        mas();
        //                                      SALIR
    } else if (action === "7") {
        salir();
    } else {
        alert(`${usuario} no ingreso una opcion valida`);
    }
    
    //                                      DESEA ALGO MAS
    function mas() {
        let mas = prompt(`${usuario} ¿Desea adquirir otro producto? 1. Si | 2. No`);
        if (mas === "1") {
            producto();
        } else if (mas === "2") {
        out();
        }
    }
    //                                          FUNCTION DE SALIDA
    function out() {
        console.log(`${usuario} ¡El pedido se agrego al carrito!`);
    }
    alert(`Gracias por visitar Sucupots ${usuario}!`);

    function salir(){
        alert(`Gracias por visitar Sucupots ${usuario} ¡Hasta Pronto!`);
    }
}
