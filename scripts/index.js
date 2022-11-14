const cardDataForm = document.querySelector(".form-data");
const completeForm = document.querySelector(".form-complete");
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
