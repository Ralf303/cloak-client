async function changePass() {
  const oldPassword = document.getElementById("oldPass").value;
  const newPassword = document.getElementById("newPass").value;
  const repeatPassword = document.getElementById("repeatPass").value;
  const oldPassError = document.getElementById("oldPassError");
  const newPassError = document.getElementById("newPassError");
  const repeatPassError = document.getElementById("repeatPassError");

  if (!oldPassword) {
    oldPassError.textContent = "Введите старый пароль.";
    return;
  } else {
    oldPassError.textContent = "";
  }

  if (!newPassword) {
    newPassError.textContent = "Введите новый пароль.";
    return;
  } else {
    newPassError.textContent = "";
  }

  if (!repeatPassword) {
    repeatPassError.textContent = "Повторите новый пароль.";
    return;
  } else {
    repeatPassError.textContent = "";
  }

  if (newPassword !== repeatPassword) {
    repeatPassError.textContent = "Пароли не совпадают.";
    return;
  } else {
    repeatPassError.textContent = "";
  }

  if (newPassword.length < 6) {
    newPassError.textContent = "Пароль должен быть длиннее 6 символов.";
    return;
  } else {
    newPassError.textContent = "";
  }

  try {
    const response = await axios.put(
      "https://cloakgram.com/utils/changePassword",
      {
        data: {
          oldPassword: oldPassword,
          password: newPassword,
        },
      },
      {
        headers: {
          token: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const { message, status } = response.data;

    if (message && !status) {
      oldPassError.textContent = "Неверный пароль";
    }

    if (status) {
      alert("Успешная смена пароля!");
    }
  } catch (e) {
    console.log(e);
    alert("Ошбика, попробуйте позже");
  }
}
