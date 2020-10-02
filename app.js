//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//events listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//function
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target; //when we click something target keep that
    //delete todo
    console.log(item);
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement; //go todo`s parent(div class:todo)
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });

    }
    //check mark
    if (item.classList[0] == "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }

}