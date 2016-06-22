
document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
	var boardChildren = document.getElementsByClassName('board')[0].children;
	for (var i = 0; i < boardChildren.length; i++) {
		addListeners(boardChildren[i]);
		addCellToBoard(boardChildren[i]);
	}
	for (var j = 0; j < board.cells.length; j++) {
		board.cells[j].surroundingMines = countSurroundingMines(board.cells[j]);
	}
}

function addListeners (element) {
	element.addEventListener('click', showCell)
	element.addEventListener('contextmenu', markCell)
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
	var newCell = {};
		newCell.row = getRow(el);
		newCell.col = getCol(el);
			
		if (el.classList.contains('mine')) {
			newCell.isMine = true;
		}
		else {
			newCell.isMine = false;
		}

		board.cells.push(newCell)
}

function countSurroundingMines (cells) {
	var surroundingCells = getSurroundingCells(cells.row, cells.col);
	var number = 0;
	for (var i = 0; i < surroundingCells.length; i++) {
		if (surroundingCells[i].isMine) {
			number++;
			console.log(i);
		}
	}
			return number;
}

