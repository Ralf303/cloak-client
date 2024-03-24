function changePrivation() {
  const checkbox = document.getElementById("private");
  const nick = localStorage.getItem("ourNick"); // Replace this with your JWT token

  socket.emit("changePrivate", {
    status: checkbox.checked,
    nick: nick,
  });
}
