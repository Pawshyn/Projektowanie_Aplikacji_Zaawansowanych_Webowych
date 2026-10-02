"use strict";
const addButton = document.querySelector("#addButton");
const inputName = document.querySelector("#name");
const inputCategory = document.querySelector("#category");
const inputEAN = document.querySelector("#ean");
const inputLocation = document.querySelector("#location");
const todosContainer = document.querySelector("#addedProducts");
let arrayOfProducts = [];
if (addButton && inputName && inputCategory && inputEAN && inputLocation && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        arrayOfProducts.push({ name: inputName?.value, category: inputCategory?.value, ean: inputEAN?.value, location: inputLocation?.value });
        inputName.value = '';
        inputCategory.value = '';
        inputEAN.value = '';
        inputLocation.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfProducts.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("container");
        let name = document.createElement('h3');
        let EAN = document.createElement('p');
        let category = document.createElement('p');
        let location = document.createElement('p');
        name.textContent = "Nazwa produktu: " + element.name;
        EAN.textContent = "Kod EAN: " + element.ean;
        category.textContent = "Kategoria: " + element.category;
        location.textContent = "Lokalizacja: " + element.location;
        container.appendChild(name);
        container.appendChild(EAN);
        container.appendChild(category);
        container.appendChild(location);
        todosContainer?.appendChild(container);
    });
}
