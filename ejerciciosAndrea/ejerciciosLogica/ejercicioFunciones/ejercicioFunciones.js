/* 1) Saludo personalizado
Crea una función llamada saludar que reciba un nombre como parámetro y devuelva un saludo del tipo: "Hola, [nombre]!".*/

function saludar(nombre) {
    
    return `Hola ${nombre}! , ¿Cómo va?.`;
}

saludar("Pablo");

/* 2) Suma de dos números
Escribe una función sumar que reciba dos números como parámetros y retorne su suma.*/

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 5));

/* 3) Número par o impar
Crea una función llamada esPar que reciba un número y devuelva true si es par, o false si es impar.*/

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/* 4) Calcular el área de un rectángulo
Define una función areaRectangulo que reciba base y altura como argumentos y devuelva el área.*/

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(2, 4));

/* 5) Convertir grados Celsius a Fahrenheit
Escribe una función celsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula:
F = C * 1.8 + 32*/

function celsiusAFahrenheit(temperatura) {
    const fahrenheit = (temperatura * 1.8) + 32;
    return fahrenheit;
}

console.log(celsiusAFahrenheit(28));