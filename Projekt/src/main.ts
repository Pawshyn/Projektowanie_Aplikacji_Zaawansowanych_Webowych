const addButton: HTMLButtonElement|null = document.querySelector("#todoADDButton");
const inputTextField: HTMLInputElement|null=document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[]=[];

if (addButton && inputTextField && todosContainer){
    addButton?.addEventListener('click',(e)=>{
        let wynik=inputTextField.value;
        let newTodo: Todo = {id: arrayOfTodos.length, title: wynik}

        arrayOfTodos.push(newTodo);

        inputTextField.value='';

        boilList();
    }) 
}
function boilList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(todo => {
    let container=document.createElement("div");
    container.classList.add('todo-item');
    let title= document.createElement("h1");
    let id=document.createElement("p");
    
    title.textContent="Tytuł: " + todo.title;
    id.textContent="ID: " + Element.bind;

    container.appendChild(title);
    container.appendChild(id);

    todosContainer?.appendChild(container);
    })
}