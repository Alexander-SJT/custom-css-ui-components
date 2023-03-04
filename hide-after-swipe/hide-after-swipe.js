function hideAfterSwipeX(hideElem) {
	//* координаты начала свайпа
	let startTouchPositionX;

	//* устанавливаем размер свайпа
	//* чем большее значение, тем длиньше должен быть свайп, и наоборот
	let swipeLenght = 120;

	hideElem.addEventListener("touchstart", (event) => {
		//* узнаем координаты начала свайпа
		startTouchPositionX = event.touches[0].clientX;
	});

	hideElem.addEventListener("touchend", (event) => {
		//* узнаем координаты окончания свайпа
		let finishTouchPositionX = event.changedTouches[0].clientX;

		//* если значение окончания свайпа меньше чем значение начала свайпа - свайп был влево
		//* и наоборот

		//* на основе полученных значений определяем пройденную пальцем дистанцию
		let swipeDistance = startTouchPositionX - finishTouchPositionX; //* to left
		// let swipeDistance = finishTouchPositionX - startTouchPositionX; //* to right

		//* проверяем достаточно ли был длинным свайп что бы скрыть элемент
		if (swipeDistance > swipeLenght) {
			hideElem.classList.toggle("isActive");
		}
	});
}

function hideAfterSwipeY(hideElem) {
	let startTouchPositionY;
	let swipeLenght = 120;

	hideElem.addEventListener("touchstart", (event) => {
		startTouchPositionY = event.touches[0].clientY;
	});

	hideElem.addEventListener("touchend", (event) => {
		let finishTouchPositionY = event.changedTouches[0].clientY;
		let swipeDistance = startTouchPositionY - finishTouchPositionY; //* to top
		// let swipeDistance = finishTouchPositionY - startTouchPositionY; //* to bottom
		if (swipeDistance > swipeLenght) {
			hideElem.classList.toggle("isActive");
		}
	});
}
