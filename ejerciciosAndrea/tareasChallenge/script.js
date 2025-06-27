let input = document.getElementById("description");
let form = document.getElementById("task-form");
let taskDiv = document.getElementById("task-list");
let button = document.getElementById("button");
const arrayTasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const task = input.value.trim();
    console.log(`tarea: ${task}, fue guardado correctamente`)

    if (task === "") {
        alert("Please place a valid task")
    return }
    
    const taskObj = {description: task, complete: false}

    arrayTasks.push(taskObj);
    console.log(`el objeto: ${JSON.stringify(taskObj)}, fue guardado en el array correctamente`)
    showTasks();
    input.value = "";     
})


function showTasks() {
    taskDiv.innerHTML = "";

    arrayTasks.forEach(obj => {taskDiv.innerHTML += `<div>${obj.description}<button id="button">Mark as completed</button></div>`});
}

button.addEventListener("click", function() {
    
})