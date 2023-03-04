function customTabsInit() {
	let tabsBtn = document.querySelectorAll(".custom-tabs__btn");
	let tabsContent = document.querySelectorAll(".custom-tabs__content");

	let activeBtnClass = "custom-tabs__btn--active";
	let activeContentClass = "custom-tabs__content--active";

	function addBtnsId() {
		tabsBtn.forEach((el, index) => {
			el.setAttribute("data-order", index + 1);
		});
	}

	function addContentId() {
		tabsContent.forEach((el, index) => {
			el.setAttribute("data-order", index + 1);
		});
	}

	//? delete all colors
	function deletBtnColor() {
		tabsBtn.forEach((el) => {
			el.classList.remove(activeBtnClass);
		});
	}

	//? set color
	function setBtnColor(event) {
		event.target.classList.add(activeBtnClass);
	}

	//? change color
	function changeColor() {
		tabsBtn.forEach((el) => {
			el.addEventListener("focusin", (event) => {
				deletBtnColor();
				setBtnColor(event);
			});
		});
	}

	//? get order value for btn
	function getCurrentBtnOrder(event) {
		return event.target.getAttribute("data-order");
	}

	//? get order value for content
	function getContentOrder(item) {
		return item.getAttribute("data-order");
	}

	//? remove content
	function hideTabsContent() {
		tabsContent.forEach((item) => {
			item.classList.remove(activeContentClass);
		});
	}

	//? show content
	function showTabsContent(event) {
		tabsContent.forEach((item) => {
			if (getCurrentBtnOrder(event) == getContentOrder(item)) {
				item.classList.add(activeContentClass);
			}
		});
	}

	//? change content
	function changeContent() {
		tabsBtn.forEach((item) => {
			item.addEventListener("focusin", (event) => {
				hideTabsContent();
				showTabsContent(event);
			});
		});
	}

	addBtnsId(); //* цикл
	addContentId(); //* цикл
	changeColor(); //* control color
	changeContent(); //* control content
}

customTabsInit();
