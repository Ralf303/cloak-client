async function getUserById(token, id) {
  try {
    const response = await axios.get(
      ` http://localhost/utils/getUser/?id=${id}`,
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );

    const { user } = response.data;
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function getChats(token) {
  try {
    const response = await axios.get(" http://localhost/chats/getChats", {
      headers: {
        token: `Bearer ${token}`,
      },
    });

    const { chats, userId } = response.data;
    for (let i = 0; i <= chats.length; i++) {
      const chat = chats[i];
      if (chat.userOne === chat.userTwo) {
        addChat("Избранное");
      } else if (chat.userOne === userId) {
        const user = await getUserById(token, chat.userTwo);
        addChat(user.username);
      } else {
        const user = await getUserById(token, chat.userOne);
        addChat(user.username);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
