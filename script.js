// 2.1 Declara una variable nombre y asígnale tu nombre. Luego, muestra un saludo en la consola que diga "Hola, [nombre]".
let nombre = "Pablo";
console.log(`hola, ${nombre}.`) 

// 2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().
let entero = 10;
let decimal = 7.5;
let cadena = "Esto es una cadena."
console.log(`${entero}, ${decimal}, ${cadena}`)

// 2.3 Declara una constante llamada PI con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.

const PI = 3.1416;
console.log(PI)
// si intento reemplazar la constante me tira un  Typerror: Assignment to constant variable.
// PI = 45;
