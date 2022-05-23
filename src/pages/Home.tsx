import {useLocation} from 'react-router-dom';

import Nav from '../routes/Nav';

const Home = () => {
	const {state}: {state: any} = useLocation();

	return (
		<>
			<Nav />

			<div className='container'>Welcom to Home</div>
			{state?.message !== undefined ? <span className='bg-green-600 text-white'>{state?.message}</span> : null}
		</>
	);
};

export default Home;
