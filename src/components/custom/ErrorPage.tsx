import {faSadTear, IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import restaurantBg from '../../images/restaurants-bg.png';

interface IErrorPageProps {
	title?: string;
	message?: string;
	errorCode?: string;
	icon?: IconDefinition;
}
const ErrorPage: React.FC<IErrorPageProps> = ({errorCode, title, message, icon}) => {
	return (
		<div className='h-screen w-full text-white flex flex-col items-center justify-center space-y-6 bg-cover bg-center ' style={{backgroundImage: `url(${restaurantBg})`}}>
			<div className='animate-wiggle text-7xl'>
				<FontAwesomeIcon icon={icon ? icon : faSadTear} />
			</div>
			<h1 className='text-5xl font-bold'>{errorCode}</h1>
			<h1 className='text-3xl font-bold'>{title}</h1>
			<p className='text-xl '>{message}</p>
			<Link className='hover:underline' to={'/'}>
				&larr; Go back home
			</Link>
		</div>
	);
};

export default ErrorPage;
