import {EditOrderMutation, EditOrderMutationVariables, OrderStatus} from '../../graphql/schemaTypes';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UserRole} from '../../graphql/schemaTypes';
import useUser from '../../hooks/useUser';
import PreaperFood from '../../images/preaper.svg';
import PreaperFoodDark from '../../images/preaperBlack.svg';
import Dining from '../../images/dining.svg';
import {useMutation, useReactiveVar} from '@apollo/client';
import {EDIT_ORDER} from '../../graphql/mutations';
import {isDarkVar} from '../../apollo/GlobalVar';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const OrderStatusBar = ({order}) => {
	const isDark = useReactiveVar(isDarkVar);
	const {user} = useUser();
	const orderStatusWidthCal = () => {
		let number = 1;
		number = order?.status === OrderStatus.Cooking ? 1 : 1;
		number = order?.status === OrderStatus.Cooked ? 3 : 1;
		number = order?.status === OrderStatus.Delivered ? 5 : 1;
		return `calc((1 * 2 + ${number}) / 8 * 100%)`;
	};

	const [editOrderStatus, {loading}] = useMutation<EditOrderMutation, EditOrderMutationVariables>(EDIT_ORDER);

	const changeStatusHandler = () => {
		if (loading) return;
		const newStatus = order?.status === OrderStatus.Cooking ? OrderStatus.Cooked : OrderStatus.Cooking;
		editOrderStatus({variables: {data: {id: order?.id, status: newStatus}}});
	};
	return (
		<>
			<div className={`border-2 border-gray-200 py-6 px-4 sm:px-6 lg:p-8  ${isDark ? 'bg-black ' : 'bg-white '}`}>
				<h4 className='sr-only'>Status</h4>

				{user?.role === UserRole.Owner && (
					<div className='group'>
						<button onClick={changeStatusHandler} className='flex flex-row w-1/3 mb-5 mx-auto  sm:items-baseline sm:space-x-4  rounded-lg px-4 justify-end items-end group-hover:text-white group-hover:bg-green-400 border-green-300 border-2  '>
							<p className='text-lg font-extrabold tracking-tight  sm:text-lg'>Mark as {order?.status === OrderStatus.Cooking ? OrderStatus.Cooked : OrderStatus.Cooking}</p>
							<div className='text-2xl text-green-500 group-hover:text-white'>
								<FontAwesomeIcon icon={faCheckCircle} />
							</div>
						</button>
					</div>
				)}
				<p className={`text-sm font-medium ${isDark ? 'text-white ' : 'text-gray-900 '}`}>
					Order Status: <span className='text-green-500 font-extrabold text-lg'>{order.status}</span>
				</p>
				<div className='mt-6' aria-hidden='true'>
					<div className='bg-gray-200 rounded-full overflow-hidden'>
						<div className='h-2 bg-green-500 rounded-full' style={{width: orderStatusWidthCal()}} />
					</div>
					<div className='hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6'>
						<div>Order placed</div>
						<div className={classNames(order.status === OrderStatus.Cooking ? 'text-green-500 animate-wiggle' : '', 'text-center')}>{OrderStatus.Cooking}</div>
						<div className={classNames(order.status === OrderStatus.Cooked ? 'text-green-500 animate-wiggle' : '', 'text-center')}>{OrderStatus.Cooked}</div>
						<div className={classNames(order.status === OrderStatus.Delivered ? 'text-green-500 animate-wiggle' : '', 'text-right')}>{OrderStatus.Delivered}</div>
					</div>

					<div className='flex items-center justify-center '>
						{order.status === OrderStatus.Cooking && <img src={`${isDark ? PreaperFoodDark : PreaperFood}`} alt='order-cooking' className='mt-5 object-center object-cover sm:w-1/2 ' />}
						{order.status === OrderStatus.Cooked && <img src={Dining} alt='order-cooked' className='object-center  object-cover sm:w-1/2 ' />}
					</div>
				</div>
			</div>
		</>
	);
};
export default OrderStatusBar;
