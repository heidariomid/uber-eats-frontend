import {useReactiveVar} from '@apollo/client/react';
import {isDarkVar} from '../../../apollo/GlobalVar';
import {useStateValue} from '../../../store/context/ContextManager';
import Notification from '../../Notification/Notification';
import Dish from '../Dish';
import RestaurantSoon from './RestaurantSoon';

const Restaurant = ({restaurant}) => {
	const isDark = useReactiveVar(isDarkVar);
	const [state] = useStateValue();
	const showNotificationBasket = () => {
		return (
			<div className='absolute z-50 bg-red-500'>
				<Notification message={state.basket.message} />
			</div>
		);
	};

	return (
		<>
			{restaurant?.menu?.length === 0 ? (
				<RestaurantSoon restaurant={restaurant} />
			) : (
				<div className='h-full mx-auto lg:max-w-(--breakpoint-2xl) max-w-(--breakpoint-sm) items-center justify-center'>
					{state.basket.message && showNotificationBasket()}
					<div className='justify-center items-center flex'>
						<div
							className=' bg-cover bg-center py-36 w-full '
							style={{backgroundImage: `url(${restaurant?.coverImg})`}}
						>
							<div
								className={`${
									isDark ? 'bg-black/80' : 'bg-white/90'
								} h-52 w-full lg:w-1/2  flex flex-col`}
							>
								<div className='pl-14 py-2 '>
									<h1 className='font-bold mt-2 text-4xl '>{restaurant?.name}</h1>
									<div className='text-2xl mt-4'>
										{restaurant?.category?.name}
									</div>
									<div className='text-2xl '>{restaurant?.address}</div>
								</div>
							</div>
						</div>
					</div>

					<div className='grid mt-16 grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 max-w-(--breakpoint-md) mx-auto md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl) mb-20'>
						{restaurant?.menu?.map((dish, i) => (
							<Dish key={i} dish={dish} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Restaurant;
