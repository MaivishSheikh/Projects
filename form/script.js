function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    
    // Get the value of the input
    var todoText = todoInput.value.trim();
  
    if (todoText !== "") {
      // Create a new list item
      var listItem = document.createElement("li");
      listItem.textContent = todoText;
  
      // Add delete button
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        todoList.removeChild(listItem);
      };
  
      listItem.appendChild(deleteButton);
  
      // Append the new list item to the list
      todoList.appendChild(listItem);
  
      // Clear the input field
      todoInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  