/* Parte 1: Arrays orientados al DOM
Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.

A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: <p>). Esto te ayudará a simular contenido que luego iría al DOM.

Recorre un array de números y devuelve otro array de <li> con cada número. Piensa que será una lista HTML para mostrar luego en pantalla.*/

let container = document.getElementById("container");
let tarjeta = document.getElementById("tarjeta");
let song = document.getElementById("cancion");
let listaUl = document.getElementById("listaUl");

let colores = ["auzl", "blanco", "rojo", "verde", "violeta", "naranja"];

colores.forEach((color) => {container.innerHTML += `<p>El color ${color} es espléndido</p>`});

let frases = ["Confia en vos", "vos podés", "tu esfuerzo va rendir frutos"];

let nuevaFrases = colores.map(frase => {frase = `<p>${frase}<p>`});

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nuevoNumeros = numeros.map(numero => {numero = `<li>${numero}</li>`});



/*Parte 2: Objetos pensados para mostrarse
Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.

A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM.

Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.*/


const persona = {
    nombre: "pablo",
    edad: 33,
    ocupacion: "coder"
};
for (let clave in persona) {
    tarjeta.innerHTML += `<p>${clave}: ${persona[clave]}.<p/>`;
}

const cancion = {
    titulo: "Blackbird",
    artista: "The beatles",
    duracion: "2:19"
};

for (let clave in cancion) {
    song.innerHTML += `<div>${clave}: ${cancion[clave]}.</div>`;
}

const producto = {
    nombre: "detergente",
    precio: 4500,
    stock: 20
};

for (let clave in producto) {
    listaUl.innerHTML
}

Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto.

Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un <li>.

Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

