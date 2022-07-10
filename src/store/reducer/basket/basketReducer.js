import {actions} from '../../actions';

// basket: {items: [], message: '',hasError: false, errorMessages: '',status:false,quantity: {},dishOption: {}}

const reducer = (userState, action) => {
	let result = userState;
	let newQuantity = {...userState.quantity};
	switch (action.type) {
		case actions.ADD_TO_BASKET:
			const basket = {...userState, items: [...userState.items, action.payload.items], message: action.payload.message};
			const quantity = {};

			basket.items.forEach((item) => {
				quantity[item.id] = (quantity[item.id] || 0) + 1;
			});

			result = {...basket, quantity};
			break;

		case actions.BASKET_QUANTITY_CHANGE:
			newQuantity = {...userState.quantity};

			if (action.payload.opration === 'increase') {
				newQuantity[action.payload.id] = newQuantity[action.payload.id] + 1;
			}
			if (action.payload.opration === 'decrease' && newQuantity[action.payload.id] > 1) {
				newQuantity[action.payload.id] = newQuantity[action.payload.id] - 1;
			}
			result = {...userState, quantity: newQuantity};
			break;

		case actions.DISH_OPTIONS_QUANTITY_CHANGE:
			let newDishOption = {...userState.dishOption};
			if (action.payload.opration === 'increase') {
				newDishOption[action.payload.name] = (newDishOption[action.payload.name] || 0) + 1;
			}
			if (action.payload.opration === 'decrease' && newDishOption[action.payload.name] > 0) {
				newDishOption[action.payload.name] = newDishOption[action.payload.name] - 1;
			}

			result = {...userState, dishOption: newDishOption};

			break;

		case actions.BASKET_STATUS:
			result = {...userState, status: action.payload.status};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
