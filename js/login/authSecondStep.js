async function keyRequest() {
  const nick = localStorage.getItem("timeNick");

  if (!nick) {
    redirect();
    return;
  }

  try {
    const response = await axios.get(
      ` https://cloakgram.com/auth/getWords?nick=${nick}`
    );

    const { words } = response.data;
    const wordsArr = words.split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
      const word = wordsArr[i];
      const element = document.getElementById(`${i + 1}`);
      element.textContent = word;
    }
  } catch (error) {
    redirect();
    console.log(error);
  }
}

keyRequest();

function redirect() {
  localStorage.clear();
  window.location.href = "https://cloakgram.com/authorization";
}
