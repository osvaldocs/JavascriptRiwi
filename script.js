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
let edad = prompt("Ingresa tu edad:")
console.log(`Tienes ${edad} años`);

// 3.2 Usa alert() para mostrar un mensaje de bienvenida.
let alerta = alert("Bienvenido!")

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
