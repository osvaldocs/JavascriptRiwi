/*🎯 OBJETIVO
Simular una receta de sopa con pasos asíncronos. En uno de los pasos ocurrirá un error, y debe capturarse con try/catch.

🧾 CONSIGNAS
Creá una función async llamada prepararSopa.

Dentro de la función, usá un bloque try { ... } catch (error) { ... }.

Paso a paso:

Paso 1: setTimeout de 1 segundo. Mensaje: "🥔 Pelando papas...". Luego resolve().

Paso 2: setTimeout de 1 segundo. Mensaje: "🔥 Hirviendo agua...". Luego resolve().

Paso 3: setTimeout de 1 segundo. Mensaje: "🥕 Agregando verduras...". Luego usá reject("No hay verduras 😭") para simular error.

Paso 4: console.log("🍲 ¡La sopa está lista!"); → Este paso no debe ejecutarse si hay error en el paso 3.

En el catch, mostrale al usuario el error con console.log("❌ Error:", error);

Llamá a la función al final con prepararSopa();

*/

// Declaramos la función asincrona con la palaba await.
async function prepararSopa() {

    // Encerramos toda la lógica de la función en un try-catch.
    try {
        // Utilizamos la palabra reservada await para detener la ejecución hasta que la promesa creada con new Promise() se resuelva.
        await new Promise(resolve => {
            // Utitilizamos la función setTimeout() para simular un retraso de (n) ms.
            setTimeout(() => {
                console.log("🥔 Pelando papas...");
                // Resolvemos la promesa con un valor.
                resolve("Papas peladas.");
            }, 1000);
        });

        await new Promise(resolve => {
            setTimeout(() => {
                console.log("🔥 Hirviendo agua...");
                resolve("Agua hervida.");
            }, 1000);
        });

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("🥕 Agregando verduras...");
                // Acá utilizamos la funcion Math.random() para resolver la promesa aleatoriamente, con resolve o reject. Utilizamos también operador ternario.
                Math.random() > 0.5
                ? resolve("Verduras agregadas.")
                : reject("No hay verduras 😭");
            }, 1000);
        });

        await new Promise(resolve => {
            setTimeout(() => {
                console.log("🍽️ Sirviendo sopa...");
                resolve("🍲 ¡La sopa está lista!");
            }, 1000);
        });
    // Si alguna promesa es rejected, capturamos el error en un catch y lo imprimimos en un console.log().  
    } catch (error) {
        console.log("Error durante la preparacion", error);
    }
}

// Invocamos a la función.
prepararSopa();