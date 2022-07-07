import {Fragment, useState} from 'react';
import {Dialog, RadioGroup, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../store/context/ContextManager';
import {actions} from '../../store/actions';
import useUser from '../../hooks/useUser';
import {UserRole} from '../../graphql/schemaTypes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd, faEdit} from '@fortawesome/free-solid-svg-icons';
import Notification from '../Notification/Notification';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const DishCover = ({setIsSelected, dish}) => {
	const [state] = useStateValue();
	const [_, dispatch] = useStateValue();
	const [open, setOpen] = useState(true);
	const {user} = useUser();
	const [selectedSize, setSelectedSize] = useState(dish?.options[0]);

	const addToBasketHandler = () => {
		dispatch({
			type: actions.ADD_TO_BASKET,
			payload: {items: dish, message: 'Added to basket'},
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
						setIsSelected(false);
					}, 500)
				}
			>
				<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
					<div className='hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block' />
				</Transition.Child>
				<div className='fixed z-10 inset-0 overflow-y-auto transition-all'>
					<div className='flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4'>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95' enterTo='opacity-100 translate-y-0 md:scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 translate-y-0 md:scale-100' leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'>
							<Dialog.Panel className='flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl'>
								<div className='w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
									<button
										type='button'
										className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
										onClick={() => {
											setOpen(false);
											setIsSelected(false);
										}}
									>
										<span className='sr-only'>Close</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</button>
									{/* {state.basket.message && (
										// <div className='absolute z-50 top-0 left-0 px-10 py-5 w-1/3 h-11 bg-red-600'>
										<Notification message={state.basket.message} />
										// </div>
									)} */}
									<div className='w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8'>
										<div className='aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5'>
											<img src={dish.photo} alt={dish.name} className='object-center object-cover' />
										</div>
										<div className='sm:col-span-8 lg:col-span-7'>
											<h2 className='text-2xl font-extrabold text-gray-900 sm:pr-12'>{dish.name}</h2>

											<section aria-labelledby='information-heading' className='mt-2'>
												<h3 id='information-heading' className='sr-only'>
													Product information
												</h3>

												<p className='text-2xl text-gray-900'>$ {dish.price}</p>

												{/* Reviews */}
												<div className='mt-6'>
													<h4 className='sr-only'>Reviews</h4>
													<div className='flex items-center'>
														<div className='flex items-center'>
															{[0, 1, 2, 3, 4].map((rating) => (
																<StarIcon key={rating} className={classNames(dish.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0')} aria-hidden='true' />
															))}
														</div>
														<p className='sr-only'>{dish?.rating} out of 5 stars</p>
														<Link to='#' className='ml-3 text-sm font-medium text-green-600 hover:text-green-500'>
															{dish?.reviewCount} reviews
														</Link>
													</div>
												</div>
											</section>

											<section aria-labelledby='options-heading' className='mt-10'>
												<h3 id='options-heading' className='sr-only'>
													Product options
												</h3>

												<form>
													{/* Description */}
													<div>
														<h4 className='text-sm text-gray-900 font-bold'>Description</h4>

														<span className='mt-4 flex items-center space-x-3'>{dish.description}</span>
													</div>

													{/* Options */}
													<div className='mt-10'>
														<h4 className='text-sm text-gray-900 font-bold'>Options</h4>
														<RadioGroup value={selectedSize} onChange={setSelectedSize} className='mt-4'>
															<RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
															<div className='grid grid-cols-4 gap-2'>
																{dish?.options?.map((item, i) => (
																	<RadioGroup.Option key={item.name} value={item} disabled={!item?.inStock} className={({active}) => classNames(item?.inStock ? 'bg-white shadow-sm text-gray-900 cursor-pointer' : 'bg-gray-50 text-gray-200 cursor-not-allowed', active ? 'ring-2 ring-green-500' : '', 'group relative border rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1')}>
																		{({active, checked}) => (
																			<>
																				<RadioGroup.Label as='span' className={'text-black text-sm px-1'}>
																					{item.name}
																				</RadioGroup.Label>
																				<RadioGroup.Label as='span' className={'text-black text-sm px-1'}>
																					${item.extra}
																				</RadioGroup.Label>
																				{true ? (
																					<span className={classNames(active ? 'border' : 'border-2', checked ? 'border-green-500' : 'border-transparent', 'absolute -inset-px rounded-md pointer-events-none')} aria-hidden='true' />
																				) : (
																					<span aria-hidden='true' className='absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none'>
																						<svg className='absolute inset-0 w-full h-full text-gray-200 stroke-2' viewBox='0 0 100 100' preserveAspectRatio='none' stroke='currentColor'>
																							<line x1={0} y1={100} x2={100} y2={0} vectorEffect='non-scaling-stroke' />
																						</svg>
																					</span>
																				)}
																			</>
																		)}
																	</RadioGroup.Option>
																))}
															</div>
														</RadioGroup>
													</div>
													{user?.role === UserRole.Client && (
														<button onClick={addToBasketHandler} type='button' className='mt-16 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
															<span>
																<FontAwesomeIcon icon={faAdd} />
															</span>
															<span className='pl-4'> Add to Order</span>
														</button>
													)}
													{user?.role === UserRole.Owner && (
														<button onClick={addToBasketHandler} type='button' className='mt-16 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
															<span>
																<FontAwesomeIcon icon={faEdit} />
															</span>
															<span className='pl-4'> Edit Order</span>
														</button>
													)}
												</form>
											</section>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default DishCover;
