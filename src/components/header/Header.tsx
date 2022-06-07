import Logo from '../../images/uber-eats.svg';
import LogoWhite from '../../images/uber-eats-white.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSignOut, faSun} from '@fortawesome/free-solid-svg-icons';
import useUser from '../../hooks/useUser';
import {Link} from 'react-router-dom';
import {themeHandler, userLoggedOut} from '../../apollo';
import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../apollo/GlobalVar';

const Header = () => {
	const {user} = useUser();
	const isDark = useReactiveVar(isDarkVar);

	return (
		<>
			<header className='py-4'>
				<div className='w-full px-5 xl:-x-0 max-w-screen-2xl mx-auto flex justify-between items-center'>
					<Link to={'/'}>
						{!isDark && <img className='w-40 p-1  cursor-pointer' src={Logo} alt='logo' />}
						{isDark && <img className='w-40 p-1   cursor-pointer' src={LogoWhite} alt='logo' />}
					</Link>
					<div className='flex flex-row space-x-1 '>
						<div className='mr-5'>
							<Link to={'/user/edit'}>
								<span className={` py-1 h-full w-full flex bg-black text-white ${isDark && 'bg-white  text-black'} px-4 mx-0.5`}>{user?.role}</span>
							</Link>
						</div>

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
		</>
	);
};

export default Header;
