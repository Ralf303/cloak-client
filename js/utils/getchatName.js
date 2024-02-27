function getChatName() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("name");
  return id;
}
