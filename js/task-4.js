const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const userData = {
    email: email,
    password: password,
  };

  console.log(userData);

  form.reset();
});