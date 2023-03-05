import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formElement = document.querySelector(".feedback-form");

populateForm();

formElement.addEventListener("input", throttle(onFormInput, 500));
formElement.addEventListener("submit", onFormSubmit);

const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();

  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);

  Object.keys(formData).forEach((key) => delete formData[key]);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const refs = {
      inputEl: formElement.querySelector("input"),
      textareaEl: formElement.querySelector("textarea"),
    };
    const parsedFormData = JSON.parse(savedData);
    const { email, message } = parsedFormData;

    refs.inputEl.value = email;
    refs.textareaEl.textContent = message;
  }
}
