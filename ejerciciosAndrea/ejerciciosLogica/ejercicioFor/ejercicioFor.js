// Sin listas (solo números o strings)

/* 1) Imprimir los caracteres de una palabra
Usa for...of para recorrer una palabra letra por letra e imprimir cada letra.*/

let palabra = "paralelogramo";

for (let letra of palabra){
    console.log(letra);
}

/* 2)Contar del 1 al 5 usando for clásico
Usa un bucle for para imprimir los números del 1 al 5.*/

for (let i = 1; i <=5; i++) {
    console.log(i);
}

/* 3) Mostrar la posición de cada letra en una palabra usando for...in
Usa for...in para recorrer una palabra e imprimir el índice y el carácter en esa posición.*/

let word = "recorrido";
for (let posicion in word) {
    console.log("la posicion de la letra ", word[posicion], " es: ", posicion);
}

/* 4) Recorrer una lista de nombres usando for...of
Dado un array de nombres, imprime "Hola, [nombre]" usando for...of.*/

let names = ["Lucas", "Noelia", "Alma", "Ciro", "Maxi", "Irene", "Gustavo", "Vera", "Ezequiel", "Pablo", "Jacobo"];
for (nombres of names) {
    console.log(nombres);
}

/* 5) Imprimir índices de una lista usando for...in
Usa for...in para imprimir los índices de un array de colores.*/

let colores = ["rojo", "verde", "azul"];
for (let indice in colores) {
    console.log(indice);
}

/* 6) Imprimir índice y valor de cada número en un array
Usa for...in para obtener el índice y luego acceder al valor en la misma línea. */

let numeros = [3, 6, 9, 11, 25, 33, 35, 39, 68, 73];
for (let indice in numeros) {
    console.log(numeros[indice], "es el valor del índice", indice);
}