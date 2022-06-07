import {useParams} from 'react-router-dom';
import {SEARCH_RESTAURANT} from '../../graphql/queries';
import {SearchRestaurantsQuery, SearchRestaurantsQueryVariables} from '../../graphql/schemaTypes';
import {useQuery} from '@apollo/client';
import Loading from '../../components/loading/Loading';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Header from '../../components/header/Header';
import Restaurant from '../../components/restaurant/Restaurant';

const SingleRestaurant = () => {
	let {query} = useParams();
	const {data, loading, error} = useQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SEARCH_RESTAURANT, {variables: {data: {query}}});
	return (
		<>
			{!loading && (
				<>
					<Header />
					<div className='mt-10 h-screen max-w-screen-md mx-auto'>
						{data?.searchRestaurants?.restaurants?.map((restaurant) => (
							<Restaurant restaurant={restaurant} />
						))}
					</div>
				</>
			)}
			{loading && <Loading />}
			{error && <ErrorSpan message={error.message} />}
		</>
	);
};

export default SingleRestaurant;
