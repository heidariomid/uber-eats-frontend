/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../store/context/ContextManager';
import {actions} from '../../store/actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import NumericInput from '../custom/NumericInput';

const Basket = () => {
	const [state, dispatch] = useStateValue();
	const [open, setOpen] = useState(true);

	const totaldishPrice = (dish) => {
		const quantity = state.basket.quantity[dish.id];
		const dishQuantity: any = [];
		for (let i = 0; i < quantity; i++) {
			dishQuantity.push(dish.price);
		}
		const totalPrice = dishQuantity.reduce((total: number, price) => {
			return total + price;
		}, 0);
		return totalPrice;
	};

	const totalAllDishPrice = state.basket.items
		.filter((dish, i) => state.basket?.items.indexOf(dish) === i)
		.reduce((total: number, dish) => {
			const quantity = state.basket.quantity[dish.id];
			return total + dish.price * quantity;
		}, 0);

	const changeBasketStatus = () => {
		dispatch({
			type: actions.BASKET_STATUS,
			payload: {status: false},
		});
	};

	const changeQuantity = (id, opration) => {
		// const quantity = state.basket.quantity[id];
		dispatch({
			type: actions.BASKET_QUANTITY_CHANGE,
			payload: {id, opration},
		});
	};
	return (
		<Transition.Root show={open} as={Fragment} appear={true}>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={setOpen}
				onClick={() =>
					setTimeout(() => {
						changeBasketStatus();
					}, 500)
				}
			>
				<Transition.Child as={Fragment} enter='ease-in-out duration-500' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in-out duration-500' leaveFrom='opacity-100' leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<Transition.Child as={Fragment} enter='transform transition ease-in-out duration-500 sm:duration-500' enterFrom='translate-x-full' enterTo='translate-x-0' leave='transform transition ease-in-out duration-500 sm:duration-500' leaveFrom='translate-x-0' leaveTo='translate-x-full'>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
											<div className='flex items-start justify-between'>
												<Dialog.Title className='text-lg font-medium text-gray-900'> Orders </Dialog.Title>
												<div className='ml-3 flex h-7 items-center transition-all'>
													<button
														type='button'
														className='-m-2 p-2  text-gray-400 hover:text-gray-500'
														onClick={() => {
															setOpen(false);
															setTimeout(() => {
																changeBasketStatus();
															}, 500);
														}}
													>
														<span className='sr-only'>Close panel</span>
														<XIcon className='h-6 w-6' aria-hidden='true' />
													</button>
												</div>
											</div>

											<div className='mt-8'>
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

																					<p className='ml-4'>$ {totaldishPrice(dish)}</p>
																				</div>
																			</div>
																			<div className='flex flex-1  items-end justify-between text-sm my-3'>
																				<p className='text-gray-600'>Price ${dish.price}</p>
																			</div>
																			<div className='flex flex-1 items-start justify-between text-sm'>
																				<NumericInput changeQuantity={changeQuantity} quantity={quantity} dishId={dish.id} />
																				<div className='flex'>
																					<button type='button' className='font-medium text-red-600 hover:text-red-500'>
																						<FontAwesomeIcon size='lg' icon={faTrash} />
																					</button>
																				</div>
																			</div>
																		</div>
																	</li>
																);
															})}
													</ul>
												</div>
											</div>
										</div>

										<div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Subtotal</p>
												<p>$ {totalAllDishPrice}</p>
											</div>
											<p className='mt-0.5 text-sm text-gray-500'>Shipping and taxes calculated at checkout.</p>
											<div className='mt-6'>
												<Link to='#' className='flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700'>
													Checkout
												</Link>
											</div>
											<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
												<p>
													or{' '}
													<button type='button' className='font-medium text-green-600 hover:text-green-500' onClick={() => setOpen(false)}>
														Continue Ordering<span aria-hidden='true'> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Basket;
