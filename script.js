let email1 = document.getElementsByName("email")[0];
let email2 = document.getElementsByName("email")[1];
let errorMessage1 = document.getElementsByClassName("error-message")[0];
let errorMessage2 = document.getElementsByClassName("error-message")[1];
let submitButton1 = document.getElementsByClassName("submit")[0];
let submitButton2 = document.getElementsByClassName("submit")[1];

function validateEmail(emailInput) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailInput.value);
}

submitButton1.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(email1)) {
    errorMessage1.textContent = "Signup successful!";
    errorMessage1.classList.remove("error");
    email1.classList.remove("errorInput");
    errorMessage1.classList.add("success");
  } else {
    errorMessage1.textContent = "Please check your email!";
    errorMessage1.classList.remove("success");
    email1.classList.add("errorInput");
    errorMessage1.classList.add("error");
  }
});

submitButton2.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(email2)) {
    errorMessage2.textContent = "Signup successful!";
    errorMessage2.classList.remove("error");
    email2.classList.remove("errorInput");
    errorMessage2.classList.add("success");
  } else {
    errorMessage2.textContent = "Please check your email!";
    errorMessage2.classList.remove("success");
    email2.classList.add("errorInput");
    errorMessage2.classList.add("error");
  }
});
