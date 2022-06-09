import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import {useReactiveVar} from '@apollo/client';
import {isLoginVar} from '../apollo/GlobalVar';
import Confirm from '../components/email/Confirm';
import EditProfile from '../components/user/EditProfile';
import RestaurantFind from '../pages/client/RestaurantFind';
import SingleRestaurant from '../pages/client/SingleRestaurant';
import ErrorPage from '../components/custom/ErrorPage';
import SingleCategory from '../pages/client/SingleCategory';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
		<Routes>
			<Route path='/' element={isLoggedIn ? <Home /> : <Navigate to={'/auth/login'} />} />
			<Route path='search/:query' element={<RestaurantFind />} />
			<Route path='restaurant/:id' element={<SingleRestaurant />} />
			<Route path='category/:slug' element={<SingleCategory />} />
			<Route path='/auth/login' element={<Login />} />
			<Route path='/auth/signup' element={<Signup />} />
			<Route path='/confirm' element={<Confirm />} />
			<Route path='/user/edit' element={<EditProfile />} />
			<Route path='*' element={<ErrorPage title='404' message='Nothing Found' />} />
		</Routes>
	);
};

export default Router;
