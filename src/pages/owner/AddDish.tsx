import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {Link, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {CREATE_DISH} from '../../graphql/mutations';
import {CreateDishInput, CreateDishMutation, CreateDishMutationVariables} from '../../graphql/schemaTypes';
import ErrorSpan from '../../components/custom/ErrorSpan';
import {useState} from 'react';
import * as filestack from 'filestack-js';

export const client = filestack.init('AncOrYkrcRkll1kf2xYZ8z');

const AddRestaurant = () => {
	let {id} = useParams();
	const [serverMessage, setServerMessage] = useState<string | undefined>(undefined);

	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm<CreateDishInput>({
		mode: 'onChange',
	});

	const onCompleted = (data: CreateDishMutation) => {
		const {ok, message} = data?.createDishe;
		if (!ok) {
			setError('name', {message});
		}
		if (ok) {
			setServerMessage(message);
		}
	};

	const [dispatch, {loading}] = useMutation<CreateDishMutation, CreateDishMutationVariables>(CREATE_DISH, {onCompleted});

	const onValidSubmit = async () => {
		if (loading) return;
		const {name, price, description} = getValues();
		dispatch({variables: {data: {restaurantId: Number(id), name, price: Number(price), description}}});
	};

	const restaurantNameRegister = {required: {value: true, message: 'restaurant name is required'}};
	const priceRegister = {required: {value: true, message: 'category could not be empty'}};
	const descriptionRegister = {required: {value: true, message: 'category could not be empty'}};
	const clearNameErrors = () => clearErrors('name');
	const clearPriceErrors = () => clearErrors('price');
	const clearDescriptionErrors = () => clearErrors('description');
	return (
		<>
			<div className='container flex flex-col h-screen items-center justify-center  '>
				<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center bg-white '>
					<h3 className='font-bold text-lg text-gray-800 text-left w-full pl-10 '>Add Dish</h3>
					<span className=' text-gray-600 text-left w-full pl-10'>
						by adding restaurant,you agree to our
						<Link className='text-blue-400 pr-1' to='/'>
							policy
						</Link>
						and
						<Link className='text-blue-400 pl-1' to='/'>
							rules
						</Link>
					</span>
					<div className='flex flex-col mt-5 px-20 '>
						{errors?.name?.message && <ErrorSpan message={errors?.name?.message} />}
						{errors?.price?.message && <ErrorSpan message={errors?.price?.message} />}
						{serverMessage && <span className='span bg-green-500 text-white'>{serverMessage}</span>}
					</div>
					<form className='flex flex-col w-full mt-5 px-10 bg-white ' onSubmit={handleSubmit(onValidSubmit)}>
						<input {...register('name', restaurantNameRegister)} className='input mb-3' type='text' placeholder='Name' onKeyDown={clearNameErrors} />
						<input {...register('price', priceRegister)} className='input mb-3' type='text' placeholder='Price' onKeyDown={clearPriceErrors} />
						<input {...register('description', descriptionRegister)} className='input mb-3' type='text' placeholder='Description' onKeyDown={clearDescriptionErrors} />

						<button className={!isValid ? 'bg-gray-300 btn py-2 mt-5 flex text-center justify-center items-center' : 'mt-5 py-2 btn'} type='submit' disabled={!isValid || loading}>
							{!loading && 'Add Dish'}
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
