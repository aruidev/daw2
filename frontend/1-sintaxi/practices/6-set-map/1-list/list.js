var itemInput = document.getElementById('item-input');
var itemContainer = document.getElementById('item-container');
var addItemBtn = document.getElementById('add-item');
var removeItemBtn = document.getElementById('remove-item');
var clearItemsBtn = document.getElementById('clear-items');
var saveItemsBtn = document.getElementById('save-items');
var itemsSet = new Set();
var itemsHistoryKey = 'itemsSetHistory';
function persistItemsHistory() {
    var itemsArray = [];
    itemsSet.forEach(function (it) { return itemsArray.push(it); });
    localStorage.setItem(itemsHistoryKey, JSON.stringify(itemsArray));
}
function addItem() {
    var item = itemInput.value.trim();
    if (item && !itemsSet.has(item)) {
        itemsSet.add(item);
        var itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemContainer.appendChild(itemElement);
        itemInput.value = '';
    }
    else {
        alert('Item already exists in the list.');
    }
}
function removeItem() {
    var item = itemInput.value.trim();
    if (item && itemsSet.has(item)) {
        if (confirm('Are you sure you want to remove this item?')) {
            itemsSet.delete(item);
            Array.from(itemContainer.children).forEach(function (child) {
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
    itemsSet.forEach(function (item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemContainer.appendChild(itemElement);
    });
}
function loadItemsHistory() {
    var savedItems = localStorage.getItem(itemsHistoryKey);
    if (savedItems) {
        var itemsArray = JSON.parse(savedItems);
        itemsArray.forEach(function (item) { return itemsSet.add(item); });
        displayItems();
    }
}
itemInput === null || itemInput === void 0 ? void 0 : itemInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});
loadItemsHistory();
