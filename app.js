// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// "click" event didn't work, so change to "input" or "change"
filterOption.addEventListener("change", filterTodo);

// function
function addTodo(e){
    // prevent form from submitting ( browser default behavior)
    e.preventDefault();
    // create todo div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add('todo')
    // create Li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to todo-list
    todoList.appendChild(todoDiv)
    // clear input files
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        // wait till the animation(transition) finished, it'll excuate the function
        todo.addEventListener('transitioned', function(){
            todo.remove();
        });
    }
    //  check mark
    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos);
    // console.log(e.target)
    console.log(e.target.value)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}





