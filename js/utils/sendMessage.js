const sendButton = document.querySelector(".send-button");
const messageInput = document.querySelector(".message-input");
const messagesContainer = document.querySelector(".messages");
const username = localStorage.getItem("username")

function sendMessage(type, msg, username) {
  if (msg) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", type + "-message");

    const usernameElement = document.createElement("span");
    usernameElement.classList.add("username");
    usernameElement.textContent = username;

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = msg;

    const timestampElement = document.createElement("span");
    timestampElement.classList.add("timestamp");
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestampElement.textContent = currentTime;

    messageContainer.appendChild(usernameElement);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(timestampElement);
    messagesContainer.appendChild(messageContainer);

    messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  }
}

sendButton.addEventListener("click", () => {
  const messageText = messageInput.value;
  messageInput.value = "";
  socket.emit('message', { message: messageText, sender: username });
  sendMessage("right", messageText, username);
});

messageInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    const messageText = messageInput.value;
    messageInput.value = "";
    socket.emit('message', { message: messageText, sender: username });
    sendMessage("right", messageText, username);
  }
});