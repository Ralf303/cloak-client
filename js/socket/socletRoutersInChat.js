socket.on("newMessage", (msg) => {
  isRightChat = getChatName() === msg.sender;
  isRightReceiver = localStorage.getItem("ourNick") === msg.receiver;
  if (isRightChat && isRightReceiver)
    sendMessage("left", msg.message, msg.sender);
});

socket.on("deleteChat", (msg) => {
  isRightChat = getChatName() === msg.userTwo;
  isRightReceiver = localStorage.getItem("ourNick") === msg.userOne;
  if (isRightChat && isRightReceiver)
    window.location.href = " https://cloakgram.com/chats";
});
