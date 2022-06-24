import {useReactiveVar} from '@apollo/client';
import {faCancel} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {isDarkVar} from '../../../apollo/GlobalVar';
import Dish from '../Dish';

const Restaurant = ({restaurant}) => {
	let isDark = useReactiveVar(isDarkVar);
	const [startOrder, setStartOrder] = useState<Boolean>(false);
	const [isOrderStarted, setIsOrderStarted] = useState<Boolean>(false);
	const triggerOrder = () => {
		setIsOrderStarted((current) => !current);
	};

	return (
		<>
			<div className='h-screen mx-auto w-full'>
				<div className='bg-gray-500 bg-cover bg-center py-36 ' style={{backgroundImage: `url(${restaurant?.coverImg})`}}>
					<div className={`${isDark ? 'bg-black' : 'bg-white'}  h-52 w-1/3  flex flex-col`}>
						<div className='pl-14 py-2 '>
							<h1 className='font-bold mt-2 text-4xl '>{restaurant?.name}</h1>
							<div className='text-2xl mt-4'>{restaurant?.category?.name}</div>
							<div className='text-2xl '>{restaurant?.address}</div>
						</div>
					</div>
				</div>
				<div className=' flex flex-col'>
					<div className='flex justify-center'>
						{!isOrderStarted ? (
							<button className='flex mx-2 w-1/4 mt-5 bg-green-500 justify-center btn' onClick={triggerOrder}>
								Start Order
							</button>
						) : (
							<>
								<span className='flex mx-2 w-1/4 mt-5 text-orange-500  bg-gray-200 justify-center btn' onClick={triggerOrder}>
									Ordering
								</span>
								<button className='w-10 mx-2 px-2  mt-5 bg-red-500 justify-center btn' onClick={triggerOrder}>
									X
								</button>
							</>
						)}
					</div>
					<div className='grid mt-16 md:grid-cols-3 gap-x-3 gap-y-10 mx-10'>
						{restaurant?.menu?.length === 0 ? (
							<h1 className='text-xl mb-5'>please upload a dish!</h1>
						) : (
							restaurant?.menu?.map((dish, i) => {
								// @ts-ignore
								return <Dish key={i} dish={dish} strarted={setIsOrderStarted} />;
							})
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Restaurant;
