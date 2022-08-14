import {useLazyQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {SEARCH_RESTAURANT} from '../../graphql/queries';
import {SearchRestaurantsQuery, SearchRestaurantsQueryVariables} from '../../graphql/schemaTypes';
import restaurantBg from '../../images/restaurants-bg.png';
import {actions} from '../../store/actions';
import {useStateValue} from '../../store/context/ContextManager';

const RestaurantsSearch = () => {
	const [query, setQuery] = useState(null);
	const [_, dispatch] = useStateValue();
	const {register, getValues, handleSubmit, clearErrors} = useForm({
		mode: 'onChange',
	});

	const onValidSubmit = () => {
		const {restaurantName} = getValues();
		setQuery(restaurantName);
	};
	const clearSearchErrors = () => clearErrors('name');

	const [handler, {data, loading, error}] = useLazyQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SEARCH_RESTAURANT);
	useEffect(() => {
		if (query) {
			handler({
				variables: {
					data: {query},
				},
			});
		} else if (query === '') {
			window.location.reload();
		}
	}, [query]);

	useEffect(() => {
		if (data?.searchRestaurants.ok && !loading && !error) {
			dispatch({
				type: actions.RESTAURANTS,
				payload: {restaurants: data?.searchRestaurants?.restaurants},
			});
		}
	}, [data]);

	return (
		<div className='w-full flex flex-col items-center justify-center bg-cover bg-center py-36 ' style={{backgroundImage: `url(${restaurantBg})`}}>
			<div className='flex w-full items-center text-center text-white h-8 justify-center   text-4xl'>
				<span>Uber Eats </span>
			</div>
			<div className='flex px-4 mt-4 items-center text-center border-t-2 border-white  text-white h-8 justify-center  text-2xl'>
				<span className='mt-2'>Get the food you want</span>
			</div>
			<form onSubmit={handleSubmit(onValidSubmit)} className='w-full max-w-screen-md md:max-w-screen-xl flex items-center justify-center font-bold text-lg  text-center py-14 my-4'>
				<input className='input border-0 w-3/6' type='search' {...register('restaurantName', {})} placeholder='Search Restaurants...' onKeyDown={clearSearchErrors} />
				<button className='bg-black border-0 text-white py-2 px-4 '>Find</button>
			</form>
			{loading && (
				<div className=' flex justify-center items-center '>
					<div className='h-12  w-12 absolute border-2 border-green-400 animate-ping rounded-full'></div>
					<div className='h-14  w-14 absolute border-2 border-green-400 animate-ping rounded-full'></div>
					<div className='h-16  w-16 absolute border-2 border-green-400 animate-wiggle rounded-full'></div>
				</div>
			)}
		</div>
	);
};

export default RestaurantsSearch;
