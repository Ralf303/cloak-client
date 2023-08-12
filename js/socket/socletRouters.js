socket.on('newMessage', (msg) => {
    sendMessage('left', msg.message, msg.sender)
})