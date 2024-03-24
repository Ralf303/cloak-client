async function resetPassword() {
  let string = [];

  for (let i = 1; i <= 20; i++) {
    const el = document.getElementById(`secretInput${i}`);

    if (el.value) {
      string.push(`${el.value}`);
    }
  }

  try {
    const response = await axios.post(
      ` https://cloakgram.com/auth/resetPassword`,
      {
        data: {
          words: string,
        },
      }
    );

    if (response.data.message == "Неверные слова") {
      alert(`${response.data.message}`);
    } else if (response.data.message === "Слова совпали") {
      localStorage.clear();
      localStorage.setItem("resetPassword", true);
      localStorage.setItem("resetId", response.data.user_id);
      window.location.href = "https://cloakgram.com/newPassword";
    }
  } catch (error) {
    console.error(error);
    alert("Неверные слова");
  }
}
