const cardDataForm = document.querySelector(".form-data");
const completeForm = document.querySelector(".form-complete");
let cardHolderName = document.querySelector(".cardholder-name");
let cardFrontName = document.querySelector(".person-name");
let cardNumber = document.querySelector(".cardholder-number");
let cardFrontNumber = document.querySelector(".card-front-number");
cardDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  completeForm.classList.toggle("show");
  cardDataForm.classList.toggle("hide");
});

completeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  completeForm.classList.remove("show");
  cardDataForm.classList.remove("hide");
});

cardDataForm.addEventListener("input", (e) => {
  if (e.target == cardHolderName) {
    cardFrontName.textContent = e.target.value.toUpperCase();
  } else if (e.target == cardNumber) {
    cardFrontNumber.textContent = e.target.value;
  }

  !cardHolderName.value ? (cardFrontName.textContent = "JANE APPLESEED") : null;

  !cardNumber.value
    ? (cardFrontNumber.textContent = "0000 0000 0000 0000")
    : null;
});
