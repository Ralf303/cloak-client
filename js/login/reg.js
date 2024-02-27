async function validateForm() {
  const username = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username === "") {
    usernameError.textContent = "Введите ник";
    return;
  }

  if (username.length < 6) {
    usernameError.textContent = "Ник должен быть длиннее 5 символов";
    return;
  }

  if (!/[a-zA-Z]/.test(username)) {
    usernameError.textContent =
      "Имя пользователя должно содержать хотя бы одну латинскую букву";
    return;
  }

  if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
    usernameError.textContent =
      "Имя пользователя содержит недопустимые символы";
    return;
  }

  if (username.includes(" ")) {
    usernameError.textContent = "Имя пользователя не должно содержать пробелов";
    return;
  }

  if (username.length > 30) {
    usernameError.textContent = "Ник не должен быть длиннее 30 символов";
    return;
  }

  if (password === "") {
    passwordError.textContent = "Введите пароль";
    return;
  }

  if (password.length < 6) {
    passwordError.textContent = "Пароль должен быть длиннее 5 символов";
    return;
  }

  if (password.length > 30) {
    passwordError.textContent = "Пароль не должен быть длиннее 30 символов";
    return;
  }

  try {
    const response = await axios.post(` http://localhost/auth/registration`, {
      data: {
        username: username,
        password: password,
      },
    });

    if (response.data.message == "Данный ник уже занят") {
      usernameError.textContent = `${response.data.message}`;
    } else if (response.data.message === true) {
      localStorage.setItem("timeNick", username);
      window.location.href = "http://localhost/secretKey";
    }
  } catch (error) {
    console.error(error);
  }
}
