// 1. Fetch simple (GET)
// Se usa para obtener datos de una URL.
// Por defecto, fetch hace una solicitud GET.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta');
    }
    return response.json(); // Parsear la respuesta JSON
  })
  .then(data => {
    console.log('Datos recibidos (GET simple):', data);
  })
  .catch(error => {
    console.error('Error en fetch simple:', error);
  });

// 2. Fetch con método POST
// Enviar datos a un servidor, como crear un nuevo recurso.
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Método HTTP POST
  headers: {
    'Content-Type': 'application/json' // Tipo de contenido JSON
  },
  body: JSON.stringify({ // Convertir objeto JS a JSON string
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta POST:', data);
  })
  .catch(error => {
    console.error('Error en fetch POST:', error);
  });

// 3. Fetch con método PUT
// Actualizar un recurso existente en el servidor.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT', // Método HTTP PUT
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'titulo actualizado',
    body: 'contenido actualizado',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta PUT:', data);
  })
  .catch(error => {
    console.error('Error en fetch PUT:', error);
  });

// 4. Fetch con método DELETE
// Eliminar un recurso en el servidor.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE' // Método HTTP DELETE
})
  .then(response => {
    if (response.ok) {
      console.log('Recurso eliminado correctamente');
    } else {
      throw new Error('Error al eliminar');
    }
  })
  .catch(error => {
    console.error('Error en fetch DELETE:', error);
  });

// 5. Fetch con manejo avanzado de errores y async/await
// Uso de async/await para hacer el código más legible.
async function fetchDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Error en la respuesta');
    }
    const data = await response.json();
    console.log('Datos con async/await:', data);
  } catch (error) {
    console.error('Error en fetch async/await:', error);
  }
}

fetchDatos();
