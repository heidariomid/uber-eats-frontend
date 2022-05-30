import Logo from '../../images/uber-eats.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import useUser from '../../hooks/useUser';
import Banner from '../banner/Banner';
import {useNavigate} from 'react-router-dom';

const Header = () => {
	const {user} = useUser();
	let navigate=useNavigate()
	return (
		<>
			{!user?.verified && <Banner text={'please click on the link that we sent to your email'} color={'white'} bgcolor={'red'} />}
			<header className=' py-4 bg-black'>
				<div className='bg-white flex flex-row px-5 md:px-0 w-full max-w-screen-xl max-auto justify-between items-center'>
					<img className='w-40' src={Logo} alt='logo' />
					<span className=' bg-black text-white px-2'>
						{user?.role}
						<FontAwesomeIcon className=' text-white text-xl px-4 ' icon={faUser} />
					</span>
				</div>
			</header>
		</>
	);
};

export default Header;
