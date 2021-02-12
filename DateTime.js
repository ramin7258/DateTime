const button = document.querySelector(".btn");
const dateTime = document.querySelector(".dateTime");

button.addEventListener("click", function () {
  dateTime.innerHTML = Date();
});
