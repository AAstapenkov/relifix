/*let phoneInput = document.querySelector("#form-phone");
let btn = document.querySelector(".form-button");
let nameInput = document.querySelector("#form-name");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{39} (00) 000 000",
  lazy: false,  // make placeholder always visible
  placeholderChar: '_'   
});

phoneInput.addEventListener("input", inputHandler);
nameInput.addEventListener("input", inputHandler);


// Если ввели правильно - кнопка активна
function inputHandler() {
  if (phoneMask.masked.isComplete && nameInput.value) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}*/
let allForms = document.querySelectorAll('.validation-form');

allForms.forEach(form => {
  let phoneInput = form.querySelector(".form-phone");
  let btn = form.querySelector(".form-button");
  let nameInput = form.querySelector(".form-name");

  // Создаем маску в инпуте
  let phoneMask = new IMask(phoneInput, {
    mask: "+{39} (00) 000 000",
    lazy: false,  // make placeholder always visible
    placeholderChar: '_'   
  });

  // Если ввели правильно - кнопка активна
  let inputHandler = () => {
    if (phoneMask.masked.isComplete && nameInput.value) {
      btn.classList.add("btn--active");
    } else {
      btn.classList.remove("btn--active");
    }
  }

  phoneInput.addEventListener("input", inputHandler);
  nameInput.addEventListener("input", inputHandler);

});