import ActionButton from "./ActionButton";

const ActionBar = ({ giveHint, undo, erase, newGame }) => {
	return (
		<div className="actionBar">
			<div className="action" onClick={() => giveHint()}>
				<span className="material-icons-outlined">lightbulb</span>
				<br />
				hint
			</div>
			<div className="action" onClick={() => undo()}>
				<span className="material-icons-outlined">undo</span>
				<br />
				undo
			</div>
			<div className="action" onClick={() => erase()}>
				<span className="material-icons-outlined">clear</span>
				<br />
				clear
			</div>

			<div className="newGame" onClick={() => newGame()}>
				<h3>new game</h3>
			</div>
		</div>
	);
};

export default ActionBar;
