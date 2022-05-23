import {Link} from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='flex flex-row'>
			<ul className='flex text-center '>
				<li className='bg-gray-400 text-white p-4 m-1'>
					<Link to='/auth/login'>Login </Link>
				</li>
				<li className='bg-green-400 text-white p-4 m-1'>
					<Link to='/users'>Users </Link>
				</li>
				<li className='bg-red-400 text-white p-4 m-1'>
					<Link to='/users/user'> User</Link>
				</li>
				<li className='bg-blue-400 text-white p-4 m-1'>
					<Link to='/users/new'>New </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
