import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<h1 className='text-5xl font-bold'>404</h1>
			<h1 className='text-3xl font-bold'>Page Not Found</h1>
			<Link to={'/'}>Go back home &rarr;</Link>
		</div>
	);
};

export default NotFound;
