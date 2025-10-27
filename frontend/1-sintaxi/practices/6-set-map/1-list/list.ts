const itemInput = document.getElementById('item-input') as HTMLInputElement;
const itemContainer = document.getElementById('item-container') as HTMLDivElement;
const addItemBtn = document.getElementById('add-item') as HTMLButtonElement;
const removeItemBtn = document.getElementById('remove-item') as HTMLButtonElement;
const clearItemsBtn = document.getElementById('clear-items') as HTMLButtonElement;
const saveItemsBtn = document.getElementById('save-items') as HTMLButtonElement;

const itemsSet = new Set<string>();

const itemsHistoryKey = 'itemsSetHistory';

function persistItemsHistory() {
    const itemsArray: string[] = [];
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
    } else {
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
    } else {
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

addItemBtn?.addEventListener('click', addItem);
removeItemBtn?.addEventListener('click', removeItem);
clearItemsBtn?.addEventListener('click', clearItems);
saveItemsBtn?.addEventListener('click', saveItems);

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
        const itemsArray: string[] = JSON.parse(savedItems);
        itemsArray.forEach(item => itemsSet.add(item));
        displayItems();
    }
}

itemInput?.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});

loadItemsHistory(); 