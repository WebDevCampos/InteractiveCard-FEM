const cardDataForm = document.querySelector(".form-data");
const completeForm = document.querySelector(".form-complete");
cardDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  completeForm.classList.add("show");
  cardDataForm.classList.add("hide");
});
