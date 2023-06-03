function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Dimensiunile primului <div> vor fi 30px pe 30px.

//Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.

//Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX.

//Folosește funcția getRandomHexColor deja existentă pentru a obține o culoare.

//1. Citesc valoare din input
const counter = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let totalIncreased = 0;
//1.1 Creez functia createBoxes(amount)
const createBoxes = (amount) => {
  let sizeIncreaser = 10;
  if (totalIncreased === 0) {
    for (let i = 0; i < amount; i++) {
      if (i === 0) {
        totalIncreased = 30;
        divBoxes.insertAdjacentHTML(
          "beforeend",
          `<div style="background-color:${getRandomHexColor()}; width:${totalIncreased}px; height:${totalIncreased}px;"></div>`
        );
        totalIncreased += sizeIncreaser;
      } else {
        divBoxes.insertAdjacentHTML(
          "beforeend",
          `<div style="background-color:${getRandomHexColor()}; width:${totalIncreased}px; height:${totalIncreased}px;"></div>`
        );
        totalIncreased += sizeIncreaser;
      }
    }
  } else {
    for (let i = 0; i < amount; i++) {
      divBoxes.insertAdjacentHTML(
        "beforeend",
        `<div style="background-color:${getRandomHexColor()}; width:${totalIncreased}px; height:${totalIncreased}px;"></div>`
      );
      totalIncreased += sizeIncreaser;
    }
  }
};
createBtn.addEventListener("click", () => {
  createBoxes(counter.value);
});

//1.3 Creez functia destroyBoxes(amount) care distruge toate divurile create

const destroyBoxes = () => {
  divBoxes.innerHTML = ``;
  totalIncreased = 0;
};

destroyBtn.addEventListener("click", destroyBoxes);
