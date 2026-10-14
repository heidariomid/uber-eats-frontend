import Link from 'next/link';
import {useParams} from 'next/navigation';
import {GetOrderByIdQuery, GetOrderByIdQueryVariables, OrderStatus, UpdateOrdersSubscription} from '../../graphql/schemaTypes';
import Loading from '../loading/Loading';
import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client/react';
import {GET_ORDER_BY_ID} from '../../graphql/queries';
import OrderDetails from './OrderDetails';
import {NEW_UPDATE_ORDER} from '../../graphql/subscriptions';

const OrderSingle = () => {
	const [order, setOrder] = useState<GetOrderByIdQuery['getOrderById']['order'] | null>(null);
	const orderId = useParams().id;

	const {data, subscribeToMore} = useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GET_ORDER_BY_ID, {variables: {data: {id: Number(orderId)}}});
	useEffect(() => {
		if (!data?.getOrderById.ok) {
			setOrder(null);
		}
		if (data?.getOrderById.ok && data?.getOrderById.order) {
			subscribeToMore<UpdateOrdersSubscription>({
				document: NEW_UPDATE_ORDER,
				updateQuery: (_prev, {subscriptionData, complete, previousData}) => {
					if (!complete || !subscriptionData.data) {
						return;
					}
					const {updateOrders} = subscriptionData.data;

					if (updateOrders.status === OrderStatus.Failed) {
						return {
							...previousData,
							getOrderById: {
								...previousData.getOrderById,
								ok: false,
								message: 'Order cancelled',
							},
						};
					}

					return {
						...previousData,
						getOrderById: {
							...previousData.getOrderById,
							order: {
								...previousData.getOrderById.order,
								status: updateOrders.status,
							},
						},
					};
				},
			});
			setOrder(data?.getOrderById.order);
		}
	}, [data]);
	return order ? (
		<div className='flex flex-col  items-center h-screen mt-10'>
			<OrderDetails order={order} />
			<div>
				<Link href={'/orders'} className='text-lg pb-20 font-medium text-green-500 hover:text-green-600 sm:block'>
					<span aria-hidden='true'> &larr;</span> orders history
				</Link>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default OrderSingle;
