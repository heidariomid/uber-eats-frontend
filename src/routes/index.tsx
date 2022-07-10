import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Confirm from '../components/email/Confirm';
import EditProfile from '../components/user/EditProfile';
import RestaurantFind from '../pages/client/RestaurantFind';
import ClientRestaurant from '../pages/client/SingleRestaurant';
import OwnerRestaurant from '../pages/owner/SingleRestaurant';
import ErrorPage from '../components/custom/ErrorPage';
import SingleCategory from '../pages/client/SingleCategory';
import AddRestaurant from '../pages/owner/AddRestaurant';
import AddDish from '../pages/owner/AddDish';
import Basket from '../components/restaurant/Basket';
import Checkout from '../pages/owner/Checkout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/auth/login' element={<Login />} />
			<Route path='/auth/signup' element={<Signup />} />
			<Route path='search/:query' element={<RestaurantFind />} />
			<Route path='restaurant/:id' element={<ClientRestaurant />} />
			<Route path='restaurant/owner/:id' element={<OwnerRestaurant />} />
			<Route path='restaurant/owner/:id/add-dish' element={<AddDish />} />
			<Route path='restaurant/add' element={<AddRestaurant />} />
			<Route path='category/:slug' element={<SingleCategory />} />
			<Route path='/confirm' element={<Confirm />} />
			<Route path='/basket' element={<Basket />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/user/edit' element={<EditProfile />} />
			<Route path='*' element={<ErrorPage title='404' message='Nothing Found' />} />
		</Routes>
	);
};
export default Router;
