import Logo from '../../images/uber-eats.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faSignOut} from '@fortawesome/free-solid-svg-icons';
import useUser from '../../hooks/useUser';
import {Link} from 'react-router-dom';
import {userLoggedOut} from '../../apollo';

const Header = () => {
	const {user} = useUser();
	return (
		<>
			<header className='py-4 px-2'>
				<div className='flex flex-row px-5 md:px-0 w-full max-w-screen-2xl max-auto justify-between items-center xl:px-0'>
					<Link to={'/'}>
						<img className='w-40  cursor-pointer' src={Logo} alt='logo' />
					</Link>
					<div className=''>
						<span className=' bg-green-600 text-white py-1 px-4 mx-0.5'>{user?.role}</span>

						<span className='bg-black text-white py-1 px-2 mx-0.5'>
							<Link to={'/user/edit'}>
								<FontAwesomeIcon className=' text-white text-xl px-1' icon={faEdit} />
							</Link>
						</span>
						<span className='bg-black text-white py-1 px-2 mx-0.5' onClick={userLoggedOut}>
							<FontAwesomeIcon className=' text-white text-xl px-2' icon={faSignOut} />
						</span>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
