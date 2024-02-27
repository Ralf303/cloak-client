document.getElementById("delete").addEventListener("click", function () {
  document.getElementById("dialog").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("dialog").style.display = "none";
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  document.getElementById("dialog").style.display = "none";
});

document
  .getElementById("deleteBtn")
  .addEventListener("click", async function () {
    await deleteChat(getChatName(), localStorage.getItem("ourNick"));
  });
