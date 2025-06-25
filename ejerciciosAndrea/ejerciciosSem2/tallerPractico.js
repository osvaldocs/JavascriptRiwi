/* Parte 1: Arrays orientados al DOM
Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.
*/

let container = document.getElementById("container");
let numeros = document.getElementById("numeros");
let frases = document.getElementById("frases");
let tarjeta = document.getElementById("tarjeta");
let song = document.getElementById("cancion");
let listaUl = document.getElementById("listaUl");
let usuarios = document.getElementById("usuarios");
let libros = document.getElementById("libros");

let colores = ["auzl", "blanco", "rojo", "verde", "violeta", "naranja"];

colores.forEach(color => {container.innerHTML += `<p>El color ${color} es espléndido</p>`});

// A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: <p>). Esto te ayudará a simular contenido que luego iría al DOM.

let arrayFrases = ["Confia en vos", "vos podés", "tu esfuerzo va rendir frutos"];

let nuevaFrases = arrayFrases.map(frase =>`<p>${frase}</p>`);
frases.innerHTML = nuevaFrases.join("");


//Recorre un array de números y devuelve otro array de <li> con cada número. Piensa que será una lista HTML para mostrar luego en pantalla.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nuevoNumeros = numbers.map(numero =>`<li>${numero}</li>`);
numeros.innerHTML += nuevoNumeros.join(""); 

tarjeta.style.display = "inline-block";
tarjeta.style.border = "2px solid black";
tarjeta.style.boxShadow = "4px 2px 2px rgba(0, 0, 0, 0.3)";
tarjeta.style.padding = "10px";
tarjeta.style.margin = "10px";


/*Parte 2: Objetos pensados para mostrarse
Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.
*/


const persona = {
    nombre: "pablo",
    edad: 33,
    ocupacion: "coder"
};
for (let clave in persona) {
    tarjeta.innerHTML += `<p>${clave}: ${persona[clave]}.<p/>`;
}

// A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM.


const cancion = {
    titulo: "Blackbird",
    artista: "The beatles",
    duracion: "2:19"
};

for (let clave in cancion) {
    song.innerHTML += `<div>${clave}: ${cancion[clave]}.</div>`;
}

// Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.

const producto = {
    nombre: "detergente",
    precio: 4500,
    stock: 20
};

for (let clave in producto) {
    listaUl.innerHTML += `<li>${clave}: ${producto[clave]}</li>`
}


// Parte 3: Listas de Objetos enfocadas en visualización
// Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto.


const users = [

    {nombre: "Pablo", correo: "pablo@gmail.com"},
    {nombre: "Maria", correo: "maria@gmail.com"},
    {nombre: "Susana", correo: "susana@gmail.com"},
    {nombre: "Maxi", correo: "maxi@gmail.com"},
    {nombre: "Cielo", correo: "cielo@gmail.com"},

];

const formatedUsers = users.map(u => `<div class="tarjeta-usuarios"> <h3>${u.nombre}</h3> <p>${u.correo}</p></div>`);
usuarios.innerHTML = formatedUsers.join("");

let tarjetas = document.querySelectorAll(".tarjeta-usuarios");

tarjetas.forEach(t => {
t.style.display = "inline-block";
t.style.border = "2px solid black";
t.style.boxShadow = "4px 2px 2px rgba(0, 0, 0, 0.3)";
t.style.padding = "10px";
t.style.margin = "10px";
});


// Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un <li>.

let books = [
    {
        titulo: "El eternauta",
        autor: "Osterheld",
        año: 1957
    },

    {
        titulo: "El lider que no tenia cargo",
        autor: "Robin Sharma",
        año: 2010
    },

    {
        titulo: "Cinco cerditos",
        autor: "Agatha Christie",
        año: 1942
    }
];

for (let libro of books) {libros.innerHTML += `<li>Título: ${libro.titulo} - Año: ${libro.año} - Autor: ${libro.autor}</li>`};



// Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

const tareas = [
    {descripcion: "ejercicios Andrea", completada: true },
    {descripcion: " training desarrollo", completada: false },
    {descripcion: "training ingles", completada: false },
    {descripcion: "tarea Sebastian", completada: false },
    {descripcion: "training Habilidades para la vida", completada: false },
];

