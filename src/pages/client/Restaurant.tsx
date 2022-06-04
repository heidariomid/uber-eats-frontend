import {useParams} from 'react-router-dom';
import {SEARCH_RESTAURANT} from '../../graphql/queries';
import {SearchRestaurantsQuery, SearchRestaurantsQueryVariables} from '../../graphql/schemaTypes';
import {useQuery} from '@apollo/client';
import RestaurantCo from '../../components/restaurant/Restaurant';
import Loading from '../../components/loading/Loading';
import ErrorSpan from '../../components/custom/ErrorSpan';

const Restaurant = () => {
	let {query} = useParams();
	const {data, loading, error} = useQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SEARCH_RESTAURANT, {variables: {data: {query}}});
	console.log(data?.searchRestaurants.ok);
	return (
		<>
			{!loading && (
				<>
					{data?.searchRestaurants.ok ? (
						<div className='w-full flex items-center justify-center font-bold text-lg bg-black text-white text-center py-2 my-4'>
							<h1 className='w-3/6'>Founded Restaurants</h1>
						</div>
					) : (
						<div className='w-full flex items-center justify-center font-bold text-lg bg-red-600 text-white text-center py-2 my-4'>
							<h1 className='w-3/6'>{data?.searchRestaurants?.message}</h1>
						</div>
					)}
					<div className='mx-auto max-w-screen-md py-10'>
						{data?.searchRestaurants?.restaurants?.map((restaurant) => (
							<RestaurantCo key={restaurant.id} restaurant={restaurant} />
						))}
					</div>
				</>
			)}
			{loading && <Loading />}
			{error && <ErrorSpan message={error.message} />}
		</>
	);
};

export default Restaurant;
