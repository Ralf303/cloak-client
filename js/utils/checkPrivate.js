async function getPrivacyStatus() {
  const toggle = document.getElementById("private");
  try {
    const response = await axios.get(
      `http://localhost/utils/checkPrivacy?username=${localStorage.getItem(
        "ourNick"
      )}`
    );
    toggle.checked = response.data.isPrivate;
  } catch (error) {
    console.log(error);
  }
}

getPrivacyStatus();
