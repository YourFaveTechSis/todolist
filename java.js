const todoList = [];

renderToDoList()



function renderToDoList(){
    let toDoListhtml=""
    todoList.forEach((toDoObject, index)=>{
        const { name, dueDate } = toDoObject
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-toDo-button js-delete-toDo-button">Delete</button>
        `
        toDoListhtml += html 
    })
    document.querySelector(".js-todo-list").innerHTML = toDoListhtml

    document.querySelectorAll(".js-delete-toDo-button").forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
        todoList.splice(index, 1);
        renderToDoList();
    })
})
}

document.getElementById("button").addEventListener("click", ()=>{
    addTodo()
})


function addTodo() {
    const inputElement = document.getElementById("input-el")
    const name = inputElement.value

    const dateElement = document.getElementById('date')
    const dueDate = dateElement.value

    todoList.push({
        name,dueDate
    })
    inputElement.value=""

    renderToDoList();
}