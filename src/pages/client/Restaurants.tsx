import {useQuery, useReactiveVar} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Category from '../../components/restaurant/Category';
import RestaurantCover from '../../components/restaurant/client/RestaurantCover';
import RestaurantsSearch from '../../components/restaurant/RestaurantsSearch';
import Pagination from '../../components/pagination/Pagination';
import {isDarkVar} from '../../apollo/GlobalVar';
import {useStateValue} from '../../store/context/ContextManager';
import {actions} from '../../store/actions';
interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const [state, dispatch] = useStateValue();
	const isDark = useReactiveVar(isDarkVar);
	const [errorMessage, setErrorMessage] = useState('');
	const [page, setPage] = useState(1);
	const onCompletedRestaurants = (data: RestaurantsQuery) => {
		const {ok, message, restaurants} = data?.getRestaurants;

		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && restaurants) {
			dispatch({
				type: actions.RESTAURANTS,
				payload: {restaurants},
			});
		}
	};
	const onCompletedCategories = (data: CategoriesQuery) => {
		const {ok, message, categories} = data?.getCategories;
		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && categories) {
			dispatch({
				type: actions.CATEGORIES,
				payload: {categories},
			});
		}
	};

	const {loading, error, data} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted: onCompletedRestaurants, variables: {data: {page, slug: state?.category?.slug}}});
	const {loading: categoriesLoading, error: categoriesError} = useQuery<CategoriesQuery, CategoriesQueryVariables>(CATEGORIES, {onCompleted: onCompletedCategories});
	const restaurantsHandler = () => {
		if (state.restaurant.restaurants) {
			return state.restaurant.restaurants.map((restaurant) => <RestaurantCover key={restaurant.id} restaurant={restaurant} />);
		}
	};
	return (
		<>
			{error && <ErrorSpan message={errorMessage} />}
			{categoriesError && <ErrorSpan message={errorMessage} />}
			{errorMessage && <ErrorSpan message={errorMessage} />}
			{categoriesLoading && <Loading />}

			<>
				<RestaurantsSearch />

				<div className='flex flex-row justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl  mx-auto mb-8 mt-5 px-5'>{state.category.categories && state.category.categories.map((category) => <Category key={category.id} category={category} />)}</div>

				<div className={`h-0.5 ${!isDark ? 'bg-black' : 'bg-green-500'}`}></div>
				<div className='h-12'></div>
				<section className='md:h-128 px-10'>
				 <div className='grid md:grid-cols-3 md:gap-y-10  gap-x-5 max-w-screen-md mx-auto md:max-w-screen-md lg:max-w-screen-xl'>{restaurantsHandler()</div>
				</section>
				<div className='h-24 '></div>
				 <Pagination totalPages={data?.getRestaurants.totalPages} currentPage={page} setCurrentPage={setPage} />

				
			</>
		</>
	);
};

export default Restaurants;
