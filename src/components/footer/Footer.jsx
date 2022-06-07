import {useReactiveVar} from '@apollo/client';
import {isDarkVar} from '../../apollo/GlobalVar';

const Footer = () => {
	const isDark = useReactiveVar(isDarkVar);

	return (
		<div className={`w-full p-24 bg-black text-white grid grid-cols-3 gap-7 items-center justify-between text-center  py-16 ${isDark && 'border-t-2 border-green-500'}`}>
			<div>
				<span className='text-sm'>About Us</span>
			</div>
			<div>
				<span className='text-sm'>Privacy Policy</span>
			</div>
			<div>
				<span className='text-sm'>Contact Us</span>
			</div>
			<div>
				<span className='text-sm'>Terms of Service</span>
			</div>
			<div>
				<span className='text-sm'>© 2020 Uber Eats</span>
			</div>
			<div>
				<span className='text-sm'>Other Services</span>
			</div>
		</div>
	);
};

export default Footer;
