import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import restaurantBg from '../../images/restaurants-bg.png';

const RestaurantsSearch = () => {
	let navigate = useNavigate();
	const {register, getValues, handleSubmit, clearErrors} = useForm({
		mode: 'onChange',
	});

	const onValidSubmit = () => {
		const {restaurantName} = getValues();

		navigate(`/restaurants/${restaurantName}`, {replace: true, state: {restaurantName}});
	};

	const clearSearchErrors = () => clearErrors('name');
	return (
		<div className='w-full flex items-center justify-center bg-cover bg-center py-36' style={{backgroundImage: `url(${restaurantBg})`}}>
			<form onSubmit={handleSubmit(onValidSubmit)} className='w-full flex items-center justify-center font-bold text-lg  text-center py-14 my-4'>
				<input className='input border-0 w-3/6' type='search' {...register('restaurantName', {})} placeholder='Search Restaurants...' onKeyDown={clearSearchErrors} />
				<button className='bg-white border-l-2 text-black py-2 px-4 '>Find</button>
			</form>
		</div>
	);
};

export default RestaurantsSearch;
