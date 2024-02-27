const sendButton = document.querySelector(".send-button");
const messageInput = document.querySelector(".message-input");
const messagesContainer = document.querySelector(".messages");

async function sendMessage(type, msg, username) {
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
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    timestampElement.textContent = currentTime;

    messageContainer.appendChild(usernameElement);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(timestampElement);
    messagesContainer.appendChild(messageContainer);

    messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  }
}

sendButton.addEventListener("click", async () => {
  if (!messageInput.value == "") {
    const sender = localStorage.getItem("ourNick");
    const receiver = getChatName();
    const messageText = messageInput.value;
    messageInput.value = "";
    await sendServerMessage(
      localStorage.getItem("ourNick"),
      receiver,
      messageText,
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    socket.emit("message", {
      message: messageText,
      sender: sender,
      receiver: receiver,
    });
    await sendMessage("right", messageText, sender);
  }
});

messageInput.addEventListener("keyup", async (event) => {
  if (event.keyCode === 13) {
    if (!messageInput.value == "") {
      const sender = localStorage.getItem("ourNick");
      const receiver = getChatName();
      const messageText = messageInput.value;
      messageInput.value = "";
      await sendServerMessage(
        localStorage.getItem("ourNick"),
        receiver,
        messageText,
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      socket.emit("message", {
        message: messageText,
        sender: sender,
        receiver: receiver,
      });
      await sendMessage("right", messageText, sender);
    }
  }
});
