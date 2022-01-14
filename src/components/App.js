import React, { useState } from "react";
import Keypad from "./Keypad";
import "./styles.css";
import { generate } from "@d-livingston/sudoku";
import ActionBar from "./ActionBar";
import Board from "./Board";
import Rating from "./Rating";
import "material-icons/iconfont/material-icons.css";
import Heading from "./Heading";
import Footer from "./Footer";

const { sudoku: initSudoku, solution } = generate({ verbose: true });

let rating = 0;

initSudoku.forEach((row) => {
	row.forEach((entry) => {
		rating += entry === 0;
	});
});

rating = Math.floor((rating * 4) / 82 + 1);

class Move {
	constructor(r, c, initValue) {
		this.r = r;
		this.c = c;
		this.initValue = initValue;
	}
}

const moves = [];

const newGame = () => {
	window.location.reload();
};

function App() {
	const [sudoku, setSudoku] = useState(
		JSON.parse(JSON.stringify(initSudoku))
	);

	const canUndo = () => moves.length;

	const undo = () => {
		// we take the last move from the moves stack
		console.log(moves);
		if (moves.length > 0) {
			moves.pop(); // somehow two values are being pushed
			const { r, c, initValue } = moves.pop();
			setSudoku((prevSudoku) => {
				const tempSudoku = prevSudoku.slice();
				tempSudoku[r][c] = initValue;
				return tempSudoku;
			});
		}
	};

	const [cell, setCell] = useState({ r: -1, c: -1 });

	const keySelected = (keyValue) => {
		if (cell.r < 0 || cell.r > 8 || cell.c < 0 || cell.c > 8)
			console.log("Please select a cell!");
		else {
			console.log(solution[cell.r][cell.c], initSudoku[cell.r][cell.c]);
			setSudoku((prevSudoku) => {
				const tempSudoku = prevSudoku.slice();
				console.log(moves);
				moves.push(
					new Move(cell.r, cell.c, prevSudoku[cell.r][cell.c])
				);

				console.log(moves);
				tempSudoku[cell.r][cell.c] = keyValue;
				return tempSudoku;
			});
		}
		console.log("Key: ", keyValue);
	};

	const cellSelected = (r, c) => {
		initSudoku[r][c] === solution[r][c]
			? setCell({ r: -1, c: -1 })
			: setCell({ r: r, c: c });
	};

	const giveHint = () => {
		if (cell.r < 0 || cell.r > 8 || cell.c < 0 || cell.c > 8)
			console.log("Please select a cell!");
		else {
			setSudoku((prevSudoku) => {
				const tempSudoku = prevSudoku.slice();

				moves.push({
					r: cell.r,
					c: cell.c,
					initValue: tempSudoku[cell.r][cell.c],
				});

				console.log(moves);

				tempSudoku[cell.r][cell.c] = solution[cell.r][cell.c];
				return tempSudoku;
			});
		}
	};

	const erase = () => {
		if (cell.r < 0 || cell.r > 8 || cell.c < 0 || cell.c > 8)
			console.log("Please select a cell!");
		else {
			setSudoku((prevSudoku) => {
				const tempSudoku = prevSudoku.slice();
				tempSudoku[cell.r][cell.c] = 0;
				return tempSudoku;
			});
		}
	};

	const fixed = (r, c) => {
		return solution[r][c] === initSudoku[r][c];
	};

	const incorrect = (r, c) => sudoku[r][c] !== solution[r][c];

	const selected = (r, c) => cell.r === r && cell.c === c;

	return (
		<div className="App">
			<Heading />
			<div className="middleContainer">
				<div className="board">
					<Board
						sudoku={sudoku}
						cellSelected={cellSelected}
						fixed={fixed}
						incorrect={incorrect}
						selected={selected}
					/>
				</div>

				<div className="toolBar">
					<Rating rating={rating} />
					<Keypad keySelected={keySelected} />
					<ActionBar
						giveHint={giveHint}
						undo={undo}
						erase={erase}
						newGame={newGame}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
