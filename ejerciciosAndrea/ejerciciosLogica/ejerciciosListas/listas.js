// 1) Quita el primer elemento de un array de frutas.

let frutas = ["Durazno", "Manzana", "Sandia"];
frutas.shift();

// 2) Agrega un número al final de un array de números.

let numeros = [10, 20, 30, 45];
numeros.push(50);

// 3) Agrega un elemento al principio de un array de palabras.

let palabras = ["memoria", "espada", "anciano"];
palabras.unshift("mejoras");

// 4) Elimina el último elemento de un array de colores.

let colores = ["rojo", "verde", "azul"];
colores.pop();

// 5) Extrae una porción de un array sin modificar el original.

let numbers = [1,2,3,4,5,6,7,8,9,10];
let porcion = numbers.slice(0,4);

// 6) Reemplaza un elemento en una posición específica del array.

let libros = ["El fantasma de la Opera", "Éxodo", "Maus"];
libros[0] = "La casa de los espíritus";

// 7) Une los elementos de un array de palabras en un solo string separado por espacios.

let antes = ["cartas", "parque",  "escuela", "inocencia", "energía", "SUEÑOS"];
let junto = antes.join("-");

// 8) Ordena alfabéticamente un array de nombres.

let names = ["Lucas", "Noelia", "Alma", "Ciro", "Maxi", "Irene", "Gustavo", "Vera", "Ezequiel", "Pablo", "Jacobo"];
names.sort();

// 10) Invierte el orden de los elementos de un array.

//let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.reverse();

// 11) Verifica si un valor específico existe dentro del array.

//let names = ["Lucas", "Noelia", "Alma", "Ciro", "Maxi", "Irene", "Gustavo", "Vera", "Ezequiel", "Pablo", "Jacobo"];
names.includes("Lucas");
