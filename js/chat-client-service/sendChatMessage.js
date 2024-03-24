async function sendServerMessage(sender, receiver, text, data) {
  try {
    await axios.put(" https://cloakgram.com/chats/sendMessage", {
      sender: sender,
      receiver: receiver,
      text: text,
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
}
