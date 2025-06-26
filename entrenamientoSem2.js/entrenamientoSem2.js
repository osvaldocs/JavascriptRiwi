//Creamos un objeto que contiene a otros objetos.
const productos = {
    
    producto1: {
        id: 1,
        nombre: "detergente",
        precio: 4500
    },

    producto2: {
        id: 2,
        nombre: "esponja",
        precio: 1500
    },

    producto3: {
            id: 3,
            nombre: "trapera",
            precio: 6000
        }
    };

//recorremos el objeto con un for in, e imprimimos las claves y valores de los objetos, con un template literal. 
for (let clave in productos) {console.log(`el producto ${productos[clave].nombre}, con ID: ${productos[clave].id}, tiene un precio de: ${productos[clave].precio}`) };


//Se crea un Set con los valores del objeto contenedor por medio del metodo Object.values(). Set no permite contener 2 elementos iguales.
const nuevoSet = new Set(Object.values(productos));
for(let valor of nuevoSet) {console.log(valor)};


//Creamos un mapa y agregamos claves y valores con el metodo .set()
const mapa = new Map();
mapa.set("limpieza", "detergente");
mapa.set("cocina", "esponja");
mapa.set("hogar", "trapera");


//Acá le aplicamos a mapa el metodo forEach().
//  IMPORTANTE: La firma de parámetros del forEach aplicado a un Map es (valor, clave) y no (clave, valor)
mapa.forEach(function(valor, clave) {
    console.log(`La clave del mapa es: ${clave}, y su valor es: ${valor}`);
});

























































