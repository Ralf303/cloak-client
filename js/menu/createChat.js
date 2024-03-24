function addChat(username) {
  let section = document.getElementById("users");
  let chats = section.querySelectorAll("a.chat-link");
  for (let chat of chats) {
    if (chat.textContent === username) {
      // Чат с таким username уже существует, ничего не делаем
      return;
    }
  }

  let newChat = document.createElement("a");
  newChat.textContent = username;
  newChat.href = `/private/?name=${username}`;
  newChat.classList.add("chat-link");
  section.appendChild(newChat);
}

async function createChat(user1, user2) {
  try {
    const response = await axios.post(
      "http://localhost/chats/createChat",
      {
        user2: user2,
      },
      {
        headers: {
          token: `Bearer ${user1}`,
        },
      }
    );
    const { userTwo } = response.data.chatInfo;
    if (!userTwo) {
      document.getElementById("error").textContent = response.data.chatInfo;
    } else {
      addChat(userTwo);
      document.getElementById("dialog").style.display = "none";
    }
  } catch (error) {
    if (error.name === "AxiosError") {
      localStorage.clear();
      window.location.href = "http://localhost/authorization";
    }
    document.getElementById("error").textContent = "Такого юзера нет";
    console.log(error);
  }
}

async function createChats(chats) {}
