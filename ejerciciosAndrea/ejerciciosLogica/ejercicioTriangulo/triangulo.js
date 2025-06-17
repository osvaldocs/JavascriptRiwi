/* Escribe un programa que reciba tres números positivos que representan las longitudes de los lados de un triángulo. El programa debe determinar si los lados forman un triángulo válido y, si es válido, clasificarlo como:

Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si los lados no forman un triángulo válido, muestra un mensaje de error.

Regla para validar un triángulo:
La suma de las longitudes de dos lados siempre debe ser mayor que el tercer lado.*/

let numeros = []; // Declaramos un array vacío.

// Comenzamos con un bucle for que se repite 3 veces, para pedir los 3 lados del triángulo.
for (let i = 0; i < 3; i++) { 
let numero = Number(prompt("Ingresa un número positivo:"));

    // Mediante un while verificamos que el número ingresado sea mayor que 0, en caso contrario vuelve a pedir el número.
    while (numero <= 0) {
        numero = Number(prompt("Ingresa un número mayor a 0:"));
    }

    // Una vez se ingresó el num positivo, se guarda en el array vacio.
    numeros.push(numero);
}


// Primero verificamos que formen un triángulo válido, las sumas de dos lados siempre tienen que ser mayor que el 3ero.
if (numeros[0] + numeros[1] > numeros[2] && numeros[0] + numeros[2] > numeros[1] && numeros[1] + numeros[2] > numeros[0]) {

    // Una vez verificado, simplemente los clasificamos con un if else-if.
    if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
        console.log("Tu triángulo es equilatero");
    } else if (numeros[0] === numeros[1] || numeros[1] === numeros[2] || numeros[0] === numeros[2]) {
        console.log("Tu triángulo es Isósceles");
    } else {
        console.log("Tu triángulo es Escaleno");
    }
} else {
    // En caso que los lados no sean válidos, lanzamos un mensaje de error.
    console.error("Los números ingresados no forman un triángulo válido");
}
