
// Declaramos variables con prompts pidiendo los datos al usuario.
let nombre = prompt("Ingresá tu nombre:");
let edad = prompt("Ingresá tu edad:");


// Acá se intenta transformar el string edad a número.
edad = parseInt(edad, 10);

while (nombre.trim() === "") {
     nombre = prompt("Por favor ingresá un nombre sin espacios vacíos");
}
// Acá se filtra de una vez si el numero es negativo o no es un número, así obviamos doble validación en la función.
while (edad <= 0 || isNaN(edad)) {
     edad = parseInt(prompt(`Error :Ingresa un número válido para determinar tu edad`), 10);
}

// Quizá no sea lo recomendable acá, pero utilicé función flecha para practicar sintaxis y operador ternario.
const esMayor = (edad) => {return edad <= 18 ? `Hola ${nombre}, sos menor de edad, aprovechá para seguir aprendiendo.` : `Hola ${nombre}, sos mayor de edad, ¿estás preparado para iniciar tu carrera profesional?`};

alert(esMayor(edad)); // Invocamos la función para que se ejecute el programa, y nos muestre un mensaje de alerta.