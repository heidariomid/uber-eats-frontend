import {useNavigate} from 'react-router-dom';
import {userLoggedOut} from '../../apollo';
import Header from '../../components/header/Header';
import useUser from '../../hooks/useUser';

const Owner = () => {
	const {user} = useUser();
	let navigate = useNavigate();
	return (
		<>
			<div>
				<h1>{user.role}</h1>
				<h2>{user.email}</h2>
				<button className='btn' onClick={() => navigate('/user/edit')}>
					update profile 😎
				</button>
				<br />
				<button className='btn' onClick={userLoggedOut}>
					log out
				</button>
			</div>
		</>
	);
};

export default Owner;
