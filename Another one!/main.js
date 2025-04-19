
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasksContainer = document.querySelector("#tasks");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const taskText = input.value.trim();
      if (!taskText) {
        alert("Please enter a task.");
        return;
      }
  
      const task = document.createElement("div");
      task.className = "task";
      task.innerHTML = `
        <div class="content">
          <input type="text" class="text" value="${taskText}" readonly />
        </div>
        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
  
      const editButton = task.querySelector(".edit");
      const deleteButton = task.querySelector(".delete");
      const taskInput = task.querySelector(".text");
  
      editButton.addEventListener("click", () => {
        const isEditing = editButton.textContent === "Edit";
        taskInput.readOnly = !isEditing;
        editButton.textContent = isEditing ? "Save" : "Edit";
        if (isEditing) taskInput.focus();
      });
  
      deleteButton.addEventListener("click", () => {
        task.remove();
      });
  
      tasksContainer.appendChild(task);
      input.value = ""; // Clear input
    });
  });
  