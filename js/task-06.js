const inputText = document.querySelector("#validation-input");

const allowedLength = parseInt(inputText.getAttribute("data-length"));

inputText.addEventListener("blur", () => {
  const inputCurrentLength = inputText.value;

  if (inputCurrentLength.length === allowedLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});
