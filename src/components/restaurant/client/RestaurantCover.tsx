import {useReactiveVar} from '@apollo/client/react';
import Link from 'next/link';
import {isDarkVar} from '../../../apollo/GlobalVar';

const Restaurant = ({restaurant}) => {
	const isDark = useReactiveVar(isDarkVar);

	return (
		<div key={restaurant?.id} className='cursor-pointer text-center group '>
			<Link href={`/restaurant/${restaurant.id}`}>
				<img src={restaurant?.coverImg} alt={restaurant?.name} className='w-full h-auto mb-2' />

				<h3 className='relative font-bold text-lg'>{restaurant?.name}</h3>
				<div
					className={`relative mx-auto ${isDark ? 'bg-green-500' : 'bg-black'} ${
						!isDark && 'group-hover:bg-green-500'
					} h-0.5 w-20 text-center justify-center items-center bg-center `}
				>
					{restaurant?.isOpen ? (
						<div className='-left-10 -top-1 absolute h-3 w-3 rounded-full animate-pulse  bg-green-500 '></div>
					) : (
						<div className='-left-10 -top-1 absolute h-3 w-3 rounded-full   bg-red-500 '></div>
					)}
				</div>
				<span className='text-sm uppercase'>{restaurant?.category?.name}</span>
			</Link>
		</div>
	);
};

export default Restaurant;
