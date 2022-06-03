const Restaurant = ({restaurant}) => {
	return (
		<div className=' px-5' key={restaurant.id}>
			<h3>{restaurant.name}</h3>
			<p>{restaurant.isPromoted ? 'promoted' : 'not promoted'}</p>
		</div>
	);
};

export default Restaurant;
