import {useQuery, useReactiveVar} from '@apollo/client';
import {useState} from 'react';
import Loading from '../../components/loading/Loading';
import {CATEGORIES, RESTAURANTS_OWNER} from '../../graphql/queries';
import {CategoriesQuery, CategoriesQueryVariables, RestaurantsOwnerQuery, RestaurantsOwnerQueryVariables} from '../../graphql/schemaTypes';
import Pagination from '../../components/pagination/Pagination';
import {isDarkVar} from '../../apollo/GlobalVar';
import restaurantBg from '../../images/dining.svg';
import RestaurantOwnerCover from '../../components/restaurant/owner/RestaurantOwnerCover';
import {Link} from 'react-router-dom';
import Category from '../../components/restaurant/Category';

interface IRestaurant {
	id: number;
	name: string;
	isPromoted: boolean;
}
const Restaurants = () => {
	const isDark = useReactiveVar(isDarkVar);
	const [errorMessage, setErrorMessage] = useState('');
	const [page, setPage] = useState(1);
	const [categories, setCategories] = useState<any>([]);
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

	const {loading, error, data} = useQuery<RestaurantsOwnerQuery, RestaurantsOwnerQueryVariables>(RESTAURANTS_OWNER, {
		onCompleted: onCompletedRestaurants,
		variables: {data: {page}},
	});
	const onCompletedCategories = (data: CategoriesQuery) => {
		const {ok, message, categories} = data?.getCategories;
		if (!ok && message) {
			setErrorMessage(message);
		}
		if (ok && categories) {
			setCategories(categories);
		}
	};

	const {loading: categoriesLoading, error: categoriesError} = useQuery<CategoriesQuery, CategoriesQueryVariables>(CATEGORIES, {onCompleted: onCompletedCategories});
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='max-h-screen'>
					<div className='h-96 max-w-screen-xl mx-auto mt-10 w-full '>
						<div className='flex flex-col justify-center bg-no-repeat bg-center   h-full ' style={{backgroundImage: `url(${restaurantBg})`}}>
							<div className={`${isDark ? 'bg-black' : 'bg-white'}  h-52 w-1/3   flex flex-row`}>
								<div className='   '>
									<h1 className='font-bold mt-2 text-4xl '>Welcome to Uber Eats</h1>
									<h3 className={`font-bold text-xl  mt-4 ${isDark ? 'text-white' : 'text-gray-800'} `}>
										After adding your restaurant, you should wait for confirmation from us .
									</h3>
									<div className='flex flex-row justify-start mt-10'>
										<Link to={'/restaurant/add'} className='text-xl btn mr-4 px-4 bg-green-500'>
											Add Restaurant
										</Link>
										<Link to={'/category/add'} className='text-xl bg-black text-center text-white p-2 px-4'>
											Add Category
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{categories && (
						<div className='flex flex-row justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl  mx-auto mb-8 mt-5 px-5'>
							{categories.map((category) => (
								<Category key={category.id} category={category} />
							))}
						</div>
					)}
					<div className={`h-0.5 m-10 ${!isDark ? 'bg-black' : 'bg-green-500'}`}></div>
					<section className='md:h-128 px-10'>
						{!errorMessage ? (
							<div className='grid md:grid-cols-3 mt-10 md:gap-y-10  gap-x-5 max-w-screen-md mx-auto md:max-w-screen-md lg:max-w-screen-xl'>
								{restaurants && restaurants.map((restaurant) => <RestaurantOwnerCover key={restaurant.id} restaurant={restaurant} />)}
							</div>
						) : (
							<div role={'alert'} className='bg-zinc-700  mt-10 text-white py-10 text-center text-2xl w-full px-4 span rounded-md'>
								{errorMessage}
							</div>
						)}
						{error && (
							<div role={'alert'} className='bg-zinc-700  mt-10 text-white py-10 text-center text-2xl w-full px-4 span rounded-md'>
								{errorMessage}
							</div>
						)}
					</section>
					<div className='h-24 '></div>
					<Pagination totalPages={data?.getOwnerRestaurants.totalPages} currentPage={page} setCurrentPage={setPage} />
				</div>
			)}
		</>
	);
};

export default Restaurants;
