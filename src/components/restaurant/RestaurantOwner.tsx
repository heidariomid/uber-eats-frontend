import {useReactiveVar} from '@apollo/client';
import {Link} from 'react-router-dom';
import {isDarkVar} from '../../apollo/GlobalVar';

const RestaurantOwner = ({restaurant}) => {
	let isDark = useReactiveVar(isDarkVar);
	console.log(restaurant);
	return (
		<div className='h-screen mx-auto w-full'>
			<div className='bg-gray-500 bg-cover bg-center py-36 ' style={{backgroundImage: `url(${restaurant?.coverImg})`}}>
				<div className={`${isDark ? 'bg-black' : 'bg-white'}  h-52 w-2/4  flex flex-col`}>
					<div className='pl-14 py-2 '>
						<h1 className='font-bold mt-2 text-4xl '>{restaurant?.name}</h1>
						<div className='text-2xl mt-4'>{restaurant?.category?.name}</div>
						<div className='mt-10 '>
							<Link to={'add-dish'} className='py-2 text-white bg-black mr-4 px-4'>
								Add Dish
							</Link>
							<Link to={'promotion'} className='py-2 text-white bg-black mr-4 px-4'>
								Buy Promotion
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='h-96 items-center justify-center text-4xl flex'>
				{restaurant?.menu?.map((dish) => {
					return (
						<div>
							<div>{dish?.name}</div>
							<div>{dish?.price}</div>
							<div>{dish?.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantOwner;
