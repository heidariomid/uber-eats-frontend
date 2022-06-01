import {userLoggedOut} from '../apollo';
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
		<>
			{user ? (
				homeHandler()
			) : (
				<>
					<button className='btn' onClick={userLoggedOut}>
						log out 🥱
					</button>
					<br />
					<button className='btn' onClick={() => window.location.reload()}>
						refresh page 🔄
					</button>
				</>
			)}
		</>
	);
};

export default Home;
