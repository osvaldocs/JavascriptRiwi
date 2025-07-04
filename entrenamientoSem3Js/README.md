
# Entrenamiento Semana 3 – CRUD con Fetch y JSON Server

Este proyecto es un ejercicio práctico de la Semana 3 del entrenamiento de JavaScript. Consiste en implementar operaciones básicas **CRUD** (Create, Read, Update, Delete) utilizando `fetch` para consumir una API REST simulada con **JSON Server**.

## 🧠 Objetivo

Poner en práctica el uso de `async/await`, manejo de errores con `try/catch`, validación de datos y simulación de peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`) a una API local.

## 📁 Estructura del proyecto

.
├── db.json # Base de datos falsa con productos
└── gestion_api.js # Lógica del CRUD con fetch y async/await

markdown
Copiar
Editar

## 🛠️ Tecnologías utilizadas

- JavaScript ES6+
- JSON Server (para simular una API REST local)
- Node.js (para correr JSON Server)

## 📦 Requisitos previos

- Tener instalado Node.js
- Instalar JSON Server de forma global:

```bash
npm install -g json-server
```
🚀 Cómo ejecutar el proyecto
Iniciar el servidor JSON:

bash
Copiar
Editar
json-server --watch db.json --port 3000
Ejecutar el script principal:

Desde un entorno que soporte JavaScript (por ejemplo, el navegador usando Live Server o una consola con Node.js):

bash
Copiar
Editar
node gestion_api.js
El archivo main() ejecuta todas las operaciones en orden: leer, crear, actualizar, eliminar y volver a leer productos.

📋 Funcionalidades
GET: Obtener todos los productos
js
Copiar
Editar
getPosts();
Muestra en consola la lista actual de productos desde el servidor local.

POST: Crear un nuevo producto
js
Copiar
Editar
createPost();
Valida y agrega un nuevo producto si es válido.

PUT: Actualizar un producto existente
js
Copiar
Editar
updatePost();
Modifica un producto por ID, después de validarlo.

DELETE: Eliminar un producto por ID
js
Copiar
Editar
deleteProduct(2);
Borra el producto con ID "2" del servidor.

validateProduct(product)
Función de utilidad que verifica que un producto tenga:

name definido

price numérico y mayor a 0

📌 Notas
El proyecto usa una base de datos simulada (db.json) con una colección de productos.

Para ver los cambios en tiempo real, podés abrir http://localhost:3000/products en el navegador mientras el servidor está corriendo.
