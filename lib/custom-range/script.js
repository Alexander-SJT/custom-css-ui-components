function customRangeLogic() {
    const elements = document.querySelectorAll('input[type="range"]');

    elements.forEach((el) => {
        el.style.setProperty("--value", el.value);
        el.style.setProperty("--min", el.min || 0);
        el.style.setProperty("--max", el.max || 100);

        el.addEventListener("input", () => {
            el.style.setProperty("--value", el.value);
        });
    });
}

function changeAllRanges() {
    let els = document.querySelectorAll("input");

    els.forEach((el) => {
        if (el.getAttribute("type") == "range") {
            el.classList.add("custom-range");
        }
    });
}
