let nombre = prompt("Bienvenido, ingrese su nombre");
alert("Hola "  + nombre + ", Vamos a conocer la secuencia Fibonacci")

let respuesta = prompt("Digite 0 para comenzar la secuencia");

while (respuesta != "0"){
    
    respuesta = prompt("Ingrese un numero valido");
}

var a,b,resultado;
a=0;
b=1;
resultado=b;

for (var i = 1; i < 15; i++){
    resultado = a + b;
        a=b;
        b=resultado;
    alert(`El siguiente numero de la secuencia es ${resultado}`)
}

alert("Gracias por consultar la secuencia Fibonacci, Hasta pronto!");