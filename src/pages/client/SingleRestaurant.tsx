import {useParams} from 'react-router-dom';
import {RESTAURANT} from '../../graphql/queries';
import {RestaurantQuery, RestaurantQueryVariables} from '../../graphql/schemaTypes';
import {useQuery} from '@apollo/client';
import Loading from '../../components/loading/Loading';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Header from '../../components/header/Header';
import Restaurant from '../../components/restaurant/Restaurant';

const SingleRestaurant = () => {
	let {id} = useParams();
	const {data, loading, error} = useQuery<RestaurantQuery, RestaurantQueryVariables>(RESTAURANT, {variables: {data: {restaurantId: Number(id)}}});
	return (
		<>
			{!loading && data?.getRestaurant.ok && (
				<>
					<Header />
					<div className='mt-10 h-screen w-full mx-auto'>
						<Restaurant restaurant={data?.getRestaurant?.restaurant} />
					</div>
				</>
			)}
			{loading && <Loading />}
			{error && <ErrorSpan message={error.message} />}
		</>
	);
};

export default SingleRestaurant;
