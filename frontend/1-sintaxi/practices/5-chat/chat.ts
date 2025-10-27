const messagesContainer = document.querySelector('.messages');
const messageInput = document.getElementById('message-input') as HTMLInputElement | null;
const sendBtn = document.getElementById('send-message') as HTMLButtonElement | null;
const clearBtn = document.getElementById('clear-messages') as HTMLButtonElement | null;
const openWindow1Btn = document.getElementById('open-window1') as HTMLButtonElement | null;
const openWindow2Btn = document.getElementById('open-window2') as HTMLButtonElement | null;
const usernameInput = document.getElementById('username-input') as HTMLInputElement | null;

// Array de missatges
const chatHistory = new Array<string>();

// Guardem missatges a localStorage
function persistChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory() {
    chatHistory.length = 0; // Neteja per evitar duplicats
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
        try {
            // Parseja string a array
            const messages = JSON.parse(storedHistory) as string[];
            chatHistory.push(...messages);
        } catch {
        }
    }
}

function displayChatHistory() {
    if (!messagesContainer) return;
    messagesContainer.innerHTML = ''; // Neteja per evitar duplicats
    chatHistory.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        messagesContainer.appendChild(messageElement);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    if (!messageInput || !messagesContainer || !usernameInput) return;
    const message = messageInput.value.trim();
    const username = usernameInput.value.trim() || 'User';
    // Construim missatge amb username directament
    const fullMessage = `${username}: ${message}`;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = fullMessage;
        messagesContainer.appendChild(messageElement);
        chatHistory.push(fullMessage);
        persistChatHistory();
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function clearMessages() {
    if (messagesContainer) messagesContainer.innerHTML = '';
    chatHistory.length = 0;
    persistChatHistory();
}

// Window.html no te botons d'obrir finestres noves, evitar null pointer
if (sendBtn) sendBtn.addEventListener('click', sendMessage);
if (clearBtn) clearBtn.addEventListener('click', clearMessages);

if (openWindow1Btn) {
    openWindow1Btn.addEventListener('click', () => {
        window.open('window.html', 'chatWindow1', 'width=400,height=600');
    });
}
if (openWindow2Btn) {
    openWindow2Btn.addEventListener('click', () => {
        window.open('window.html', 'chatWindow2', 'width=400,height=600');
    });
}

// Sync entre finestres
window.addEventListener('storage', (e) => {
    if (e.key === 'chatHistory') {
        loadChatHistory();
        displayChatHistory();
    }
});

// Enter per enviar missatge
if (messageInput) {
    messageInput.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            sendMessage();
        }
    });
}

// init
loadChatHistory();
displayChatHistory();