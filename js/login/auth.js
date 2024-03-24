async function login() {
  const username = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username === "") {
    usernameError.textContent = "Введите ник";
    return;
  }

  if (password === "") {
    passwordError.textContent = "Введите пароль";
    return;
  }

  try {
    const response = await axios.post(`https://cloakgram.com/auth/login`, {
      data: {
        username: username,
        password: password,
      },
    });

    const { message, token } = response.data;

    if (message == "Не правильный ник или пароль") {
      passwordError.textContent = `${message}`;
    } else if (message == "Такого ник нейма нет") {
      usernameError.textContent = `${message}`;
    } else if (message === true) {
      localStorage.setItem("token", token);
      window.location.href = "https://cloakgram.com/chats";
    }
  } catch (error) {
    console.error(error);
  }
}
