import {useQuery} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Category from '../../components/restaurant/Category';
import Restaurant from '../../components/restaurant/Restaurant';
import RestaurantsSearch from '../../components/restaurant/RestaurantsSearch';
interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
	const [categories, setCategories] = useState<any>([]);
	const onCompletedRestaurants = (data: RestaurantsQuery) => {
		const {ok, message, restaurants} = data?.getRestaurants;
		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && restaurants) {
			setRestaurants(restaurants);
		}
	};
	const onCompletedCategories = (data: CategoriesQuery) => {
		const {ok, message, categories} = data?.getCategories;
		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && categories) {
			setCategories(categories);
		}
	};
	const {loading, error} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted: onCompletedRestaurants, variables: {data: {page: 1}}});
	const {loading: categoriesLoading, error: categoriesError} = useQuery<CategoriesQuery, CategoriesQueryVariables>(CATEGORIES, {onCompleted: onCompletedCategories});

	return (
		<>
			{error && <ErrorSpan message={errorMessage} />}
			{categoriesError && <ErrorSpan message={errorMessage} />}
			{errorMessage && <ErrorSpan message={errorMessage} />}
			{categoriesLoading && <Loading />}
			{loading ? (
				<Loading />
			) : (
				<div>
					<RestaurantsSearch />
					<div className='flex flex-row justify-between max-w-screen-sm mx-auto'>{categories && categories.map((category) => <Category key={category.id} category={category} />)}</div>
					<div className='w-full flex items-center justify-center font-bold text-lg bg-black text-white text-center py-2 my-4'>
						<h1 className='w-3/6'>Restaurants</h1>
					</div>
					<div className='grid grid-cols-3 gap-x-5 gap-y-10 max-w-screen-sm mx-auto '>{restaurants && restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}</div>
				</div>
			)}
		</>
	);
};

export default Restaurants;
