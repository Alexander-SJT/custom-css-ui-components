//* Превращает все радио кнопки в кастомные

function changeAllRadioButtons() {
  let radios = document.querySelectorAll("input");

  radios.forEach((el) => {
    if (el.getAttribute("type") == "radio") {
      el.classList.add("custom-radio");
    }
  });
}
