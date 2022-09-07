//                                  INICIO DE APP
iniciarApp();
function iniciarApp(){
    alert("Bienvenido a Cervezas Tacuara")
    console.log("Bienvenido, iniciando compra...");
    nombreUsuario();
}
//                                  FUNCTION USUARIO
function nombreUsuario(){}
    let usuario = prompt("Ingrese su nombre:");
    console.log(`El cliente es: ${usuario}`);
//                                  PRODUCTOS
const lata1 = {
    nombre : "Ipa San Fernando",
    stock : 30,
    precio : 300,
    disponible : false,
};
const lata2 = {
    nombre : "Ipa Sorachi",
    stock : 30,
    precio : 400,
    disponible : true,
};
const lata3 = {
    nombre : "Jim Morrison",
    stock : 30,
    precio : 500,
    disponible : true,
};
//                                      ARRAYS

const array1 = [lata1, lata2, lata3];
delete lata1.stock;
delete lata2.stock;
delete lata3.stock;

const nuevoPrecio = [lata1, lata2, lata3]

lata1.precio = 400;
lata2.precio = 500;
lata3.precio = 600;
producto();
//                                  SWICH/FUNCTION PRODUCTO
function producto(){
    let action = prompt(`${usuario} ¿Que lata de cerveza desea adquirir?
    1: Ipa San Fernando
    2: Ipa Sorachi
    3: Jim Morrison
    4: Salir
    `);
    switch(action){
        case "1":
            console.log(`Lata de Ipa San Fernando tiene un valor de: $${lata1.precio}`);
            break;
        case "2":
            console.log(`Lata de Ipa Sorachi tiene un valor de: $${lata2.precio}`);
            break;
        case "3":
            console.log(`Lata de Jim Morrison tiene un valor de: $${lata3.precio}`);
            break;
        case "4":
            console.log(`Gracias por su visita ${usuario}`);
            break;
        default:
            console.log(`${usuario} No ingreso una opcion valida.`);
        }   
        //                              TOTAL IPA SANFER
        
        if (action === "1"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de ${lata1.nombre} desea adquirir?`))
        sumaSanfer();
        function sumaSanfer(){
            return cantidad * lata1.precio;
        }
        let resultado = sumaSanfer(cantidad, lata1.precio)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado}`);
        mas();
        
        //                              TOTAL IPA SORACHI
        
    } else if (action === "2"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de ${lata2.nombre} adquirir?`))
            sumaSorachi();
        function sumaSorachi(){
            return lata2.precio * cantidad;
        }
        let resultado2 = sumaSorachi(cantidad, lata2.precio)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado2}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado2}`);
        mas();
        
        //                                  TOTAL JIM MORRISON
        
    } else if (action === "3"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de ${lata3.nombre} desea adquirir?`))
            sumaJim();
        function sumaJim(){
        return cantidad * lata3.precio;
        }
        let resultado3 = sumaJim(cantidad, lata3.precio)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado3}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado3}`);
        mas();
        
        //                                  SALIR
        
    }else if (action === "4"){
            alert(`Gracias por su visita ${usuario} ¡Hasta Pronto!`)
        } else {
            alert (`${usuario} no ingreso una opcion valida`);
        }
    //                                      DESEA ALGO MAS

    function mas(){
        let mas = prompt(`${usuario} ¿Desea adquirir otro producto? 1. Si | 2. No`)
        if (mas === "1"){
            producto();
        }
        else if (mas === "2"){
            out();
        }
    }
    
//                                      FUNCTION DE SALIDA


function out(){
    console.log(`${usuario} ¡La compra fue exitosa!`)
}
    alert(`Gracias por su visita ${usuario} ¡Hasta Pronto!`)
}



