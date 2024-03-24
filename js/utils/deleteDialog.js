const dialog = document.getElementById("dialog");

document.getElementById("delete").onclick = () => {
  dialog.style.display = "block";
};

document.querySelector(".close").onclick = () => {
  dialog.style.display = "none";
};

document.getElementById("cancelBtn").onclick = () => {
  dialog.style.display = "none";
};

document.getElementById("deleteBtn").onclick = async () => {
  await deleteChat(getChatName(), localStorage.getItem("ourNick"));
};
