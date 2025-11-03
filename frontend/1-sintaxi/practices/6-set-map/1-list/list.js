"use strict";
const itemInput = document.getElementById('item-input');
const itemContainer = document.getElementById('item-container');
const addItemBtn = document.getElementById('add-item');
const removeItemBtn = document.getElementById('remove-item');
const clearItemsBtn = document.getElementById('clear-items');
const saveItemsBtn = document.getElementById('save-items');
const itemsSet = new Set();
const itemsHistoryKey = 'itemsSetHistory';
function persistItemsHistory() {
    const itemsArray = [];
    itemsSet.forEach(it => itemsArray.push(it));
    localStorage.setItem(itemsHistoryKey, JSON.stringify(itemsArray));
}
function addItem() {
    const item = itemInput.value.trim();
    if (item && !itemsSet.has(item)) {
        itemsSet.add(item);
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemContainer.appendChild(itemElement);
        itemInput.value = '';
    }
    else {
        alert('Item already exists in the list.');
    }
}
function removeItem() {
    const item = itemInput.value.trim();
    if (item && itemsSet.has(item)) {
        if (confirm('Are you sure you want to remove this item?')) {
            itemsSet.delete(item);
            Array.from(itemContainer.children).forEach(child => {
                if (child.textContent === item) {
                    itemContainer.removeChild(child);
                }
            });
            itemInput.value = '';
        }
    }
    else {
        alert('Item not found in the list.');
    }
}
function clearItems() {
    itemsSet.clear();
    itemContainer.innerHTML = '';
    itemInput.value = '';
}
function saveItems() {
    persistItemsHistory();
    alert('Items saved successfully!');
}
addItemBtn === null || addItemBtn === void 0 ? void 0 : addItemBtn.addEventListener('click', addItem);
removeItemBtn === null || removeItemBtn === void 0 ? void 0 : removeItemBtn.addEventListener('click', removeItem);
clearItemsBtn === null || clearItemsBtn === void 0 ? void 0 : clearItemsBtn.addEventListener('click', clearItems);
saveItemsBtn === null || saveItemsBtn === void 0 ? void 0 : saveItemsBtn.addEventListener('click', saveItems);
function displayItems() {
    itemContainer.innerHTML = '';
    itemsSet.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemContainer.appendChild(itemElement);
    });
}
function loadItemsHistory() {
    const savedItems = localStorage.getItem(itemsHistoryKey);
    if (savedItems) {
        const itemsArray = JSON.parse(savedItems);
        itemsArray.forEach(item => itemsSet.add(item));
        displayItems();
    }
}
itemInput === null || itemInput === void 0 ? void 0 : itemInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});
loadItemsHistory();
