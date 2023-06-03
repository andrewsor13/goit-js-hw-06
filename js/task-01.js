const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

const totalItems = items.length;

console.log("Numarul total de categorii :", totalItems);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");
  const totalElements = categoryElements.length;

  console.log("Titlul categoriei:", title);
  console.log("Numărul de elemente din categorie:", totalElements);
});
