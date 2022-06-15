import {useQuery, useReactiveVar} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {RESTAURANTS_OWNER} from '../../graphql/queries';
import {RestaurantsOwnerQuery, RestaurantsOwnerQueryVariables} from '../../graphql/schemaTypes';
import RestaurantCover from '../../components/restaurant/RestaurantCover';
import Pagination from '../../components/pagination/Pagination';
import {isDarkVar} from '../../apollo/GlobalVar';
import restaurantBg from '../../images/dining.svg';
import RestaurantOwnerCover from '../../components/restaurant/RestaurantOwnerCover';

interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const isDark = useReactiveVar(isDarkVar);
	const [errorMessage, setErrorMessage] = useState('');
	const [page, setPage] = useState(1);
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

	const onCompletedRestaurants = (data: RestaurantsOwnerQuery) => {
		const {ok, message, restaurants} = data?.getOwnerRestaurants;
		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && restaurants) {
			setRestaurants(restaurants);
		}
	};

	const {loading, error, data} = useQuery<RestaurantsOwnerQuery, RestaurantsOwnerQueryVariables>(RESTAURANTS_OWNER, {onCompleted: onCompletedRestaurants, variables: {data: {page}}});

	return (
		<>
			{error && <ErrorSpan message={errorMessage} />}
			{errorMessage && <ErrorSpan message={errorMessage} />}

			{loading ? (
				<Loading />
			) : (
				<>
					<div className='h-96'>
						<div className='flex flex-col justify-center bg-no-repeat bg-center h-full ' style={{backgroundImage: `url(${restaurantBg})`}}></div>
					</div>
					<div className={`h-0.5 ${!isDark ? 'bg-black' : 'bg-green-500'}`}></div>
					<div className='h-12'></div>
					<section className='md:h-128 px-10'>
						<div className='grid md:grid-cols-3 md:gap-y-10  gap-x-5 max-w-screen-md mx-auto md:max-w-screen-md lg:max-w-screen-lg'>{restaurants && restaurants.map((restaurant) => <RestaurantOwnerCover key={restaurant.id} restaurant={restaurant} />)}</div>
					</section>
					<div className='h-24 '></div>
					<Pagination totalPages={data?.getOwnerRestaurants.totalPages} currentPage={page} setCurrentPage={setPage} />
				</>
			)}
		</>
	);
};

export default Restaurants;
