import {userLoggedOut} from '../../apollo';
import Header from '../../components/custom/Header';

const Owner = ({user}) => {
	return (
		<>
			<Header user={user} />
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
