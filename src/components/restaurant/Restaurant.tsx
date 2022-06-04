const Restaurant = ({restaurant}) => {
	return (
		<div key={restaurant?.id} className='cursor-pointer  text-center'>
			<div className='py-24 bg-cover bg-center mb-2' style={{backgroundImage: `url(${restaurant?.coverImg})`}}></div>
			<h3 className='font-bold mb-1'>{restaurant?.name}</h3>
			<span className=' text-sm border-t-2 border-gray-200'>{restaurant?.category?.name}</span>
		</div>
	);
};

export default Restaurant;
