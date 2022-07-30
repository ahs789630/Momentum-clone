const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const toDoText = document.querySelector('#todo-form span');
const TODOS_KEY= 'todos';

let toDos= [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodoObj){
    const li = document.createElement('li');
    li.id= newTodoObj.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText='X';
    button.addEventListener('click',deleteTodo );
    li.appendChild(span);
    li.appendChild(button);
    span.innerText= newTodoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value='';
    const newTodoObj ={
        text: newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedToDos= JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

if(savedUsername === null) {
    toDoText.classList.add(HIDDEN_CLASSNAME);
    toDoInput.classList.add(HIDDEN_CLASSNAME);
    
}
else{
    toDoText.classList.remove(HIDDEN_CLASSNAME);
    toDoInput.classList.remove(HIDDEN_CLASSNAME);
}
