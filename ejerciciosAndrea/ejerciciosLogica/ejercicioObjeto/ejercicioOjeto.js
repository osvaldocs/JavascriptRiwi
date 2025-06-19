// 1) Crea un objeto persona con las propiedades: nombre, edad y ciudad.

// cons variable = {dentro van las propiedades ej: color: azul,} 
const persona = {
    nombre: "Pablo",
    edad: 33,
    ciudad: "Medellin"
};

// 2) Muestra el valor de una propiedad específica del objeto persona.

console.log(persona.nombre);

// 3) Modifica el valor de una propiedad existente en un objeto libro.

const libro = {
    nombre: "Martin Fierro",
    tapaDura: true,
    formato: "físico"
};

libro.formato = "digital";
console.log(libro.formato);

// 4) Agrega una nueva propiedad a un objeto auto.

const auto = {
    marca: "Ford",
    año: 2020,
    color: "azul"
}

auto.blindado = true;
console.log(auto);

// 5) Recorre un objeto estudiante con un bucle y muestra todas sus claves y valores.

const estudiante = {
    esPuntual: false,
    clan: "lovelace",
    lenguajePref: "Java",
    trabaja: false
}

for (let key in estudiante) {
    console.log(`${key}: ${estudiante[key]}`);
}