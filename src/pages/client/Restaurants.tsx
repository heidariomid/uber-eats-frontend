import {useQuery} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Category from '../../components/restaurant/Category';
import RestaurantCover from '../../components/restaurant/RestaurantCover';
import RestaurantsSearch from '../../components/restaurant/RestaurantsSearch';
import Pagination from '../../components/pagination/Pagination';
interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [page, setPage] = useState(1);
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
	const {loading, error, data} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted: onCompletedRestaurants, variables: {data: {page}}});
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
				<>
					{/* search restaurants */}
					<RestaurantsSearch />
					{/* categories */}
					<div className='flex flex-row justify-between max-w-screen-md  mx-auto mb-16 mt-5'>{categories && categories.map((category) => <Category key={category.id} category={category} />)}</div>
					{/* restaurants */}
					<div className='grid md:grid-cols-3 gap-x-5 gap-y-10 max-w-screen-md mx-auto my-5'>{restaurants && restaurants.map((restaurant) => <RestaurantCover key={restaurant.id} restaurant={restaurant} />)}</div>
					{/* pagination */}
					<Pagination data={data} currentPage={page} setCurrentPage={setPage} />
				</>
			)}
		</>
	);
};

export default Restaurants;
