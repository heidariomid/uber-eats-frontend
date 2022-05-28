import Logo from '../../images/uber-eats.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Header = ({user}) => {
	return (
		<header className=' py-4 bg-slate-800 '>
			<div className='bg-slate-400 flex flex-row w-full max-w-screen-xl max-auto justify-between items-center'>
				<img className='w-40' src={Logo} alt='logo' />
				<span className=' bg-orange-300'>{user.role}</span>
			</div>
		</header>
	);
};

export default Header;
