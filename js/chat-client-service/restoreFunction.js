function restoreFunction(name, mes) {
  for (i in mes) {
    const message = mes[i];
    const messageContainer = document.createElement("div");
    const usernameElement = document.createElement("span");
    usernameElement.classList.add("username");
    if (message.sender === name) {
      messageContainer.classList.add("message-container", "right-message");
      usernameElement.textContent = message.sender;
    } else {
      console.log(message.receiver);
      messageContainer.classList.add("message-container", "left-message");
      usernameElement.textContent = message.sender;
    }

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message.text;

    const timestampElement = document.createElement("span");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = message.data;

    messageContainer.appendChild(usernameElement);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(timestampElement);
    messagesContainer.appendChild(messageContainer);
    messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  }
}
