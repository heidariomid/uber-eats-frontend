import {Link} from 'react-router-dom';
import {useStateValue} from '../../store/context/ContextManager';
import {v4 as uuid} from 'uuid';
import {totaldishPrice} from '../shopping-cart/Basket';
export const dishOptionsItem: any = [];

const OrderItems = ({items}) => {
	const [state] = useStateValue();

	const totaldishOptionsPrice = (dishOptions) => {
		const dishQuantity: any = [];

		dishOptions?.map((option) => {
			if (option.quantity) {
				for (let i = 0; i < option.quantity; i++) {
					dishQuantity.push(option.price);
				}
			}
		});

		const totalPrice = dishQuantity.reduce((total: number, price) => {
			if (price) {
				return total + price;
			} else {
				return undefined;
			}
		}, 0);
		return totalPrice;
	};
	return (
		<>
			<div className='mt-8 py-6 px-4 sm:px-6 w-full bg-white border-2 border-gray-200'>
				<div className=''>
					<ul className='-my-6  flex flex-row'>
						{items
							.filter((dish, i) => items.indexOf(dish) === i)
							.map((dish, i) => {
								const dishOptions = dish?.options?.map((option, i) => {
									// const quantity = dishOptionQuantity[option.id];
									const quantity = 1;
									const newOption = {name: option.name, quantity, price: option.extra};
									dishOptionsItem.push(newOption);
									return newOption;
								});
								const quantity = 1;
								// const quantity = state.basket.dishQuantity[dish.id];
								return (
									<li key={dish.id} className='grid grid-cols-3 py-10 justify-center items-center '>
										<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
											<img src={dish?.id} alt={dish?.id} className='h-full w-full object-cover object-center' />
										</div>

										<div className='ml-4 '>
											<div>
												<div className='flex justify-between text-base font-medium text-gray-900'>
													<h3>
														<Link to={dish?.id}> {dish?.id} </Link>
													</h3>

													<p className='ml-4'>${totaldishPrice(dish, state.basket) + totaldishOptionsPrice(dishOptions)}</p>
												</div>
											</div>
											<div className='flex flex-1 m items-end justify-between text-sm my-3'>
												<p className='text-gray-600'>
													${dish.id} X {quantity}
												</p>

												<p className='ml-4'>${totaldishPrice(dish, state.basket)}</p>
											</div>
											{totaldishOptionsPrice(dishOptions) > 0 && (
												<div className='flex flex-1  items-end justify-between text-sm '>
													<h3 className='ml-2'>
														Options
														{dishOptions.map((option) => {
															if (option.quantity) {
																return (
																	<div key={uuid()} className='text-gray-600 flex justify-around '>
																		<span className='px-4 flex-1'>{option?.name}</span>
																		<span>
																			${option?.price} X {option?.quantity}
																		</span>
																	</div>
																);
															}
														})}
													</h3>

													<p className='ml-4'>${totaldishOptionsPrice(dishOptions)}</p>
												</div>
											)}
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default OrderItems;
