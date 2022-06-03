import {useQuery} from '@apollo/client';
import {useState} from 'react';
import Loading from '../../components/loading/Loading';
import {RESTAURANTS} from '../../graphql/queries';
import {RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Restaurant from './Restaurant';
interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const [serverMessage, setServerMessage] = useState('');
	const [restaurants, setRestaurants] = useState<IRestaurant[]>();

	const onCompleted = (data: RestaurantsQuery) => {
		const {ok, message, restaurants} = data?.getRestaurants;
		if (!ok && message) {
			setServerMessage(message);
		}
		if (ok && restaurants) {
			setRestaurants(restaurants);
		}
	};
	const {loading} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted, variables: {data: {page: 2}}});

	return (
		<div>
			{serverMessage && <span className='bg-red-600 text-white px-4 span'>{serverMessage}</span>}
			<form className='w-full flex items-center justify-center font-bold text-lg bg-black text-center py-14 my-4'>
				<input className='input rounded-md border-0 w-3/6' type='search' placeholder='Search Restaurants...' />
			</form>
			{loading && <Loading />}
			{!loading && restaurants && restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
		</div>
	);
};

export default Restaurants;
