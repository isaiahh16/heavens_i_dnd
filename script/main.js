// select your element first - what the user is going to interact with
// these are the targets => what the user user
// this is a 1 to 1 connection to an element to the DOM
// let navButton = document.querySelector('#bottonOne');

// this is a 1 to 1 connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadLine = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');

// funtions go in the middle
// these are the "actions" that should happen
function changeBGImage() {
	debugger;
	// object.property = "new value"
	// theHeadLine.textContent = "Drag and Drop is fun!";
	// theHeadLine.classList.add('orange-headline');

	// change the background image in the drop zone
	puzzleBoard.style.backgroundImage = 'url(../images/backGround"' + this.id + '".jpg")';
}

// event handling at the bottom
// how is the user going to interact with the elements / controls you provide?

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button =>button.addEventListener('click', changeBGImage));