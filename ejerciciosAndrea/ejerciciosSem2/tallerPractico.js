// Declaramos variables conectadas al DOM
let container = document.getElementById("container");
let numeros = document.getElementById("numeros");
let frases = document.getElementById("frases");
let tarjeta = document.getElementById("tarjeta");
let song = document.getElementById("cancion");
let listaUl = document.getElementById("listaUl");
let usuarios = document.getElementById("usuarios");
let libros = document.getElementById("libros");
let tareas = document.getElementById("tareas");

/* Parte 1: Arrays orientados al DOM 
1. Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito".
*/

let colores = ["azul", "blanco", "rojo", "verde", "violeta", "naranja"];
colores.forEach(color => {
    container.innerHTML += `<p>El color ${color} es espléndido</p>`;
});

/* 
2. A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: <p>).
*/

let arrayFrases = ["Confía en vos", "vos podés", "tu esfuerzo va a rendir frutos"];
let nuevaFrases = arrayFrases.map(frase => `<p>${frase}</p>`);
frases.innerHTML = nuevaFrases.join("");

/*
3. Recorre un array de números y devuelve otro array de <li> con cada número. 
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nuevoNumeros = numbers.map(numero => `<li>${numero}</li>`);
numeros.innerHTML += nuevoNumeros.join("");

/* Parte 2: Objetos pensados para mostrarse 
1. Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.
*/

tarjeta.style.display = "inline-block";
tarjeta.style.border = "2px solid black";
tarjeta.style.boxShadow = "4px 2px 2px rgba(0, 0, 0, 0.3)";
tarjeta.style.padding = "10px";
tarjeta.style.margin = "10px";

const persona = {
    nombre: "Pablo",
    edad: 33,
    ocupacion: "coder"
};

for (let clave in persona) {
    tarjeta.innerHTML += `<p>${clave}: ${persona[clave]}.</p>`;
}

/*
2. A partir de un objeto que representa una canción, crea una estructura HTML en formato <div> que contenga esa información.
*/

const cancion = {
    titulo: "Blackbird",
    artista: "The Beatles",
    duracion: "2:19"
};

for (let clave in cancion) {
    song.innerHTML += `<div>${clave}: ${cancion[clave]}.</div>`;
}

/*
3. Dado un objeto con múltiples propiedades, construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.
*/

const producto = {
    nombre: "detergente",
    precio: 4500,
    stock: 20
};

for (let clave in producto) {
    listaUl.innerHTML += `<li>${clave}: ${producto[clave]}</li>`;
}

/* Parte 3: Listas de Objetos enfocadas en visualización
1. Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> con esa info formateada como tarjeta.
*/

const users = [
    { nombre: "Pablo", correo: "pablo@gmail.com" },
    { nombre: "Maria", correo: "maria@gmail.com" },
    { nombre: "Susana", correo: "susana@gmail.com" },
    { nombre: "Maxi", correo: "maxi@gmail.com" },
    { nombre: "Cielo", correo: "cielo@gmail.com" }
];

const formatedUsers = users.map(u => `
    <div class="tarjeta-usuarios">
        <h3>${u.nombre}</h3>
        <p>${u.correo}</p>
    </div>
`);
usuarios.innerHTML = formatedUsers.join("");

// Aplicar estilos a las tarjetas
let tarjetas = document.querySelectorAll(".tarjeta-usuarios");
tarjetas.forEach(t => {
    t.style.display = "inline-block";
    t.style.border = "2px solid black";
    t.style.boxShadow = "4px 2px 2px rgba(0, 0, 0, 0.3)";
    t.style.padding = "10px";
    t.style.margin = "10px";
});

/*
2. Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor".
*/

let books = [
    { titulo: "El eternauta", autor: "Oesterheld", año: 1957 },
    { titulo: "El líder que no tenía cargo", autor: "Robin Sharma", año: 2010 },
    { titulo: "Cinco cerditos", autor: "Agatha Christie", año: 1942 }
];

for (let libro of books) {
    libros.innerHTML += `<li>Título: ${libro.titulo} - Año: ${libro.año} - Autor: ${libro.autor}</li>`;
}

/*
3. Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
*/

const tasks = [
    { descripcion: "ejercicios Andrea", completada: true },
    { descripcion: "training desarrollo", completada: false },
    { descripcion: "training inglés", completada: false },
    { descripcion: "tarea Sebastian", completada: false },
    { descripcion: "training Habilidades para la vida", completada: false }
];

function clasificadorTareas(listaTareas) {
    const contenido = listaTareas.map(tarea =>
        tarea.completada
            ? `<li>✅ ${tarea.descripcion}</li>`
            : `<li>❌ ${tarea.descripcion}</li>`
    ).join("");
    return `<ul>${contenido}</ul>`;
}

tareas.innerHTML = clasificadorTareas(tasks);
