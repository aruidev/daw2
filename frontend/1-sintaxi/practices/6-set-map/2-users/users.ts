const dniInput = document.getElementById("dni-input") as HTMLInputElement;
const nameInput = document.getElementById("name-input") as HTMLInputElement;
const lastNameInput = document.getElementById("lastName-input") as HTMLInputElement;
const emailInput = document.getElementById("email-input") as HTMLInputElement;
const cardInput = document.getElementById("card-input") as HTMLInputElement;
const userTableBody = document.getElementById("user-table-body") as HTMLTableSectionElement | null;

interface User {
    name: string;
    lastName: string;
    email: string;
    card: string;
}

const users = new Map<string, User>();

users.set("00000000A", { name: "Alice", lastName: "Smith", email: "alice.smith@example.com", card: "1234-5678-9012-3456" });
users.set("11111111B", { name: "Bob", lastName: "Johnson", email: "bob.johnson@example.com", card: "2345-6789-0123-4567" });
users.set("22222222C", { name: "Charlie", lastName: "Brown", email: "charlie.brown@example.com", card: "3456-7890-1234-5678" });  

function addUser() {
    const dni = dniInput.value;
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const card = cardInput.value;
    if (!dni) {
        alert('Enter a valid DNI');
        return;
    }
    if (users.has(dni)) {
        alert(`User with DNI ${dni} already exists`);
        return;
    }

    users.set(dni, { name, lastName, email, card });
    renderUserTable();
}

function updateUser() {
    const dni = dniInput.value;
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const card = cardInput.value;
    if (!dni) {
        alert('Enter a valid DNI');
        return;
    }
    if (!users.has(dni)) {
        alert(`User with DNI ${dni} does not exist`);
        return;
    }

    users.set(dni, { name, lastName, email, card });
    renderUserTable();
}

function getUser() {
    const dni = dniInput.value;
    if (!dni) {
        alert('Enter a DNI to search');
        return;
    }

    const user = users.get(dni);
    if (!user) {
        alert(`No user found with DNI ${dni}`);
        return;
    }
    
    renderUserTable(dni);
    nameInput.value = user.name;
    lastNameInput.value = user.lastName;
    emailInput.value = user.email;
    cardInput.value = user.card;
}

function deleteUser() {
    const dni = dniInput.value;
    if (!dni) {
        alert('Enter a DNI to delete');
        return;
    }
    if (!users.has(dni)) {
        alert(`User with DNI ${dni} does not exist`);
        return;
    }
    if (!confirm(`Are you sure you want to delete user with DNI ${dni}?`)) {
        return;
    }
    users.delete(dni);
}

function clearUsers() {
    if (!confirm('Are you sure you want to delete all users?')) {
        return;
    }
    users.clear();
    renderUserTable();
}

const addButton = document.getElementById("add-user-button") as HTMLButtonElement;
addButton.addEventListener("click", addUser);

const updateButton = document.getElementById("update-user-button") as HTMLButtonElement;
updateButton.addEventListener("click", updateUser);

const getButton = document.getElementById("get-user-button") as HTMLButtonElement;
getButton.addEventListener("click", getUser);

const deleteButton = document.getElementById("delete-user-button") as HTMLButtonElement;
deleteButton.addEventListener("click", deleteUser);

const getAllButton = document.getElementById("get-all-button") as HTMLButtonElement;
getAllButton.addEventListener("click", () => {
    renderUserTable();
});

function renderUserTable(filterDni?: string) {
    if (!userTableBody) return;

    // Neteja la taula
    userTableBody.innerHTML = '';

    users.forEach((user, dni) => {
        if (filterDni && dni !== filterDni) return;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dni}</td>
            <td>${user.name}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.card}</td>
        `;
        userTableBody.appendChild(row);
    });
}

renderUserTable();


