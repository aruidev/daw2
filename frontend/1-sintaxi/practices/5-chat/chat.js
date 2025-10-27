// ...existing code...
var messagesContainer = document.querySelector('.messages');
var messageInput = document.getElementById('message-input');
var sendBtn = document.getElementById('send-message');
var clearBtn = document.getElementById('clear-messages');
var openWindow1Btn = document.getElementById('open-window1');
var openWindow2Btn = document.getElementById('open-window2');
var usernameInput = document.getElementById('username-input');
// Array de missatges
var chatHistory = new Array();
// Guardem missatges a localStorage
function persistChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}
function loadChatHistory() {
    chatHistory.length = 0; // Neteja per evitar duplicats
    var storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
        try {
            // Parseja string a array
            var messages = JSON.parse(storedHistory);
            chatHistory.push.apply(chatHistory, messages);
        }
        catch (_a) {
        }
    }
}
function displayChatHistory() {
    if (!messagesContainer)
        return;
    messagesContainer.innerHTML = ''; // Neteja per evitar duplicats
    chatHistory.forEach(function (msg) {
        var messageElement = document.createElement('div');
        messageElement.textContent = msg;
        messagesContainer.appendChild(messageElement);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function sendMessage() {
    if (!messageInput || !messagesContainer || !usernameInput)
        return;
    var message = messageInput.value.trim();
    var username = usernameInput.value.trim() || 'User';
    // Construim missatge amb username directament
    var fullMessage = "".concat(username, ": ").concat(message);
    if (message) {
        var messageElement = document.createElement('div');
        messageElement.textContent = fullMessage;
        messagesContainer.appendChild(messageElement);
        chatHistory.push(fullMessage);
        persistChatHistory();
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
function clearMessages() {
    if (messagesContainer)
        messagesContainer.innerHTML = '';
    chatHistory.length = 0;
    persistChatHistory();
}
// Window.html no te botons d'obrir finestres noves, evitar null pointer
if (sendBtn)
    sendBtn.addEventListener('click', sendMessage);
if (clearBtn)
    clearBtn.addEventListener('click', clearMessages);
if (openWindow1Btn) {
    openWindow1Btn.addEventListener('click', function () {
        window.open('window.html', 'chatWindow1', 'width=400,height=600');
    });
}
if (openWindow2Btn) {
    openWindow2Btn.addEventListener('click', function () {
        window.open('window.html', 'chatWindow2', 'width=400,height=600');
    });
}
// Sync entre finestres
window.addEventListener('storage', function (e) {
    if (e.key === 'chatHistory') {
        loadChatHistory();
        displayChatHistory();
    }
});
// Enter per enviar missatge
if (messageInput) {
    messageInput.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            sendMessage();
        }
    });
}
// init
loadChatHistory();
displayChatHistory();
