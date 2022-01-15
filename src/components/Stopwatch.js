import React, { useState, useEffect } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(true);
	const toggleRunning = () => {
		setRunning(!running);
	};

	useEffect(() => {
		let interval;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);
	return (
		<div className="stopwatch" onClick={() => toggleRunning()}>
			<div className="timerIcon">
				<span class="material-icons-outlined">timer</span>
			</div>
			<div className="numbers">
				<span>
					{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
				</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
			</div>
			<div className="toggleButton">
				<span class="material-icons-outlined">
					{running ? "pause" : "play_arrow"}
				</span>
			</div>
		</div>
	);
};

export default Stopwatch;
