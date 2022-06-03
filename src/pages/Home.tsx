import Header from '../components/header/Header';
import {UserRole} from '../graphql/schemaTypes';
import useUser from '../hooks/useUser';
import Restaurants from './client/Restaurants';
import Owner from './owner/Owner';

const Home = () => {
	const {user} = useUser();
	const homeHandler = () => {
		if (user) {
			if (user.role === UserRole.Client) {
				return <Restaurants />;
			}
			if (user.role === UserRole.Owner) {
				return <Owner />;
			}
		}
	};

	return (
		<div className='px-5'>
			<Header />
			{homeHandler()}
		</div>
	);
};

export default Home;
