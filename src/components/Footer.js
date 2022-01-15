import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<span>
				{new Date().getFullYear()} by
				<a href="https://thin-k-ing.github.io/dec-resume/#contact">
					Rishabh Kumar Soni
				</a>
			</span>
		</div>
	);
};

export default Footer;
