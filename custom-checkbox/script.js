//* Превращает все чекбоксы в кастомные

function changeAllCheckboxs() {
  let radios = document.querySelectorAll("input");

  radios.forEach((el) => {
    if (el.getAttribute("type") == "checkbox") {
      el.classList.add("custom-checkbox");
    }
  });
}
