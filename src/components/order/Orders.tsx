import {useQuery} from '@apollo/client/react';
import {useEffect, useState} from 'react';
import {ORDERS} from '../../graphql/queries';
import {GetOrdersQuery, GetOrdersQueryVariables, UpdateOrdersSubscription} from '../../graphql/schemaTypes';
import {NEW_UPDATE_ORDER} from '../../graphql/subscriptions';
import Footer from '../footer/Footer';
import OrdersTable from './OrdersTable';

const Orders = () => {
	const [orders, setOrders] = useState<GetOrdersQuery['getOrders']['orders'] | null>(null);

	const {data, subscribeToMore} = useQuery<GetOrdersQuery, GetOrdersQueryVariables>(ORDERS, {variables: {data: {status: null}}});

	useEffect(() => {
		if (!data?.getOrders.ok) {
			setOrders(null);
		}
		if (data?.getOrders.ok && data?.getOrders.orders) {
			subscribeToMore<UpdateOrdersSubscription>({
				document: NEW_UPDATE_ORDER,
				updateQuery: (_prev, {subscriptionData, complete, previousData}) => {
					if (!complete || !subscriptionData.data) {
						return;
					}
					const {updateOrders} = subscriptionData.data;
					return {
						...previousData,
						getOrders: {
							...previousData.getOrders,
							orders: previousData.getOrders.orders.map((order) => (order.id === updateOrders.id ? {...order, status: updateOrders.status} : order)),
						},
					};
				},
			});
			setOrders(data.getOrders.orders);
		}
	}, [data]);
	return (
		<>
			<div className='max-w-7xl mb-10 mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
				<div className='lg:max-w-7xl max-w-4xl mx-auto'>
					<div className=' overflow-hidden '>
						{orders && orders?.length > 0 ? (
							<>
								<div className='px-4 py-5 sm:px-6 text-center mx-auto font-extrabold text-2xl'>
									<h1>Orders History</h1>
								</div>
								<div className=' px-4 py-5 sm:p-6 mt-10 h-screen'>
									<OrdersTable orders={orders} />
								</div>
							</>
						) : (
							<div className='h-screen'>
								<div className='flex items-center  justify-center px-4 py-5 sm:p-6 text-center mx-auto  font-extrabold text-2xl  bg-black text-white '>
									<div>No Order History Found !</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Orders;
