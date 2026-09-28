"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        arrayOfTodos.push({ id: arrayOfTodos.length, title: inputTextField?.value });
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body");
        let container2 = document.createElement("div");
        container2.classList.add("card");
        let title = document.createElement('h3');
        let id = document.createElement('p');
        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;
        container.appendChild(title);
        container.appendChild(id);
        container2.appendChild(container);
        todosContainer?.appendChild(container2);
    });
}
