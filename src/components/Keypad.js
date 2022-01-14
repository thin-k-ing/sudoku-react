import React from "react";
import Key from "./Key";

const Keypad = (props) => {
	const keys = [];
	for (let i = 1; i < 10; i++) {
		keys.push(<Key key={i} value={i} keySelected={props.keySelected} />);
		if (i === 3 || i === 6) keys.push(<br />);
	}
	return keys;
};

export default Keypad;
