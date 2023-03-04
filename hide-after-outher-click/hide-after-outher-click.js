document.addEventListener("click", (event) => {
	if (!elemA.contains(event.target) && !elemB.contains(event.target)) {
		elemA.classList.remove("isActive");
		elemB.classList.remove("burger__active");
	}
});
