import {Link} from 'react-router-dom';

const Restaurant = ({restaurant}) => {
	return (
		<div key={restaurant?.id} className='cursor-pointer text-center group '>
			<Link to={`/restaurant/${restaurant.name}`}>
				<div className='py-24 group-hover:shadow-sm group-hover:shadow-black  bg-cover bg-center mb-2' style={{backgroundImage: `url(${restaurant?.coverImg})`}}></div>
				<h3 className='font-bold'>{restaurant?.name}</h3>
				<div className=' mx-auto bg-gray-100 h-0.5 w-20 text-center justify-center items-center bg-center '></div>
				<span className='text-sm '>{restaurant?.category?.name}</span>
			</Link>
		</div>
	);
};

export default Restaurant;
