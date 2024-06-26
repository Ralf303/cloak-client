async function getMessages() {
  try {
    const response = await axios.get(
      "https://cloakgram.com/chats/getMessages",
      {
        params: {
          user1: getChatName(),
          user2: localStorage.getItem("ourNick"),
        },
      }
    );

    const { mes } = response.data;
    await restoreFunction(localStorage.getItem("ourNick"), mes);
  } catch (error) {
    console.error(error);
  }
}

getMessages();
