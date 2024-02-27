async function deleteChat(userOne, userTwo) {
  try {
    await axios.delete("http://localhost/chats/deleteChat", {
      params: {
        userOne: userOne,
        userTwo: userTwo,
      },
    });

    window.location.href = " http://localhost/chats";
    socket.emit("delete", {
      userOne: userOne,
      userTwo: userTwo,
    });
  } catch (error) {
    console.error(error);
  }
}
