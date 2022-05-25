import {useReactiveVar} from '@apollo/client';
import {userLoggedOut} from '../apollo';
import {authToken} from '../apollo/GlobalVar';
import Loading from '../components/custom/Loading';
import {UserRole} from '../graphql/schemaTypes';
import useUser from '../hooks/useUser';
import Nav from '../routes/Nav';

const Home = () => {
	const token = useReactiveVar(authToken);
	const {data, error, loading} = useUser();

	if (loading) return <Loading />;

	return (
		<>
			<Nav />
			<div className='container h-screen'>
				{data?.loggedInUser && <span className='span'>{data?.loggedInUser.role}</span>}
				<button className='btn' onClick={userLoggedOut}>
					log out
				</button>
			</div>
		</>
	);
};

export default Home;
