function SudokuSolutions() {
	type cell = {
		column: string;
		row: number;
		value?: number;
	};

	type sudoku = {
		cells: cell[];
	};

	let sudokuFromWikipedia: sudoku = {
		cells: [
			{ column: "a", row: 1, value: 5 },
			{ column: "b", row: 1, value: 3 },
			{ column: "c", row: 1 },
			{ column: "d", row: 1 },
			{ column: "e", row: 1, value: 7 },
			{ column: "f", row: 1 },
			{ column: "g", row: 1 },
			{ column: "h", row: 1 },
			{ column: "i", row: 1 },

			{ column: "a", row: 2, value: 6 },
			{ column: "b", row: 2 },
			{ column: "c", row: 2 },
			{ column: "d", row: 2, value: 1 },
			{ column: "e", row: 2, value: 9 },
			{ column: "f", row: 2, value: 5 },
			{ column: "g", row: 2 },
			{ column: "h", row: 2 },
			{ column: "i", row: 2 },

			{ column: "a", row: 3 },
			{ column: "b", row: 3, value: 5 },
			{ column: "c", row: 3, value: 5 },
			{ column: "d", row: 3 },
			{ column: "e", row: 3 },
			{ column: "f", row: 3 },
			{ column: "g", row: 3 },
			{ column: "h", row: 3, value: 6 },
			{ column: "i", row: 3 },

			{ column: "a", row: 4, value: 8 },
			{ column: "b", row: 4 },
			{ column: "c", row: 4 },
			{ column: "d", row: 4 },
			{ column: "e", row: 4, value: 6 },
			{ column: "f", row: 4 },
			{ column: "g", row: 4 },
			{ column: "h", row: 4 },
			{ column: "i", row: 4, value: 3 },

			{ column: "a", row: 5, value: 4 },
			{ column: "b", row: 5 },
			{ column: "c", row: 5 },
			{ column: "d", row: 5, value: 8 },
			{ column: "e", row: 5 },
			{ column: "f", row: 5, value: 3 },
			{ column: "g", row: 5 },
			{ column: "h", row: 5 },
			{ column: "i", row: 5, value: 1 },

			{ column: "a", row: 6, value: 7 },
			{ column: "b", row: 6 },
			{ column: "c", row: 6 },
			{ column: "d", row: 6 },
			{ column: "e", row: 6, value: 2 },
			{ column: "f", row: 6 },
			{ column: "g", row: 6 },
			{ column: "h", row: 6 },
			{ column: "i", row: 6, value: 6 },

			{ column: "a", row: 7 },
			{ column: "b", row: 7, value: 6 },
			{ column: "c", row: 7 },
			{ column: "d", row: 7 },
			{ column: "e", row: 7 },
			{ column: "f", row: 7 },
			{ column: "g", row: 7, value: 2 },
			{ column: "h", row: 7, value: 8 },
			{ column: "i", row: 7 },

			{ column: "a", row: 8 },
			{ column: "b", row: 8 },
			{ column: "c", row: 8 },
			{ column: "d", row: 8, value: 4 },
			{ column: "e", row: 8, value: 1 },
			{ column: "f", row: 8, value: 9 },
			{ column: "g", row: 8 },
			{ column: "h", row: 8 },
			{ column: "i", row: 8, value: 5 },

			{ column: "a", row: 9 },
			{ column: "b", row: 9 },
			{ column: "c", row: 9 },
			{ column: "d", row: 9 },
			{ column: "e", row: 9, value: 8 },
			{ column: "f", row: 9 },
			{ column: "g", row: 9 },
			{ column: "h", row: 9, value: 7 },
			{ column: "i", row: 9, value: 9 },
		],
	};

	function isEmpty(cellToCheck: cell): sudoku {
		let emptySudoku: sudoku = { cells: [] };

		if (cellToCheck.value == undefined) {
			emptySudoku.cells.push(cellToCheck);
		}
		return emptySudoku;
	}

	/* const checkThis = sudokuFromWikipedia.cells.map(isEmpty); */

	return console.log(sudokuFromWikipedia);

	/* return "Sudoku!"; */
}

SudokuSolutions();
