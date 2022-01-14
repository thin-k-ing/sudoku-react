const ActionButton = (props) => {
	return (
		<button className="action" onClick={() => props.action()}>
			{props.actionName}
		</button>
	);
};

export default ActionButton;
