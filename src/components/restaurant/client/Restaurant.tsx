import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../../apollo/GlobalVar';
import {useStateValue} from '../../../store/context/ContextManager';
import Notification from '../../Notification/Notification';
import Dish from '../Dish';

const Restaurant = ({restaurant}) => {
	let isDark = useReactiveVar(isDarkVar);
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
			<div className='h-screen mx-auto lg:max-w-screen-2xl max-w-screen-sm   items-center justify-center'>
				{state.basket.message && showNotificationBasket()}
				<div className='justify-center items-center flex'>
					<div className=' bg-cover bg-center py-36 w-full ' style={{backgroundImage: `url(${restaurant?.coverImg})`}}>
						<div className={`${isDark ? 'bg-black' : 'bg-white bg-opacity-90'}  rounded-r-lg h-52 w-1/3  flex flex-col`}>
							<div className='pl-14 py-2 '>
								<h1 className='font-bold mt-2 text-4xl '>{restaurant?.name}</h1>
								<div className='text-2xl mt-4'>{restaurant?.category?.name}</div>
								<div className='text-2xl '>{restaurant?.address}</div>
							</div>
						</div>
					</div>
				</div>

				<div className=' flex flex-col items-center mt-10 '>
					{restaurant?.menu?.length === 0 && (
						<div className='flex items-center justify-center text-xl mb-5 text-center w-full bg-red-600 text-white py-10 '>
							<p className='text-2xl font-bold'>No dish founded !</p>
						</div>
					)}
					<div className='grid mt-16 md:grid-cols-3  gap-x-5 gap-y-10 mx-10 w-full '>
						{restaurant?.menu?.map((dish, i) => {
							return <Dish key={i} dish={dish} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Restaurant;
