import {useReactiveVar} from '@apollo/client';
import {Link} from 'react-router-dom';
import {isDarkVar} from '../../../apollo/GlobalVar';
import {Restaurant} from '../../../graphql/schemaTypes';
import Dish from '../Dish';
import DishChart from '../DishChart';
const RestaurantOwner = ({restaurant}: {restaurant: Restaurant}) => {
	let isDark = useReactiveVar(isDarkVar);
	// @ts-ignore
	const Paddle = window.Paddle;
	const openCheckout = () => {
		Paddle.Setup({vendor: 150347});
		Paddle.Checkout.open({product: 777063});
	};

	return (
		<>
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
								<span className='cursor-pointer py-2 text-white bg-green-500 mr-4 px-4' onClick={openCheckout}>
									Subscribe
								</span>
							</div>
						</div>
					</div>
				</div>
				<h1 className='w-full bg-black text-white text-2xl text-center py-6 '>Dishes</h1>
				<div>
					<div className='grid mt-16 md:grid-cols-3 gap-x-3 gap-y-10 mx-10'>
						{restaurant?.menu?.length === 0 ? (
							<h1 className='text-xl mb-5'>please upload a dish!</h1>
						) : (
							restaurant?.menu?.map((dish, i) => {
								// @ts-ignore
								return <Dish key={i} dish={dish} />;
							})
						)}
					</div>
				</div>
				<DishChart orders={restaurant?.orders} />
			</div>
		</>
	);
};

export default RestaurantOwner;
