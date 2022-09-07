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
    let ipaSanfer = 300
    let ipaSorachi = 400
    let jimMorri = 500
    
producto();
//                                  SWICH/FUNCTION PRODUCTO
function producto(){}
    let action = prompt(`${usuario} ¿Que lata de cerveza desea adquirir?
    1: Ipa San Fernando
    2: Ipa Sorachi
    3: Jim Morrison
    4: Salir
    `);
    switch(action){
        case "1":
            console.log(`Lata de Ipa San Fernando tiene un valor de: $${ipaSanfer}`);
            break;
        case "2":
            console.log(`Lata de Ipa Sorachi tiene un valor de: $${ipaSorachi}`);
            break;
        case "3":
            console.log(`Lata de Jim Morrison tiene un valor de: $${jimMorri}`);
            break;
        case "4":
            console.log(`Gracias por su visita ${usuario}`);
            break;
        default:
            console.log(`${usuario} No ingreso una opcion valida.`);
        }
        producto();
        //                              TOTAL IPA SANFER
        if (action === "1"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de Ipa San Fernando desea adquirir?`))
            sumaSanfer();
        function sumaSanfer(cantidad, ipaSanfer){
            return cantidad * ipaSanfer;
            }
        let resultado = sumaSanfer(cantidad, ipaSanfer)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado}`);
        out();
        //                              TOTAL IPA SORACHI
        } else if (action === "2"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de Ipa Sorachi desea adquirir?`))
            sumaSorachi();
        function sumaSorachi(){
            return ipaSorachi * cantidad;
        }
        let resultado2 = sumaSorachi(cantidad, ipaSorachi)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado2}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado2}`);
        out();
        //                              TOTAL JIM MORRISON
        } else if (action === "3"){
        let cantidad = Number(prompt(`${usuario} ¿Cuantas latas de Jim Morrison desea adquirir?`))
            sumaJim();
        function sumaJim(cantidad, jimMorri){
        return cantidad * jimMorri;
    }
        let resultado3 = sumaJim(cantidad, jimMorri)
        console.log(`${usuario} llevando ${cantidad} su compra seria de: $${resultado3}`)
        alert(`${usuario} llevando ${cantidad} su compra seria de: $${resultado3}`);
        out();
        //                                  SALIR
        }else if (action === "4"){
            alert(`Gracias por su visita ${usuario} ¡Hasta Pronto!`)
        } else {
            alert (`${usuario} no ingreso una opcion valida`);
        }
//                                      FUNCTION DE SALIDA
function out(){
    console.log(`${usuario} ¡Compra exitosa!`)
    alert(`Gracias por su visita ${usuario} ¡Hasta Pronto!`)
}
