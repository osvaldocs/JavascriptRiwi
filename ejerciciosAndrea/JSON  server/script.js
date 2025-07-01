fetch("http://localhost:3000/tareas")
  .then(response => response.json())
  .then(data => console.log("GET:", data))
  .catch(error => console.error("Error en GET:", error));