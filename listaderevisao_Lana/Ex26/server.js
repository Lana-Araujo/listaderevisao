document.addEventListener('DOMContentLoaded', function() {
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = function(event) {
        const message = document.createElement('div');
        message.textContent = event.data;
        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight; // Role até a parte inferior do chat
    };

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            ws.send(message);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
