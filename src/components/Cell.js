const Cell = ({ r, c, value, fixed, selected, incorrect, cellSelected }) => {
	const colored = (Math.floor(r / 3) + Math.floor(c / 3)) % 2 === 0;
	const backgroundColor = colored ? "#EEEEEE" : "white";
	const color = fixed(r, c)
		? "#141E61"
		: incorrect(r, c)
		? "#DA0037"
		: "#FE7E6D";
	const fontWeight = fixed(r, c) ? "bold" : "normal";
	const border = selected(r, c) ? "2px solid #0F044C" : "2px solid #787A91";
	const borderRadius = "0px";
	return (
		<div
			className="cell"
			onClick={() => {
				cellSelected(r, c);
			}}
			style={{
				color: color,
				backgroundColor: backgroundColor,
				fontWeight: fontWeight,
				border: border,
				borderRadius: borderRadius,
			}}
		>
			{value ? value : <span>&shy;</span>}
		</div>
	);
};

export default Cell;
