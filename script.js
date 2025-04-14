console.log("high");
const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  console.log("low");
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});
