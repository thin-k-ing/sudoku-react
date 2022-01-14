import Star from "./Star";

const Rating = (props) => {
	const stars = [];
	for (let i = 0; i < props.rating; i++) {
		stars.push(<Star key={i} />);
	}
	stars.push(<br key={-1} />);
	return <div className="rating">{stars}</div>;
};

export default Rating;
