fetch ("http://localhost:3000/tasks")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("container");

    data.forEach(task => {
        container.innerHTML += `
        <div style = "border: 1px solid grey; padding: 10px; margin: 10px;">
        <h2>${task.title}</h2>
        <p>Descripcion: ${task.description}</p>
        <p>Estado de la tarea: ${task.complete ? "Si ✅" : "No ❌"}</p>
        </div>`
        
    })
}) 
.catch (error => {
    console.log("Ocurrio un error:", error);
})

async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    
    data.forEach(task => {
        container.innerHTML += `
        <div style = "border: 1px solid grey; padding: 10px; margin: 10px;">
        <h2>${task.title}</h2>
        <p>Descripcion: ${task.description}</p>
        <p>Estado de la tarea: ${task.complete ? "Si ✅" : "No ❌"}</p>
        </div>`
        
    })
    
    console.log("GET:", data);
  } catch (error) {
    console.error("Error en GET:", error);
  }
}

getPosts();