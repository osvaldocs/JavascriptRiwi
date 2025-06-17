/*Parte 1: Explorando JavaScript
1.1 Explica con tus palabras qué es JavaScript y en qué se diferencia de HTML y CSS.

Por lo que veo, es un lenguaje, que sirve tanto para back como para front. Supongo que es mas complejo que html y css. ya que estos solo son para front.

1.2 Enumera al menos tres características principales de JavaScript.

Es un lenguaje interpretado. Sirve tanto para front como back. Se puede ejecutar en navegador. Brinda interactividad a las paginas.

1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?

Que se va ejecutando línea por línea. No necesita un compilador. Como lo dice, se basa en eventos realizados por el usuario, por ej hacer clicks, scroll, etc. o notificacion del sistema u otras aplicaciones.*/

// 2.1 Declara una variable nombre y asígnale tu nombre. Luego, muestra un saludo en la consola que diga "Hola, [nombre]".
let nombre = "Pablo";
console.log(`hola, ${nombre}.`);

// 2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().
let entero = 10;
let decimal = 7.5;
let cadena = "Esto es una cadena.";
console.log(`${entero}, ${decimal}, ${cadena}`);

// 2.3 Declara una constante llamada PI con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.

const PI = 3.1416;
console.log(PI);
// si intento reemplazar la constante me tira un  Typerror: Assignment to constant variable.
// PI = 45;

// 2.4 Declara una variable sin asignarle valor. Muestra en consola qué contiene.
// En vscode no imprime nada, pero ejecutando en otro compilador online sale: undefined

let sinValor;
console.log(sinValor);

// 2.5 Crea una variable con valor null y otra con un valor booleano. Muestra ambos en consola.
// Ejecutando fuera de vs code, imprime: null, true.

let valorNull = null;
let valorBool = true;

console.log(`${valorNull}, ${valorBool}`);

// 3.1 Usa prompt() para pedirle al usuario su edad y guárdala en una variable. Luego, muestra en consola un mensaje que diga "Tienes [edad] años".
let edad = prompt("Ingresa tu edad:");
console.log(`Tienes ${edad} años`);

// 3.2 Usa alert() para mostrar un mensaje de bienvenida.
let alerta = alert("Bienvenido!");

// 3.3 Usa confirm() para preguntar al usuario si desea continuar. Muestra en consola el valor que devuelve esta función.
confirm("continuar?");

// 4.1 Declara dos variables numéricas. Realiza y muestra los resultados de las siguientes operaciones: suma, resta, multiplicación, división y módulo.
let num1 = 15;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 4.2 Declara dos variables con cadenas de texto y únelas en una nueva variable usando el operador de concatenación.
let texto1 = "soy el texto 1. ";
let texto2 = "Y yo soy el texto2.";

let texto3 = texto1 + texto2;
console.log(texto3);

/*  4.3 Evalúa y muestra en consola el resultado de las siguientes comparaciones:
5 == "5"
5 === "5"
true && false
false || true
!true
 */

console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);

// 5.1 Crea un programa que pida al usuario un número y muestre en consola si es mayor, menor o igual a 10.
let numero = prompt("Ingresá un número:");
if (numero > 10) {
    console.log("Tu número es mayor que 10");
} else if (numero < 10) {
    console.log("Tu número es menor que 10");
} else {
    console.log("Tu número es 10");
}

// 5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.
let nombreUsuario = prompt("Ingresá tu nombre de usuario:");

if (nombreUsuario == "Admin") {
    console.log("Bienvenido maestro de la programación.");
} else if (nombreUsuario != "Admin") {
    console.log("Bienvenido...");
}

// 5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar. 
let number = prompt("Ingresá un número:");
let confirmacion = (number % 2 === 0) ? "Tu número es par." : "Tu número es impar.";
console.log(confirmacion);

/* 6.1 Muestra diferentes tipos de mensajes en la consola:

Un mensaje informativo (console.info)
Un mensaje de advertencia (console.warn)
Un mensaje de error (console.error)
Un grupo de mensajes (console.group y console.groupEnd)
El tiempo que tarda un bloque de código en ejecutarse (console.time y console.timeEnd)
 */

// Este es solo un mensaje informativo.
console.info("El programa arraco con éxito");

// Este mensaje es para comunicarle al desarrollador, un comportamiento que podría llevar a un error.
console.warn("Conviene usar ';' al final de cada sentencia");

// Mensaje para indicarnos algun error del programa
console.error("Error al cargar el archivo");

// Por lo que entendí, este mensaje se utiliza para agrupar console.log sobre elementos relacionados. se abre con console.group() y se finaliza con console.groupEnd().
console.group("Información del Usuario");
console.log("Nombre: Juan Pérez");
console.log("Edad: 30");
console.groupEnd();

// consele.time se utiliza para medir el tiempo que se demora el codigo encerrado entre console.time() y console.timeEnd()
console.time("Prueba");

//codigo a medir

console.timeEnd("Prueba");

// 7.1 Escribe un pequeño bloque de código donde utilices comentarios de una línea y de varias líneas para explicar lo que hace cada parte.

/* Este es un comentario
en varias 
lineas*/

// 8.1 Crea un archivo HTML y vincúlalo con un archivo .js externo. En ese archivo:
/*Declara tres variables: nombre, edad, y ciudad.
Pide al usuario su nombre, edad y ciudad mediante prompt().
Muestra esa información formateada en consola con una frase como:
"Hola [nombre], tienes [edad] años y vives en [ciudad]."*/

let name = prompt("Ingresá tu nombre");
let age = prompt("Ingresá tu edad");
let city = prompt("¿En qué ciudad vivis?");

console.log(`Hola ${name}, tenés ${age} años y vivís en ${city}.`);
