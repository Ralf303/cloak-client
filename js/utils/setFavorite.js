function setFavorite(nick) {
  document.getElementById("favorite").href = `/private/?name=${nick}`;
}
