import Logo from '../../images/uber-eats.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import useUser from '../../hooks/useUser';
import Banner from '../banner/Banner';
const Header = () => {
	const {user} = useUser();
	return (
		<>
			{!user?.verified && <Banner text={'please click on the link that we sent to your email'} color={'white'} bgcolor={'red'} />}
			<header className=' py-4 bg-slate-800 '>
				<div className='bg-slate-400 flex flex-row px-5 md:px-0 w-full max-w-screen-xl max-auto justify-between items-center'>
					<img className='w-40' src={Logo} alt='logo' />
					<span className=' bg-orange-300'>
						{user?.role}
						<FontAwesomeIcon className=' text-red-600 text-xl' icon={faUser} />
					</span>
				</div>
			</header>
		</>
	);
};

export default Header;
