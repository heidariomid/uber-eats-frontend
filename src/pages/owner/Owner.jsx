import {userLoggedOut} from '../../apollo';
import Header from '../../components/header/Header';
import useUser from '../../hooks/useUser';

const Owner = () => {
	const {user} = useUser();
	return (
		<>
			<Header />
			<div>
				<h1>{user.role}</h1>
				<h2>{user.email}</h2>
				<button className='btn' onClick={userLoggedOut}>
					log out
				</button>
			</div>
		</>
	);
};

export default Owner;
