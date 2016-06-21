
document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
	var boardChildren = document.getElementsByClassName('board')[0].children;
	for (var i = 0; i < boardChildren.length; i++) {
		addListeners(boardChildren[i]);
		addCellToBoard(boardChildren[i]);
	}
	console.log(board);
}

function addListeners (element) {
	for (var i = 0; i < element.length; i++) {
	element[i].addEventListener('click', showCell)
	element[i].addEventListener('contextmenu', markCell)
	}
}

function showCell (evt) {
	evt.target.classList.remove('hidden')
}

function markCell (evt) {
	evt.preventDefault()
	evt.target.classList.toggle('marked')
}

var board = {
	cells: []
};

function getRow (element) {
	var className = element.classList;
	for (var j = 0; j < className.length; j++) {
		if (className[j].includes('row-')) {
			var nameParts = className[j].split('-')
			return parseInt(nameParts[1], 10)
		}
	}
}

function getCol (element) {
	var className = element.classList;
	for (var k = 0; k < className.length; k++) {
		if (className[k].includes('col-')) {
			var nameParts = className[k].split('-')
			return parseInt(nameParts[1], 10)
		}
	}
}

function addCellToBoard (el) {
	var newCell = {}
		newCell.row = getRow(el);
		newCell.col = getCol(el);
			
		if (el.classList.contains('mine')) {
			newCell.isMine = true;
		}
		else {
			newCell.isMine = false;
		}

}
		board.cells.push(newCell)


