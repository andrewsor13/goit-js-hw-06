const inputNumber = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputNumber.addEventListener("input", () => {
  textSize.style.fontSize = inputNumber.value + "px";
});
