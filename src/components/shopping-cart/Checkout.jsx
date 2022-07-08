import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/solid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../store/context/ContextManager';
import {totalAllDishPrice, totaldishPrice} from '../restaurant/Basket';

const Checkout = () => {
	const [state] = useStateValue();

	return (
		<>
			<div>
				<div className='hidden lg:block fixed top-100 left-0 w-1/2 h-full bg-white' aria-hidden='true' />
				<div className='hidden lg:block fixed top-100 right-0 w-1/2 h-full bg-gray-100' aria-hidden='true' />

				<div className='relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48'>
					<h1 className='sr-only'>Order information</h1>

					<section aria-labelledby='summary-heading' className='bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2'>
						<div className='max-w-lg mx-auto lg:max-w-none'>
							<h2 id='summary-heading' className='text-center text-center9 text-lg font-medium text-gray-900'>
								Order summary
							</h2>

							<div className='mt-8 py-6 px-4 sm:px-6'>
								<div className='flow-root'>
									<ul className='-my-6 divide-y divide-gray-200'>
										{state.basket?.items
											.filter((dish, i) => state.basket?.items.indexOf(dish) === i)
											.map((dish, i) => {
												const quantity = state.basket.quantity[dish.id];
												return (
													<li key={i} className='flex py-6'>
														<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
															<img src={dish?.photo} alt={dish?.name} className='h-full w-full object-cover object-center' />
														</div>

														<div className='ml-4 flex flex-1 flex-col'>
															<div>
																<div className='flex justify-between text-base font-medium text-gray-900'>
																	<h3>
																		<Link to={dish?.name}> {dish?.name} </Link>
																	</h3>

																	<p className='ml-4'>${totaldishPrice(dish, state.basket)}</p>
																</div>
															</div>
															<div className='flex flex-1  items-end justify-between text-sm my-3'>
																<p className='text-gray-600'>
																	${dish.price} X {quantity}
																</p>
															</div>
														</div>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
						</div>

						<div className=' py-6 px-4 sm:px-6'>
							<dl className='hidden text-sm font-medium text-gray-900 space-y-6 border-t b border-gray-300 pt-6 lg:block'>
								<div className='flex items-center justify-between'>
									<dt className='text-gray-600'>Subtotal</dt>
									<dd>${totalAllDishPrice(state.basket)}</dd>
								</div>

								<div className='flex items-center justify-between'>
									<dt className='text-gray-600'>Taxes</dt>
									<dd>${totalAllDishPrice(state.basket) > 0 ? (totalAllDishPrice(state.basket) * 0.09).toFixed(2) : 0}</dd>
								</div>

								<div className='flex items-center justify-between'>
									<dt className='text-gray-600'>Shipping</dt>
									<dd> 0</dd>
								</div>
								{/* You Can Add Coupon */}
								{/* <form className='mt-10'>
									<label htmlFor='discount-code-mobile' className='block text-sm font-medium text-gray-700'>
										Discount code
									</label>
									<div className='flex space-x-4 mt-1'>
										<input type='text' id='discount-code-mobile' name='discount-code-mobile' className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
										<button type='submit' className='bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'>
											Apply
										</button>
									</div>
								</form> */}
								<div className='flex items-center justify-between border-t border-gray-400 pt-6'>
									<dt className='text-base'>Total</dt>
									<dd className='text-base'>${(totalAllDishPrice(state.basket) + totalAllDishPrice(state.basket) * 0.09).toFixed(2)}</dd>
								</div>
							</dl>

							<Popover className='fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden'>
								<div className='relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6'>
									<div className='max-w-lg mx-auto'>
										<Popover.Button className='w-full flex items-center py-6 font-medium'>
											<span className='text-base mr-auto'>Total</span>
											<span className='text-base mr-2'>${(totalAllDishPrice(state.basket) + totalAllDishPrice(state.basket) * 0.09).toFixed(2)}</span>
											<ChevronUpIcon className='w-5 h-5 text-gray-500' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>

								<Transition.Root as={Fragment}>
									<div>
										<Transition.Child as={Fragment} enter='transition-opacity ease-linear duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='transition-opacity ease-linear duration-300' leaveFrom='opacity-100' leaveTo='opacity-0'>
											<Popover.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
										</Transition.Child>

										<Transition.Child as={Fragment} enter='transition ease-in-out duration-300 transform' enterFrom='translate-y-full' enterTo='translate-y-0' leave='transition ease-in-out duration-300 transform' leaveFrom='translate-y-0' leaveTo='translate-y-full'>
											<Popover.Panel className='relative bg-white px-4 py-6 sm:px-6'>
												<dl className='max-w-lg mx-auto space-y-6'>
													<div className='flex items-center justify-between'>
														<dt className='text-gray-600'>Subtotal</dt>
														<dd>$3200000.00</dd>
													</div>

													<div className='flex items-center justify-between'>
														<dt className='text-gray-600'>Shipping</dt>
														<dd>$150000.00</dd>
													</div>

													<div className='flex items-center justify-between'>
														<dt className='text-gray-600'>Taxes</dt>
														<dd>$26000000.80</dd>
													</div>
												</dl>
											</Popover.Panel>
										</Transition.Child>
									</div>
								</Transition.Root>
							</Popover>
						</div>
					</section>

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
								Pay ${(totalAllDishPrice(state.basket) + totalAllDishPrice(state.basket) * 0.09).toFixed(2)}
							</button>

							<p className='flex justify-center text-sm font-medium text-gray-500 mt-6'>
								<FontAwesomeIcon icon={faLock} className='w-5 h-5 text-gray-400 mr-1.5' aria-hidden='true' />
								Payment details stored in plain text
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Checkout;
