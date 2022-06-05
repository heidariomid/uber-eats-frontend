import {useParams} from 'react-router-dom';
import {SEARCH_RESTAURANT} from '../../graphql/queries';
import {SearchRestaurantsQuery, SearchRestaurantsQueryVariables} from '../../graphql/schemaTypes';
import {useQuery} from '@apollo/client';
import RestaurantCover from '../../components/restaurant/RestaurantCover';
import Loading from '../../components/loading/Loading';
import ErrorSpan from '../../components/custom/ErrorSpan';

const RestaurantFind = () => {
	let {query} = useParams();
	const {data, loading, error} = useQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SEARCH_RESTAURANT, {variables: {data: {query}}});
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
					<div className='grid md:grid-cols-3 gap-x-5 gap-y-10 max-w-screen-md mx-auto'>
						{data?.searchRestaurants?.restaurants?.map((restaurant) => (
							<RestaurantCover key={restaurant.id} restaurant={restaurant} />
						))}
					</div>
				</>
			)}
			{loading && <Loading />}
			{error && <ErrorSpan message={error.message} />}
		</>
	);
};

export default RestaurantFind;
