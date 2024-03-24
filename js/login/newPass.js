function checkPass() {
  const allow = localStorage.getItem("resetPassword");

  if (allow) {
    return;
  } else {
    localStorage.clear();
    window.location.href = "registration.html";
  }
}

async function resetPass() {
  const password = document.getElementById("floatingInput").value;
  const confirmPassword = document.getElementById("floatingPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("password-error").textContent =
      "Пароли не совпадают.";
    return false;
  }

  if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Пароль должен быть длиннее 6 символов.";
    return false;
  }

  document.getElementById("password-error").textContent = "";

  try {
    const response = await axios.put(` http://localhost/auth/resetPassword`, {
      data: {
        id: localStorage.getItem("resetId"),
        password: password,
      },
    });
    const { message } = response.data;

    if (message) {
      alert("Успешный сброс пароля!");
      localStorage.clear();
      window.location.href = "registration";
    } else {
      alert("Произошла ошибка, попробуйте позже");
    }
  } catch (e) {
    console.log(e);
    alert("Ошбика, попробуйте позже");
  }
}
