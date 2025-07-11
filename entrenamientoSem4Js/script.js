
const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (!nameInput || !ageInput) {
        console.error("The form elements do not exist.");
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userAge", age);
        displayData();
    } else {
        alert("Please enter a valid name and numerical age.");
    }
});

function displayData() {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    const outputDiv = document.getElementById("output");

    while(outputDiv.firstChild) {
        outputDiv.removeChild(outputDiv.firstChild);
    }

    const p = document.createElement("p");

    if (name && age) {
        p.textContent = `Hello ${name}, you are ${age} years old.`;
        
    }   else {
        p.textContent = "No data stored.";
    }

    outputDiv.appendChild(p);
}

window.onload = displayData;

if (!sessionStorage.getItem("interactionCount")) {
    sessionStorage.setItem("interactionCount", 0);
}

function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem("interactionCount"));
    count++;
    sessionStorage.setItem("interactionCount", count);
    console.log(`Interactions in this session: ${count}`);
}

document.getElementById("saveButton").addEventListener("click", updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", updateInteractionCount);

document.getElementById("clearButton").addEventListener("click", ()=> {
    localStorage.clear();
    displayData();
});