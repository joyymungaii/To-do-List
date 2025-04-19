// Let me add references to the 3 main elements

let addToDoButton = document.getElementById('addToDo'); // The "Add" button
let toDoContainer = document.getElementById('toDocontainer'); // The container that will contain the tasks
let inputField = document.getElementById('inputField'); // The input field for entering a task

// For the Add button
addToDoButton.addEventListener('click', function () {
    // Create a new paragraph element to hold the task
    var paragraph = document.createElement('p');

    // Add a class for styling (assumes you have .paragraph-styling in your CSS)
    paragraph.classList.add('paragraph-styling');

    // Set the text of the paragraph to whatever the user typed
    paragraph.innerText = inputField.value;

    // Add the paragraph (task) to the to-do list container
    toDoContainer.appendChild(paragraph);

    // Clear the input field after adding the task
    inputField.value = "";

    // Add click event to toggle a line-through style (mark as completed)
    paragraph.addEventListener('click', function () {
        if (paragraph.style.textDecoration === "line-through") {
            paragraph.style.textDecoration = "none";
        } else {
            paragraph.style.textDecoration = "line-through";
        }
    });

    // Add double-click event to delete the task
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    });
});
