import Logo from '../../images/uber-eats.svg';
import LogoWhite from '../../images/uber-eats-white.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketShopping, faMoon, faSignOut, faSun} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {themeHandler, userLoggedOut} from '../../apollo';
import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../apollo/GlobalVar';
import {useStateValue} from '../../store/context/ContextManager';
import {actions} from '../../store/actions';
import useUser from '../../hooks/useUser';
import {UserRole} from '../../graphql/schemaTypes';

const Header = () => {
	const isDark = useReactiveVar(isDarkVar);
	const [state, dispatch] = useStateValue();
	const {user} = useUser();
	const basketHandler = () => {
		dispatch({
			type: actions.BASKET_STATUS,
			payload: {status: state.basket.status ? false : true},
		});
	};

	return (
		<div className='flex flex-row content-center items-center justify-start text-center  w-full '>
			<header className='flex items-center justify-start text-center py-4 w-full mx-auto'>
				<div className='w-full px-5 xl:-x-0 max-w-screen-2xl mx-auto flex justify-between items-center'>
					<Link to={'/'}>
						{!isDark && <img className='w-40 p-1  cursor-pointer' src={Logo} alt='logo' />}
						{isDark && <img className='w-40 p-1   cursor-pointer' src={LogoWhite} alt='logo' />}
					</Link>
					<div className='flex flex-row  '>
						{user?.role === UserRole.Client && (
							<div className='mr-5'>
								<div onClick={basketHandler} className={`py-1 mx-0.5 cursor-pointer  ${state.basket.items.length > 0 && 'text-green-500'} `}>
									<FontAwesomeIcon className='text-xl px-2' icon={faBasketShopping} />
									{state.basket.items.length > 0 && <span className='text-lg px-2 text-green-500'>{state.basket.items.length}</span>}
								</div>
							</div>
						)}
						{!isDark && (
							<button className=' py-1 mx-0.5 cursor-pointer' onClick={() => themeHandler(false)}>
								<FontAwesomeIcon className='  text-xl px-2' icon={faMoon} />
							</button>
						)}
						{isDark && (
							<button className=' py-1  mx-0.5 cursor-pointer' onClick={() => themeHandler(true)}>
								<FontAwesomeIcon className='  text-xl px-2' icon={faSun} />
							</button>
						)}

						<span className=' py-1  mx-0.5 cursor-pointer' onClick={userLoggedOut}>
							<FontAwesomeIcon className='  text-xl px-2' icon={faSignOut} />
						</span>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
