import userReducer from './category/categoryReducer';
import basketReducer from './basket/basketReducer';
import restaurantReducer from './restaurant/restaurantReducer';

export const initialState = {
	category: {categories: [], slug: 'all'},
	restaurant: {restaurants: []},
	basket: {items: [], message: '', dishQuantity: {}, dishOptionQuantity: {}, restaurantId: ''},
};

export const reducer = (state = initialState, action) => {
	return {
		category: userReducer(state.category, action),
		basket: basketReducer(state.basket, action),
		restaurant: restaurantReducer(state.restaurant, action),
	};
};
