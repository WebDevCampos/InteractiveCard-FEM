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
const notEmptyName = document.querySelector(".not-empty-name");
const notEmptyNumber = document.querySelector(".not-empty-number");
const notEmptyMonth = document.querySelector(".not-empty-month");
const notEmptyYear = document.querySelector(".not-empty-year");
const notEmptyCVC = document.querySelector(".not-empty-cvc");
const validName = /^[a-zA-Z\s]*$/;
const validNumber = /^[0-9\s]*$/;
cardDataForm.addEventListener("keyup", (e) => {
  /*Set the max value forinputs on Android*/
  const setMaxForAndroid = (max, inputField) => {
    inputField.value.length > max
      ? (inputField.value = inputField.value.substring(0, max))
      : null;
  };
  setMaxForAndroid(17, cardHolderName);
  setMaxForAndroid(19, cardNumber);
  setMaxForAndroid(2, expDateMonth);
  setMaxForAndroid(2, expDateYear);
  setMaxForAndroid(3, cvcValue);
  /*Set the max value forinputs on Android*/
  e.key == "Backspace" ? (e.target.value = "") : null;

  e.target == cardHolderName
    ? (cardFrontName.textContent = e.target.value.toUpperCase())
    : (e.target == cardNumber && cardNumber.value.length == 4) ||
      cardNumber.value.length == 9 ||
      cardNumber.value.length == 14
    ? (cardNumber.value += " ")
    : e.target == cardNumber
    ? (cardFrontNumber.textContent = e.target.value)
    : e.target == expDateMonth
    ? (cardFrontMonth.textContent = e.target.value)
    : e.target == expDateYear
    ? (cardFrontYear.textContent = e.target.value)
    : e.target == cvcValue
    ? (cardCvcValue.textContent = e.target.value)
    : null;

  !cardHolderName.value
    ? (cardFrontName.textContent = "JANE APPLESEED")
    : !cardNumber.value
    ? (cardFrontNumber.textContent = "0000 0000 0000 0000")
    : !expDateMonth.value
    ? (cardFrontMonth.textContent = "00")
    : !expDateYear.value
    ? (cardFrontYear.textContent = "00")
    : !cvcValue.value
    ? (cardCvcValue.textContent = "000")
    : null;
});

cardDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cardHolderNameField = e.target.cardholder_name;
  let cardNumberField = e.target.cardholder_number;
  let cardMonthField = e.target.card_month;
  let cardYearField = e.target.card_year;
  let cardCVCField = e.target.card_cvc;

  const validateName = (field, placeholderField, text, onlyValid) => {
    if (!field.value) {
      placeholderField.classList.add("show");
      placeholderField.textContent = text;
      field.style.border = "1px solid red";
    } else if (validName.test(field.value) == false) {
      placeholderField.classList.add("show");
      placeholderField.textContent = onlyValid;
      field.style.border = "1px solid red";
    } else if (field.value || validName.test(field.value) == true) {
      placeholderField.textContent = "";
      field.style.border = "1px solid var(--light-grayish-violet)";
    }
  };
  const validateNumber = (field, placeholderField, text, onlyValid) => {
    if (!field.value) {
      placeholderField.classList.add("show");
      placeholderField.textContent = text;
      field.style.border = "1px solid red";
    } else if (validNumber.test(field.value) == false) {
      placeholderField.classList.add("show");
      placeholderField.textContent = onlyValid;
      field.style.border = "1px solid red";
    } else if (field.value || validNumber.test(field.value) == true) {
      placeholderField.textContent = "";
      field.style.border = "1px solid var(--light-grayish-violet)";
    }
  };

  validateName(
    cardHolderNameField,
    notEmptyName,
    "Please, insert a Name.",
    "Only letters, please."
  );
  validateNumber(
    cardNumberField,
    notEmptyNumber,
    "Please, insert a number.",
    "Only numbers, please."
  );
  validateNumber(
    cardMonthField,
    notEmptyMonth,
    "Please, insert a number.",
    "Only numbers, please."
  );
  validateNumber(
    cardYearField,
    notEmptyYear,
    "Please, insert a number.",
    "Only numbers, please."
  );
  validateNumber(
    cardCVCField,
    notEmptyCVC,
    "Please, insert a number.",
    "Only numbers, please."
  );
  if (
    cardHolderNameField.value !== "" &&
    validName.test(cardHolderNameField.value) &&
    cardNumberField.value !== "" &&
    validNumber.test(cardNumberField.value) &&
    cardMonthField.value !== "" &&
    validNumber.test(cardMonthField.value) &&
    cardYearField.value !== "" &&
    validNumber.test(cardYearField.value) &&
    cardCVCField.value !== "" &&
    validNumber.test(cardCVCField.value)
  ) {
    completeForm.classList.add("show");
    cardDataForm.classList.add("hide");
  }

  console.log(validName.test(cardHolderNameField.value));
});
