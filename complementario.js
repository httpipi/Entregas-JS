let nombre = prompt("Ingrese su nombre");
alert("Hola "  + nombre + ", Vamos a conocer la secuencia Fibonacci")

let respuesta = Number(prompt("Ingrese 0 para comenzar"));
do {
    respuesta = Number(prompt("Ingrese 0 para comenzar"));
    console.log(respuesta)
} while (respuesta === 0);

var a,b,resultado;
a=0;
b=1;
resultado=b;

for (var i = 1; i < 20; i++){
    resultado = a + b;
        a=b;
        b=resultado;
    alert(`El siguiente numero de la secuencia es ${resultado}`)
}