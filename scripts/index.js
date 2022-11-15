const cardDataForm = document.querySelector(".form-data");
const completeForm = document.querySelector(".form-complete");
let cardHolderName = document.querySelector(".cardholder-name");
let cardFrontName = document.querySelector(".person-name");
let cardNumber = document.querySelector(".cardholder-number");
let cardFrontNumber = document.querySelector(".card-front-number");
let expDateMonth = document.querySelector(".month");
let expDateYear = document.querySelector(".year");
let cardFrontMonth = document.querySelector(".front-month");
let cardFrontYear = document.querySelector(".front-year");

let cvcValue = document.querySelector(".cvc-value");
let cardCvcValue = document.querySelector(".card-back-cvc");
cardDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !cardHolderName.value ||
    !cardNumber.value ||
    !expDateMonth.value ||
    !expDateYear.value ||
    !cvcValue.value
  ) {
    alert("Fill the form completely, please");
  } else {
    completeForm.classList.toggle("show");
    cardDataForm.classList.toggle("hide");
  }
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
  } else if (e.target == expDateMonth) {
    cardFrontMonth.textContent = e.target.value;
  } else if (e.target == expDateYear) {
    cardFrontYear.textContent = e.target.value;
  } else if (e.target == cvcValue) {
    cardCvcValue.textContent = e.target.value;
  }

  !cardHolderName.value ? (cardFrontName.textContent = "JANE APPLESEED") : null;

  !cardNumber.value
    ? (cardFrontNumber.textContent = "0000 0000 0000 0000")
    : null;

  !expDateMonth.value ? (cardFrontMonth.textContent = "00") : null;
  !expDateYear.value ? (cardFrontYear.textContent = "00") : null;
  !cvcValue.value ? (cardCvcValue.textContent = "000") : null;
});
