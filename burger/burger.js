let btn = document.querySelector(".burger__btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("burger__active");
	menu.classList.toggle("isActive");
});

document.addEventListener("click", (event) => {
	if (!menu.contains(event.target) && !btn.contains(event.target)) {
		menu.classList.remove("isActive");
		btn.classList.remove("burger__active");
	}
});
