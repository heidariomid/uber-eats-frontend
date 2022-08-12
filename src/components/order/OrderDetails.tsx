import {Order} from '../../graphql/schemaTypes';
import OrderItems from './OrderItems';
import OrderStatusBar from './OrderStatusBar';

const OrderDetails = ({order}: {order: Order}) => {
	return (
		<div className='bg-gray-50 shadow-lg'>
			<main className='max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0'>
					<div className='flex sm:items-baseline sm:space-x-4'>
						<h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>Order #{order.id}</h1>
					</div>

					<p className='text-sm text-gray-600'>
						<time dateTime='2021-03-22' className='font-medium text-gray-900'>
							{new Date(order.createdAt).toLocaleDateString()}
						</time>
					</p>
				</div>

				{/* Orders */}
				<section aria-labelledby='products-heading' className='mt-6'>
					<h2 id='products-heading' className='sr-only'>
						Orders purchased
					</h2>

					<div className='space-y-8'>
						<div key={order.id} className='bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg'>
							<div className='py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8'>
								<div className='sm:flex lg:col-span-7'>
									<div className='flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40'>
										<img src={order.restaurant?.coverImg} alt={'orderImg'} className='w-full h-full object-center object-cover sm:w-full sm:h-full' />
									</div>

									<div className='mt-6 sm:mt-0 sm:ml-6'>
										<h3 className='text-base font-medium text-gray-900'>{/* <Link to={order.name}>{order.name}</Link> */}</h3>
										<p className='mt-2 text-sm font-medium text-gray-900'>${order.totalPrice}</p>
										{/* <p className='mt-3 text-sm text-gray-500'>{order.description}</p> */}
									</div>
								</div>

								<div className='mt-6 lg:mt-0 lg:col-span-5'>
									<dl className='grid grid-cols-2 gap-x-6 text-sm'>
										<div>
											<dt className='font-medium text-gray-900'>Delivery address</dt>
											<dd className='mt-3 text-gray-500'>
												{/* <span className='block'>{order.address[0]}</span>
													<span className='block'>{order.address[1]}</span>
													<span className='block'>{order.address[2]}</span> */}
											</dd>
										</div>
										<div>
											<dt className='font-medium text-gray-900'>Shipping updates</dt>
											<dd className='mt-3 text-gray-500 space-y-3'>
												{/* <p>{order.email}</p>
													<p>{order.phone}</p> */}
												<button type='button' className='font-medium text-green-600 hover:text-green-500'>
													Edit
												</button>
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Order Status */}
				<section aria-labelledby='products-heading' className='mt-6'>
					<OrderStatusBar order={order} />
				</section>
				{/* Order Items */}
				<section aria-labelledby='products-heading' className='mt-6'>
					<OrderItems items={order.items} options={order?.options ? order.options : null} />
				</section>
			</main>
		</div>
	);
};

export default OrderDetails;
