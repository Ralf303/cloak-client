const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function (event) {
  const chatLinks = document.querySelectorAll(".chat-link");
  const searchValue = event.target.value.toLowerCase();

  for (let i = 0; i < chatLinks.length; i++) {
    const chatName = chatLinks[i].textContent.toLowerCase();
    let found = true;

    const keywords = searchValue.split(" ");

    for (let k = 0; k < keywords.length; k++) {
      if (!found) {
        break;
      }

      if (!chatName.includes(keywords[k])) {
        found = false;
      }
    }

    if (found) {
      chatLinks[i].style.display = "block";
    } else {
      chatLinks[i].style.display = "none";
    }
  }
});
