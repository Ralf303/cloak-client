async function deleteChat(userOne, userTwo) {
  try {
    await axios.delete("https://cloakgram.com/chats/deleteChat", {
      params: {
        userOne: userOne,
        userTwo: userTwo,
      },
    });

    window.location.href = " https://cloakgram.com/chats";
    socket.emit("delete", {
      userOne: userOne,
      userTwo: userTwo,
    });
  } catch (error) {
    console.error(error);
  }
}
