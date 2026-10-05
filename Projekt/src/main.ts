const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){
    
    addButton?.addEventListener('click',(e) =>{
        
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField?.value});
        inputTextField.value='';
        buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("border","border-2","rounded","p-2","shadow");

        let container2 = document.createElement("div");
        container2.classList.add("card");

        let title = document.createElement('h3');
        let id = document.createElement('p');
        let deleteB = document.createElement('button');
        deleteB.textContent="Delete";
        deleteB.classList.add("btn-danger","btn","w-100","p-3");

        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;

        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(deleteB);
    
        todosContainer?.appendChild(container);
        
    });
}