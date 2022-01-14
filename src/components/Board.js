import { generate } from "@d-livingston/sudoku";
import Cell from "./Cell";

const Board = (props) => {
	const cells = [];
	for (let r = 0; r < props.sudoku.length; r++) {
		for (let c = 0; c < props.sudoku.length; c++) {
			cells.push(
				<Cell
					key={r * 10 + c}
					value={props.sudoku[r][c]}
					r={r}
					c={c}
					cellSelected={props.cellSelected}
					fixed={props.fixed}
					incorrect={props.incorrect}
					selected={props.selected}
				/>
			);
		}
		cells.push(<br />);
	}
	return cells;
};

export default Board;
