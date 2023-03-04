const customSelects = document.querySelectorAll(".custom-select");

//* главный цикл работающий со всеми дочерними элементами .custom-select
customSelects.forEach((select) => {
	const selectSelect = select.querySelector(".custom-select__select");
	const selectListOptions = select.querySelector(".custom-select__list");
	const selectOptionItem = select.querySelectorAll(".custom-select__option");

	//* переключает отображение списка
	function showListOptions() {
		selectListOptions.classList.toggle("custom-select__list--show");
	}
	//* скрывает список
	function hideListOptions() {
		selectListOptions.classList.remove("custom-select__list--show");
	}

	//* переключает направление стрелочки
	function iconDisplayToggle() {
		selectSelect.classList.toggle("custom-select__select--active");
	}

	//* переключает направление стрелочки
	function changeIconDisplay() {
		selectSelect.classList.remove("custom-select__select--active");
	}

	//* cкрывает селект
	function hideSelect() {
		selectSelect.classList.add("custom-select__select--hide");
	}

	//* выделяет выбранный элемент в multipleModeOn
	function setColorActiveItem(e) {
		e.target.classList.toggle("custom-select__option--active");
	}

	//* устанавливает значением по умолчанию значение первого option item
	function setDefaultSelectedValue() {
		selectSelect.textContent = selectOptionItem[0].innerHTML;
	}

	function resetDefaultSelectedValue() {
		selectSelect.textContent = null;
	}
	//* проверяет наличие класса disabled
	function checkDisabled(e) {
		if (e.target.classList.contains("disabled")) return true;
	}

	//* по клику на селект отображает список и изменяет направление стрелочки
	function showOptionsListOnClick() {
		selectSelect.addEventListener("click", (e) => {
			if (checkDisabled(e)) return;
			iconDisplayToggle();
			showListOptions();
		});
	}

	//* по нажатию на пробел отображает список и изменяет направление стрелочки
	function showOptionListOnPressSpace() {
		selectSelect.addEventListener("keydown", (e) => {
			if (checkDisabled(e)) return;
			else if (e.code === "Space" || e.keyCode === 32) {
				iconDisplayToggle();
				showListOptions();
			}
		});
	}

	//* имитация атрибута checked
	function imitationSelectedBehaviour() {
		selectOptionItem.forEach((el) => {
			if (el.classList.contains("selected")) {
				selectSelect.value = el.textContent;
			}
		});
	}

	//* по клику вне селекта скрывает список option и изменяет положение стрелочки
	function hideOnOutClick() {
		document.addEventListener("mousedown", (e) => {
			if (!select.contains(e.target)) {
				hideListOptions();
				changeIconDisplay();
			}
		});
		document.addEventListener("keydown", (e) => {
			if (!select.contains(e.target) && (e.code === "Space" || e.code === 32)) {
				hideListOptions();
				changeIconDisplay();
			}
		});
	}

	//* Передача value выбранного option элемента в output.value
	function setOutputValue(optionsItem) {
		selectSelect.value = optionsItem.getAttribute("data-value");
	}

	//? ---
	function setOutputMultipleValue(optionsItem) {
		selectSelect.value += optionsItem.getAttribute("data-value");
	}

	//* Дефолтный режим
	function defaultModeOn() {
		setDefaultSelectedValue();
		showOptionsListOnClick();
		showOptionListOnPressSpace();
		imitationSelectedBehaviour();
		hideOnOutClick();

		selectOptionItem.forEach((options) => {
			options.addEventListener("click", (e) => {
				if (checkDisabled(e)) return;
				setOutputValue(options);
				iconDisplayToggle();
				hideListOptions();
			});

			options.addEventListener("keydown", (e) => {
				if (e.code === "Space" || e.keyCode === 32) {
					if (checkDisabled(e)) return;
					setOutputValue(options);
					iconDisplayToggle();
					hideListOptions();
				}
			});
		});
	}
	//* Режим множественного выбора
	function multipleModeOn() {
		resetDefaultSelectedValue();
		hideSelect();
		showListOptions();

		selectOptionItem.forEach((options) => {
			options.addEventListener("click", (e) => {
				if (checkDisabled(e)) return;
				setOutputMultipleValue(options);
				setColorActiveItem(e);
			});

			options.addEventListener("keydown", (e) => {
				if (e.code === "Space" || e.keyCode === 32) {
					if (checkDisabled(e)) return;
					setOutputMultipleValue(options);
					setColorActiveItem(e);
				}
			});
		});
	}

	selectSelect.classList.contains("multiple") ? multipleModeOn() : defaultModeOn();
});
