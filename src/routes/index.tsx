import {Navigate, Route, Routes} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Users from '../components/user/Users';
import NewUser from '../components/user/NewUser';
import User from '../components/user/User';
import {useReactiveVar} from '@apollo/client';
import {isLoginVar} from '../apollo';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
		<Routes>
			<Route path='/' element={isLoggedIn ? <Home /> : <Navigate to={'/auth/login'} />} />
			<Route path='/auth/login' element={<Login />} />
			<Route path='users' element={<Users />}>
				<Route path='new' element={<NewUser />} />
				<Route path='user' element={<User />} />
				<Route index element={<User />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Router;
