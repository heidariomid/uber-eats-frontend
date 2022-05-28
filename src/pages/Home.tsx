import {userLoggedOut} from '../apollo';
import {UserRole} from '../graphql/schemaTypes';
import useUser from '../hooks/useUser';
import Restaurants from './client/Restaurants';
import Owner from './owner/Owner';

const Home = () => {
	const {user} = useUser();
	if (user) {
		return <>{user?.role === UserRole.Owner ? <Owner user={user} /> : <Restaurants user={user} />}</>;
	} else {
		return (
			<button className='btn' onClick={userLoggedOut}>
				log out 🥱
			</button>
		);
	}
};

export default Home;
