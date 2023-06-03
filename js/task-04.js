const counter = document.querySelector("#value");
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

const decrementValue = () => {
  counterValue--;
  counter.textContent = counterValue;
};
const incrementValue = () => {
  counterValue++;
  counter.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
