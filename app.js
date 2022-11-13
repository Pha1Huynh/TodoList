var addBtn = document.querySelector('.add-btn');
var dataInput = document.querySelector('.data-input');
var deleteBtn = document.querySelector('.todo-item i');
var todoList = document.querySelector('.todo-list');
var ci = document.querySelector('container-input');
var todoListsArray = [
]



addBtn.onclick = function() {
    var dataLc = JSON.parse(localStorage.getItem('todoLcStr'));
    
    if(dataLc) {
        dataLc.push({
            id: todoListsArray.length,
            name: dataInput.value.trim(),
            isCompleted: false
        });
        localStorage.setItem('todoLcStr', JSON.stringify(dataLc));

    }
    else {
        todoListsArray.push({
            id: todoListsArray.length,
            name: dataInput.value.trim(),
            isCompleted: false
        });
        localStorage.setItem('todoLcStr', JSON.stringify(todoListsArray));

    }

    renderTodo();
    dataInput.value = '';
    dataInput.focus();

}




function start() {
    renderTodo();
}
start();
function renderTodo() {
    var result = JSON.parse(localStorage.getItem('todoLcStr')).map((item,index) => {
        return `
        <li class="todo-item num-${index}" onclick=hanldeCheckComplete(${index})>
            <span class="todo-name">${item.name}</span>
            <i class="fa-solid fa-trash" onclick=handleDelete(${index})></i>
        </li>
        `;
    })
    
    todoList.innerHTML = result.join('');
}

function handleDelete(id) { 
    
    
    var dataLc = JSON.parse(localStorage.getItem('todoLcStr'));
    dataLc.splice(id,1)
    console.log(dataLc);
    localStorage.setItem('todoLcStr', JSON.stringify(dataLc));

    renderTodo();
    //renderTodo();
}
function hanldeCheckComplete(id) {
    var dataLc = JSON.parse(localStorage.getItem('todoLcStr'));
    var todoItem = document.querySelector('.num-'+id);
    todoItem.classList.toggle('completed');
    
    
    
}
