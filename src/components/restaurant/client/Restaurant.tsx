import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../../apollo/GlobalVar';

const Restaurant = ({restaurant}) => {
	let isDark = useReactiveVar(isDarkVar);
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
				<div className='h-96 items-center justify-center text-4xl flex'></div>
			</div>
		</>
	);
};

export default Restaurant;
