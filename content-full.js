document.body.addEventListener("click", () => {
    let currentTarget = event.target;
    let clone = event.target.cloneNode(true);
    currentTarget.append(clone);
});
