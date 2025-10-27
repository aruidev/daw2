var dniInput = document.getElementById("dni-input");
var nameInput = document.getElementById("name-input");
var lastNameInput = document.getElementById("lastName-input");
var emailInput = document.getElementById("email-input");
var cardInput = document.getElementById("card-input");
var userTableBody = document.getElementById("user-table-body");
var users = new Map();
users.set("00000000A", { name: "Alice", lastName: "Smith", email: "alice.smith@example.com", card: "1234-5678-9012-3456" });
users.set("11111111B", { name: "Bob", lastName: "Johnson", email: "bob.johnson@example.com", card: "2345-6789-0123-4567" });
users.set("22222222C", { name: "Charlie", lastName: "Brown", email: "charlie.brown@example.com", card: "3456-7890-1234-5678" });
function addUser() {
    var dni = dniInput.value;
    var name = nameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var card = cardInput.value;
    if (!dni) {
        alert('Enter a valid DNI');
        return;
    }
    if (users.has(dni)) {
        alert("User with DNI ".concat(dni, " already exists"));
        return;
    }
    users.set(dni, { name: name, lastName: lastName, email: email, card: card });
    renderUserTable();
}
function updateUser() {
    var dni = dniInput.value;
    var name = nameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var card = cardInput.value;
    if (!dni) {
        alert('Enter a valid DNI');
        return;
    }
    if (!users.has(dni)) {
        alert("User with DNI ".concat(dni, " does not exist"));
        return;
    }
    users.set(dni, { name: name, lastName: lastName, email: email, card: card });
    renderUserTable();
}
function getUser() {
    var dni = dniInput.value;
    if (!dni) {
        alert('Enter a DNI to search');
        return;
    }
    var user = users.get(dni);
    if (!user) {
        alert("No user found with DNI ".concat(dni));
        return;
    }
    // Mostra només l'usuari cercat a la taula
    renderUserTable(dni);
    nameInput.value = user.name;
    lastNameInput.value = user.lastName;
    emailInput.value = user.email;
    cardInput.value = user.card;
}
function deleteUser() {
    var dni = dniInput.value;
    if (!dni) {
        alert('Enter a DNI to delete');
        return;
    }
    if (!users.has(dni)) {
        alert("User with DNI ".concat(dni, " does not exist"));
        return;
    }
    if (!confirm("Are you sure you want to delete user with DNI ".concat(dni, "?"))) {
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
var addButton = document.getElementById("add-user-button");
addButton.addEventListener("click", addUser);
var updateButton = document.getElementById("update-user-button");
updateButton.addEventListener("click", updateUser);
var getButton = document.getElementById("get-user-button");
getButton.addEventListener("click", getUser);
var deleteButton = document.getElementById("delete-user-button");
deleteButton.addEventListener("click", deleteUser);
var getAllButton = document.getElementById("get-all-button");
getAllButton.addEventListener("click", function () {
    renderUserTable();
});
function renderUserTable(filterDni) {
    if (!userTableBody)
        return;
    // Neteja la taula
    userTableBody.innerHTML = '';
    users.forEach(function (user, dni) {
        if (filterDni && dni !== filterDni)
            return;
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(dni, "</td>\n            <td>").concat(user.name, "</td>\n            <td>").concat(user.lastName, "</td>\n            <td>").concat(user.email, "</td>\n            <td>").concat(user.card, "</td>\n        ");
        userTableBody.appendChild(row);
    });
}
