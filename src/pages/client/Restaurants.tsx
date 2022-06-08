import {useQuery, useReactiveVar} from '@apollo/client';
import {useState} from 'react';
import ErrorSpan from '../../components/custom/ErrorSpan';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsQuery, RestaurantsQueryVariables} from '../../graphql/schemaTypes';
import Category from '../../components/restaurant/Category';
import RestaurantCover from '../../components/restaurant/RestaurantCover';
import RestaurantsSearch from '../../components/restaurant/RestaurantsSearch';
import Pagination from '../../components/pagination/Pagination';
import {isDarkVar} from '../../apollo/GlobalVar';
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
					<RestaurantsSearch />

					<div className='flex flex-row justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  mx-auto mb-8 mt-5 px-5'>{categories && categories.map((category) => <Category key={category.id} category={category} />)}</div>
					<div className={`h-0.5 ${!isDark ? 'bg-black' : 'bg-green-500'}`}></div>
					<div className='h-12'></div>
					<section className='md:h-128 px-10'>
						<div className='grid md:grid-cols-3 md:gap-y-10  gap-x-5 max-w-screen-md mx-auto md:max-w-screen-md lg:max-w-screen-lg'>{restaurants && restaurants.map((restaurant) => <RestaurantCover key={restaurant.id} restaurant={restaurant} />)}</div>
					</section>
					<div className='h-24 '></div>
					<Pagination totalPages={data?.getRestaurants.totalPages} currentPage={page} setCurrentPage={setPage} />
				</>
			)}
		</>
	);
};

export default Restaurants;
