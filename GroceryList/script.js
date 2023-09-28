const groceryList = [{ id: 1, item: "bread" }, { id: 2, item: "milk" }];
const form = document.getElementById("form");
const formInput = document.getElementById("formInput");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    addItemToList(formInput.value);
    formInput.value = "";
});

function renderPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    groceryList.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "itemDiv"
        const itemTitle = document.createElement("p");
        itemTitle.className = "itemTitle"
        const delBtn = document.createElement("button");
        delBtn.className = "delBtn"
        delBtn.innerHTML = "&#10060;";
        itemTitle.textContent = item.item;
        delBtn.addEventListener("click", () => {
            deleteItem(item.id);
            renderPage();
        });

        itemDiv.append(itemTitle, delBtn);
        content.append(itemDiv);
    });
}

function addItemToList(itemName) {
    const newItem = {
        id: groceryList.length + 1,
        item: itemName,
    };

    groceryList.push(newItem);
    renderPage(); 
}

function deleteItem(itemId) {
    const index = groceryList.findIndex((item) => item.id === itemId);

    if (index !== -1) {
        groceryList.splice(index, 1);
    }
}
renderPage();