import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../components/custom/NotFound';
import {useReactiveVar} from '@apollo/client';
import {isLoginVar} from '../apollo/GlobalVar';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
		<Routes>
			<Route path='/' element={isLoggedIn ? <Home /> : <Navigate to={'/auth/login'} />} />
			<Route path='/auth/login' element={<Login />} />
			<Route path='/auth/signup' element={<Signup />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Router;
