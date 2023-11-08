function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector(".change-color").addEventListener("click", function () {
  const newcolor = getRandomHexColor();
  document.body.style.backgroundColor = newcolor;


  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = newcolor;
});

