import {useReactiveVar} from '@apollo/client';
import {Link} from 'react-router-dom';
import {isDarkVar} from '../../apollo/GlobalVar';

const Restaurant = ({restaurant}) => {
	const isDark = useReactiveVar(isDarkVar);

	return (
		<div key={restaurant?.id} className='cursor-pointer text-center group '>
			<Link to={`/restaurant/${restaurant.id}`}>
				<div className='py-24 group-hover:shadow-md group-hover:shadow-green-500  bg-cover bg-center mb-2' style={{backgroundImage: `url(${restaurant?.coverImg})`}}></div>
				<h3 className='font-bold'>{restaurant?.name}</h3>
				<div className={` mx-auto ${isDark ? 'bg-green-500' : 'bg-black'} h-0.5 w-20 text-center justify-center items-center bg-center `}></div>
				<span className='text-sm '>{restaurant?.category?.name}</span>
			</Link>
		</div>
	);
};

export default Restaurant;
