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

const Restaurants = () => {
	const [state, dispatch] = useStateValue();
	const isDark = useReactiveVar(isDarkVar);
	const [errorMessage, setErrorMessage] = useState('');
	const [page, setPage] = useState(1);
	const [slug, setSlug] = useState<any>('all');
	const [categories, setCategories] = useState<any>([]);
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
			setCategories(categories);
		}
	};

	const {loading, error, data} = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RESTAURANTS, {onCompleted: onCompletedRestaurants, variables: {data: {page, slug}}});
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
				<div className='flex flex-row justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl  mx-auto mb-8 mt-5 px-5'>{categories && categories.map((category) => <Category key={category.id} category={category} slug={slug} setSlug={setSlug} />)}</div>
				<div className={`h-0.5 ${!isDark ? 'bg-black' : 'bg-green-500'}`}></div>
				<div className='h-12'></div>
				<section className='md:h-128 px-10'>
					<div className='grid md:grid-cols-3 md:gap-y-10  gap-x-5 max-w-screen-md mx-auto md:max-w-screen-md lg:max-w-screen-xl'>{restaurantsHandler()}</div>
				</section>
				<div className='h-24 '></div>
				{!loading ? (
					<Pagination totalPages={data?.getRestaurants.totalPages} currentPage={page} setCurrentPage={setPage} />
				) : (
					<div className='text-center justify-center'>
						<div className='flex flex-row justify-center items-center mb-20 '>
							<button>
								<div className={`  hover:bg-green-500  transition-all duration-500 bg-gray-400 flex mx-2 px-2 rounded-full  text-center items-center justify-center  text-white`}>{page}</div>
							</button>
						</div>
					</div>
				)}
			</>
		</>
	);
};

export default Restaurants;
