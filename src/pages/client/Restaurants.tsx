import {useQuery} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Category from './Category';
import Restaurant from './Restaurant';
import RestaurantsSearch from './RestaurantsSearch';
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
	const {loading, error} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted: onCompletedRestaurants, variables: {data: {page: 2}}});
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
					<div className='flex flex-row justify-around'>{categories && categories.map((category) => <Category key={category.id} category={category} />)}</div>
					<div>{restaurants && restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}</div>
				</div>
			)}
		</>
	);
};

export default Restaurants;
