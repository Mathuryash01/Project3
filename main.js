document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const chatLogs = document.getElementById("chat-logs");
    const buttonContainer = document.getElementById("button-container");

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function appendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = message;
        chatLogs.appendChild(messageElement);
        chatLogs.scrollTop = chatLogs.scrollHeight;
    }

    function sendMessage() {
        const userInput = chatInput.value.trim();
        if (userInput !== "") {
            appendMessage("<span class='user-message'>You: </span>" + userInput);
            respondToUser(userInput);
            chatInput.value = "";
        }
    }

    function respondToUser(userInput) {
        let response;
        switch (userInput.toLowerCase()) {
            case "hi":
                response = "Hello there!";
                break;
            case "how are you?":
                response = "I'm just a bot, but thank you for asking!";
                break;
            case "what can you do?":
                response = "I can respond to basic queries. Feel free to ask anything!";
                break;
            default:
                response = "I'm sorry, I didn't understand that.";
        }
        setTimeout(function() {
            appendMessage("<span class='bot-message'><i class='fas fa-robot'></i></span> " + response);
        }, 500);
    }

    buttonContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("chat-button")) {
            const message = event.target.textContent;
            appendMessage("<span class='user-message'>You: </span>" + message);
            respondToUser(message);
        }
    });
});
