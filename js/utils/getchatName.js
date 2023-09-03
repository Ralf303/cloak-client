// Получение значения параметра id из текущего URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
// Вставка значения параметра id в элемент с id "nick"
document.getElementById("nick").textContent = id;
