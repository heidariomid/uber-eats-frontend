import Logo from '../../images/uber-eats.svg';
import LogoWhite from '../../images/uber-eats-white.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketShopping, faMoon, faReorder, faSignOut, faSun, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {themeHandler, userLoggedOut} from '../../apollo';
import {useQuery, useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../apollo/GlobalVar';
import {useStateValue} from '../../store/context/ContextManager';
import {actions} from '../../store/actions';
import useUser from '../../hooks/useUser';
import {Order, OrderStatus, UserRole} from '../../graphql/schemaTypes';
import {ORDERS} from '../../graphql/queries';
import {useEffect, useState} from 'react';
import Loading from '../loading/Loading';

const Header = () => {
	const isDark = useReactiveVar(isDarkVar);

	const basketItem: any = JSON.parse(sessionStorage.getItem('basket') || '{}');

	const [_, dispatch] = useStateValue();
	const {user, loading} = useUser();

	const basketHandler = () => {
		dispatch({
			type: actions.BASKET_STATUS,
			payload: {status: basketItem?.status ? false : true},
		});
	};
	const [orders, setOrders] = useState<Order[] | null>(null);
	const [totalQuantity, setTotalQuantity] = useState<number | null>(null);
	const {data} = useQuery(ORDERS, {variables: {data: {status: OrderStatus.Cooking}}});
	useEffect(() => {
		if (!data?.getOrders.ok) {
			setOrders(null);
		}
		if (data?.getOrders.ok && data?.getOrders.orders) {
			setOrders(data.getOrders.orders);
		}
	}, [data]);

	useEffect(() => {
		const quantityObject = basketItem?.dishQuantity;
		const total: any =
			quantityObject &&
			Object.values(quantityObject).reduce((total: any, quantity) => {
				return total + quantity;
			}, 0);

		setTotalQuantity(total > 0 ? total : null);
	}, [basketItem?.dishQuantity]);

	return (
		<div className='flex flex-row content-center items-center justify-start text-center  w-full '>
			{!loading ? (
				<header className='flex items-center justify-start text-center py-4 w-full mx-auto'>
					<div className='w-full px-5 xl:-x-0 max-w-screen-xl mx-auto flex justify-between items-center'>
						<Link to={'/'}>
							{!isDark && <img className='w-36 md:w-40 p-1 cursor-pointer' src={Logo} alt='logo' />}
							{isDark && <img className='w-36 md:w-40 p-1  cursor-pointer' src={LogoWhite} alt='logo' />}
						</Link>

						<div className='flex  '>
							{user?.role === UserRole.Owner && (
								<div className='mx-10'>
									<Link
										to={'/orders'}
										className=' mx-0.5 cursor-pointer inline-flex relative items-center p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black'
									>
										<FontAwesomeIcon icon={faReorder} />
										<span className='sr-only'>Notifications</span>
										<div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full border-2 border-white dark:border-gray-900'>
											{orders?.length}
										</div>
									</Link>
								</div>
							)}

							<div
								onClick={basketHandler}
								className={`py-1 mx-0.5 cursor-pointer mr-2 md:mr-5 inline-flex relative   ${basketItem?.items?.length > 0 && 'text-lime-700'} `}
							>
								<FontAwesomeIcon className='text-xl  md:px-2' icon={faBasketShopping} />
								{totalQuantity && (
									<div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full '>
										{totalQuantity}
									</div>
								)}
								{/* {totalQuantity && <span className=' px-2 py-1 text-white rounded-full bg-green-500'>{totalQuantity}</span>} */}
							</div>

							{user && (
								<Link to='/orders' className={`py-1 mx-0.5 cursor-pointer  hover:text-green-600 `}>
									<FontAwesomeIcon className=' text-xl px-1 md:px-4 text-center' icon={faUser} />
								</Link>
							)}

							{!isDark && (
								<button className=' py-1 mx-0.5 cursor-pointer' onClick={() => themeHandler(false)}>
									<FontAwesomeIcon className='  text-xl px-1 md:px-2' icon={faMoon} />
								</button>
							)}
							{isDark && (
								<button className=' py-1  mx-0.5 cursor-pointer ' onClick={() => themeHandler(true)}>
									<FontAwesomeIcon className='  text-xl  md:px-2' icon={faSun} />
								</button>
							)}

							{user ? (
								<span className=' py-1  mx-0.5 cursor-pointer' onClick={userLoggedOut}>
									<FontAwesomeIcon className='  text-xl md:px-2' icon={faSignOut} />
								</span>
							) : (
								<Link to='/auth/login' className=' py-1  ml-2 md:mx-4 cursor-pointer'>
									<span className='text-sm md:text-xl px-2  md:px-4 btn'>Login</span>
								</Link>
							)}
						</div>
					</div>
				</header>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Header;
