const Restaurant = ({restaurant}) => {
	return (
		<div key={restaurant?.id} className='cursor-pointer  text-center '>
			<div className='w-full flex items-center justify-center font-bold text-lg bg-black text-white text-center py-2 my-4'>
				<h1 className='w-3/6'>{restaurant?.name}</h1>
			</div>
			<div className='py-44 bg-cover bg-center mb-2' style={{backgroundImage: `url(${restaurant?.coverImg})`}}></div>

			<span className=' text-sm border-t-2 border-gray-200'>{restaurant?.category?.name}</span>
		</div>
	);
};

export default Restaurant;
