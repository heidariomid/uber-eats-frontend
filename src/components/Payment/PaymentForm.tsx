import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useStateValue} from '../../store/context/ContextManager';
import {totalAllDishPrice} from '../restaurant/Basket';
import {dishOptionsItem} from '../shopping-cart/OrderSummary';
import Zarinpal from '../../images/zarinpal.png';
import {useMutation} from '@apollo/client';
import {CreateOrderMutation, CreateOrderMutationResult, CreateOrderMutationVariables, CreatepaymentMutation, CreatepaymentMutationVariables} from '../../graphql/schemaTypes';
import {CREATE_ORDER, CREATE_PAYMENT} from '../../graphql/mutations';
const PaymentForm = () => {
	const [state] = useStateValue();

	const update = (cache, result) => {
		const {ok, message} = result?.data?.createOrder;
		console.log({ok, message});
		// const newEmail = getValues().email;
		// const newPassword = getValues().password;
		// if (!ok) {
		// 	setError('password', {message});
		// }
		// if (ok) {
		// 	setServerMessage(message);
		// 	cache.modify({
		// 		id: `User:${user?.id}`,
		// 		fields: {
		// 			email() {
		// 				return newEmail;
		// 			},
		// 			password() {
		// 				return newPassword;
		// 			},
		// 			verified() {
		// 				if (newEmail !== user?.email && inputEmail) return false;
		// 			},
		// 		},
		// 	});
		// 	setTimeout(() => {
		// 		setServerMessage(message);
		// 		clearErrors();
		// 		navigate('/');
		// 	}, 3000);
		// }
	};
	const [createOrderHandler] = useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CREATE_ORDER, {update});

	// const onValidSubmit = () => {
	// 	if (loading) return;
	// 	const {email, password} = getValues();

	// 	inputEmail && loginHandler({variables: {data: {email}}});
	// 	inputPassword && loginHandler({variables: {data: {...(password !== '' && {password})}}});
	// };

	const paymentHandler = (e) => {
		console.log(state.basket);
		state.basket.items.map((item) => item.options?.map((option) => console.log(option)));

		const totalPrice = (totalAllDishPrice(state.basket) + totaldishOptionsPrice(dishOptionsItem) + totalAllDishPrice(state.basket) * 0.09).toFixed(2);
		createOrderHandler({variables: {data: {items: state.basket.items, restaurantId: state.basket.restaurantId, totalPrice: Number(totalPrice)}}});
		// setPayButtonText('در ال انتقال به درگاه ...');
		// API.post(
		// 	'/api/v1/purchase',
		// 	{
		// 		...state,
		// 	},
		// 	{
		// 		headers: {
		// 			Authorization: localStorage.getItem('token'),
		// 		},
		// 	},
		// )
		// 	.then((response) => {
		// 		if (!response.data.success) {
		// 			setPayButtonText('پرداخت ناموفق');
		// 		}
		// 		if (response.data.success) {
		// 			window.location.href = response.data.url;
		// 		}
		// 	})
		// 	.catch((error) => console.log(error));
	};

	const totaldishOptionsPrice = (dishOptions) => {
		const dishQuantity: any = [];

		dishOptions?.map((option) => {
			if (option.quantity) {
				for (let i = 0; i < option.quantity; i++) {
					dishQuantity.push(option.price);
				}
			}
			return undefined;
		});

		const totalPrice = dishQuantity.reduce((total: number, price) => {
			return total + price;
		}, 0);
		return totalPrice;
	};
	return (
		<>
			<form className='pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1'>
				<div className='max-w-lg mx-auto lg:max-w-none'>
					<section aria-labelledby='payment-heading' className='mt-10'>
						<h2 id='payment-heading' className='text-lg font-medium text-gray-900'>
							Payment details
						</h2>

						<div className='mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4'>
							<div className='col-span-3 sm:col-span-4'>
								<label htmlFor='name-on-card' className='block text-sm font-medium text-gray-700'>
									Name on card
								</label>
								<div className='mt-1'>
									<input type='text' id='name-on-card' name='name-on-card' autoComplete='cc-name' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div className='col-span-3 sm:col-span-4'>
								<label htmlFor='card-number' className='block text-sm font-medium text-gray-700'>
									Card number
								</label>
								<div className='mt-1'>
									<input type='text' id='card-number' name='card-number' autoComplete='cc-number' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div className='col-span-2 sm:col-span-3'>
								<label htmlFor='expiration-date' className='block text-sm font-medium text-gray-700'>
									Expiration date (MM/YY)
								</label>
								<div className='mt-1'>
									<input type='text' name='expiration-date' id='expiration-date' autoComplete='cc-exp' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div>
								<label htmlFor='cvc' className='block text-sm font-medium text-gray-700'>
									CVC
								</label>
								<div className='mt-1'>
									<input type='text' name='cvc' id='cvc' autoComplete='csc' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>
						</div>
					</section>

					<section aria-labelledby='shipping-heading' className='mt-10'>
						<h2 id='shipping-heading' className='text-lg font-medium text-gray-900'>
							Shipping address
						</h2>

						<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3'>
							<div className='sm:col-span-3'>
								<label htmlFor='address' className='block text-sm font-medium text-gray-700'>
									Address
								</label>
								<div className='mt-1'>
									<input type='text' id='address' name='address' autoComplete='street-address' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div className='sm:col-span-3'>
								<label htmlFor='apartment' className='block text-sm font-medium text-gray-700'>
									Apartment, suite, etc.
								</label>
								<div className='mt-1'>
									<input type='text' id='apartment' name='apartment' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div>
								<label htmlFor='city' className='block text-sm font-medium text-gray-700'>
									City
								</label>
								<div className='mt-1'>
									<input type='text' id='city' name='city' autoComplete='address-level2' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div>
								<label htmlFor='region' className='block text-sm font-medium text-gray-700'>
									State / Province
								</label>
								<div className='mt-1'>
									<input type='text' id='region' name='region' autoComplete='address-level1' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>

							<div>
								<label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
									Postal code
								</label>
								<div className='mt-1'>
									<input type='text' id='postal-code' name='postal-code' autoComplete='postal-code' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm' />
								</div>
							</div>
						</div>
					</section>

					<div className='my-10 flex space-x-2'>
						<div className='flex items-center h-5'>
							<input id='same-as-shipping' name='same-as-shipping' type='checkbox' defaultChecked className='h-4 w-4 border-gray-300 rounded text-green-600 focus:ring-green-500' />
						</div>
						<label htmlFor='same-as-shipping' className='text-sm font-medium text-gray-900'>
							Billing address is the same as shipping address
						</label>
					</div>

					<button onClick={paymentHandler} type='button' className='w-full flex items-center justify-center bg-yellow-300 border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
						<span className='text-black font-bold px-2'>Pay with</span>
						<img className='h-5 w-auto' src={Zarinpal} alt='zarinpal-logo' />
					</button>
					<div className='relative my-4'>
						<div className='absolute inset-0 flex items-center' aria-hidden='true'>
							<div className='w-full border-t border-gray-200' />
						</div>
						<div className='relative flex justify-center'>
							<span className='px-4 bg-white text-sm font-medium text-gray-500'>or</span>
						</div>
					</div>

					<button type='submit' className='w-full bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
						Pay $ ${(totalAllDishPrice(state.basket) + totaldishOptionsPrice(dishOptionsItem) + totalAllDishPrice(state.basket) * 0.09).toFixed(2)}
					</button>
					<p className='flex justify-center text-sm font-medium text-gray-500 mt-6'>
						<FontAwesomeIcon icon={faLock} className='w-5 h-5 text-gray-400 mr-1.5' aria-hidden='true' />
						Payment details stored in plain text
					</p>
				</div>
			</form>
		</>
	);
};

export default PaymentForm;
