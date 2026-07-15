const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formMessage = document.getElementById("form-message");

function setFieldError(input, errorElement, message) {
  if (message) {
    input.classList.add("invalid");
    errorElement.textContent = message;
  } else {
    input.classList.remove("invalid");
    errorElement.textContent = "";
  }
}

function validateEmail(value) {
  if (!value.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
  return "";
}

function validatePassword(value) {
  if (!value) return "Password is required.";
  if (value.length < 6) return "Password must be at least 6 characters.";
  return "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailMessage = validateEmail(emailInput.value);
  const passwordMessage = validatePassword(passwordInput.value);

  setFieldError(emailInput, emailError, emailMessage);
  setFieldError(passwordInput, passwordError, passwordMessage);

  if (emailMessage || passwordMessage) {
    formMessage.textContent = "";
    formMessage.className = "form-message";
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formMessage.textContent = "Signing in...";
  formMessage.className = "form-message";

  // Demo only — replace with a real API call
  await new Promise((resolve) => setTimeout(resolve, 800));

  formMessage.textContent = "Login successful! (demo — no backend connected)";
  formMessage.className = "form-message success";
  submitButton.disabled = false;
});

emailInput.addEventListener("input", () => {
  setFieldError(emailInput, emailError, validateEmail(emailInput.value));
});

passwordInput.addEventListener("input", () => {
  setFieldError(passwordInput, passwordError, validatePassword(passwordInput.value));
});
