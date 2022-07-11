import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useStateValue} from '../../store/context/ContextManager';
import {totalAllDishPrice} from '../restaurant/Basket';
import {dishOptionsItem} from '../shopping-cart/OrderSummary';

const PaymentForm = () => {
	const [state] = useStateValue();

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

					<div className='mt-20 flex space-x-2'>
						<div className='flex items-center h-5'>
							<input id='same-as-shipping' name='same-as-shipping' type='checkbox' defaultChecked className='h-4 w-4 border-gray-300 rounded text-green-600 focus:ring-green-500' />
						</div>
						<label htmlFor='same-as-shipping' className='text-sm font-medium text-gray-900'>
							Billing address is the same as shipping address
						</label>
					</div>

					<button type='submit' className='w-full mt-6 bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
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
