import userReducer from './users/userReducer';
import basketReducer from './basket/basketReducer';

export const initialState = {
	orders: {items: [], message: '', status: false},
	basket: {items: [], message: '', quantity: {}, dishOption: {}, restaurantId: ''},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
		basket: basketReducer(state.basket, action),
	};
};
