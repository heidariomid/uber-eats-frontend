import userReducer from './users/userReducer';
import basketReducer from './basket/basketReducer';

export const initialState = {
	orders: {items: [], messages: '', hasError: false, errorMessages: '', status: false},
	basket: {items: [], messages: '', hasError: false, errorMessages: '', status: false},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
		basket: basketReducer(state.basket, action),
	};
};
