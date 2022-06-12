import {useMutation, useQuery} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useNavigate} from 'react-router-dom';
// import Logo from '../images/uber-eats.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header/Header';
import {CREATE_RESTAURANT} from '../../graphql/mutations';
import {CategoriesQuery, CategoriesQueryVariables, CreateRestaurantMutation, CreateRestaurantMutationVariables, RestaurantInput} from '../../graphql/schemaTypes';
import ErrorSpan from '../../components/custom/ErrorSpan';
import {CATEGORIES} from '../../graphql/queries';
import {useState} from 'react';
const AddRestaurant = () => {
	let navigate = useNavigate();
	const [categories, setCategories] = useState<any>([]);
	const [serverMessage, setServerMessage] = useState<string | undefined>(undefined);

	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm({
		mode: 'onChange',
	});

	const onCompleted = (data: CreateRestaurantMutation) => {
		const {ok, message} = data?.createRestaurant;
		if (!ok) {
			setError('name', {message});
		}
		if (ok) {
			setServerMessage(message);
		}
	};
	const onCompletedCategories = (data: CategoriesQuery) => {
		const {ok, message, categories} = data?.getCategories;
		if (!ok && message) {
			setError('name', {message});
		}
		if (ok && categories) {
			setCategories(categories);
			setServerMessage(message);
		}
	};
	const [dispatch, {loading}] = useMutation<CreateRestaurantMutation, CreateRestaurantMutationVariables>(CREATE_RESTAURANT, {onCompleted});
	useQuery<CategoriesQuery, CategoriesQueryVariables>(CATEGORIES, {onCompleted: onCompletedCategories});

	const onValidSubmit = () => {
		if (loading) return;
		const {name, address, coverImg, categoryId} = getValues();
		console.log(categoryId);
		dispatch({variables: {data: {name, coverImg: 'https://cdn.snappfood.ir/600x400/uploads/images/vendors/covers/5e01b92bcbb88.jpg', address, categoryId: Number(categoryId)}}});
	};
	const restaurantNameRegister = {required: {value: true, message: 'restaurant name is required'}};
	const addressRegister = {required: {value: true, message: 'address could not be empty'}};
	const categoryRegister = {required: {value: true, message: 'category could not be empty'}};
	const fileRegister = {required: {value: true, message: 'file could not be empty'}};
	const clearNameErrors = () => clearErrors('name');
	const clearAddressErrors = () => clearErrors('address');
	const clearCategoryErrors = () => clearErrors("category['name']");
	const clearFileErrors = () => clearErrors('coverImg');
	return (
		<>
			<Header />
			<div className='container flex flex-col h-screen items-center justify-center  '>
				<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center bg-white '>
					<h3 className='font-bold text-lg text-gray-800 text-left w-full pl-10 '>Add Restaurant</h3>
					<span className=' text-gray-600 text-left w-full pl-10'>by adding restaurant,you agree to our policy and rules</span>
					<div className='flex flex-col mt-5 px-20 '>
						{errors?.name?.message && <ErrorSpan message={errors?.name?.message} />}
						{errors?.address?.message && <ErrorSpan message={errors?.address?.message} />}
						{errors?.coverImg?.message && <ErrorSpan message={errors?.coverImg?.message} />}
						{serverMessage && <span className='span bg-green-500 text-white'>{serverMessage}</span>}
					</div>
					<form className='flex flex-col w-full mt-5 px-10 bg-white ' onSubmit={handleSubmit(onValidSubmit)}>
						<input {...register('name', restaurantNameRegister)} className='input mb-3' type='text' placeholder='Restaurant Name' onKeyDown={clearNameErrors} />
						<input {...register('address', addressRegister)} className='input mb-3' type='text' placeholder='Restaurant Address' onKeyDown={clearAddressErrors} />

						<select {...register('categoryId', categoryRegister)} className='input mb-3' onKeyDown={clearCategoryErrors}>
							{categories &&
								categories.map((category) => (
									<option key={category?.id} value={category?.id} defaultValue={1}>
										{category?.name}
									</option>
								))}
						</select>
						<input {...register('coverImg', fileRegister)} className=' my-6 text-black' type={'file'} placeholder='Cover Image' onKeyDown={clearFileErrors} />

						<button className={!isValid ? 'bg-gray-300 btn py-2 mt-5 flex text-center justify-center items-center' : 'mt-5 py-2 btn'} type='submit' disabled={!isValid || loading}>
							{!loading && 'Add Restaurant'}
							{loading && (
								<div className='flex flex-row space-x-16 items-center justify-center'>
									<span className='text-white'>Loading</span>
									<svg className=' animate-spin  w-5 h-5 absolute  text-green-400'>
										<FontAwesomeIcon icon={faSpinner} />
									</svg>
								</div>
							)}
						</button>
					</form>
					<div className='mt-5'>
						<span className=' font-medium text-black'>Go Back?</span>
						<Link className='pl-2 text-lime-600 font-medium hover:underline' to={'/'}>
							Click here
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddRestaurant;
