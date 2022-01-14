import React from "react";

const Key = (props) => {
	return (
		<div
			className="key"
			onClick={() => {
				props.keySelected(props.value);
			}}
		>
			{props.value}
		</div>
	);
};

export default Key;
