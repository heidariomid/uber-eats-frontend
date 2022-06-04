import restaurantBg from '../../images/restaurants-bg.png';
const RestaurantsSearch = () => {
	return (
		<div className='w-full flex items-center justify-center bg-cover bg-center py-36' style={{backgroundImage: `url(${restaurantBg})`}}>
			<form className='w-full flex items-center justify-center font-bold text-lg  text-center py-14 my-4'>
				<input className='input border-0 w-3/6' type='search' placeholder='Search Restaurants...' />
				<button className='bg-white border-l-2 text-black py-2 px-4 '>Find</button>
			</form>
		</div>
	);
};

export default RestaurantsSearch;
