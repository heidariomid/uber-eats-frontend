import {Navigate, Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import {useReactiveVar} from '@apollo/client';
import {isLoginVar} from '../apollo/GlobalVar';
import Signup from '../pages/Signup';
import useUser from '../hooks/useUser';
import Restaurants from '../pages/client/Restaurants';
import {UserRole} from '../graphql/schemaTypes';
import Owner from '../pages/owner/Owner';
import NotFound from '../components/custom/NotFound';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);
	const {data} = useUser();
	const role = data?.loggedInUser?.role;
	return (
		<Routes>
			<Route path='/' element={isLoggedIn ? <Home /> : <Navigate to={'/auth/login'} />} />
			<Route path='/auth/login' element={<Login />} />
			<Route path='/auth/signup' element={<Signup />} />
			<Route path='/client' element={role === UserRole.Client ? <Restaurants /> : <Navigate to={'/'} />} />
			<Route path='/owner' element={role === UserRole.Owner ? <Owner /> : <Navigate to={'/'} />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Router;
