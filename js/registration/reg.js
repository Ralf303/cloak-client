function registService() {

    const nickName = localStorage.getItem("username")

    if (nickName) {
        return
    }

    const nick = prompt("Как тебя зовут?")

    if (nick) {
        localStorage.setItem("username", nick)
return
    }

    registService();
  }
  
  registService();
  