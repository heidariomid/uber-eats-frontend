import {actions} from '../../actions';

// basket: {items: [], message: '',hasError: false, errorMessages: '',status:false,dishQuantity: {},dishOptionQuantity: {},restaurantId: ''}

const reducer = (userState, action) => {
	let result = userState;
	let newDishQuantity = userState.dishQuantity;
	switch (action.type) {
		case actions.ADD_TO_BASKET:
			const basket = {...userState, items: [...userState.items, action.payload.item], message: action.payload.message, restaurantId: action.payload.restaurantId};

			newDishQuantity = {...newDishQuantity, [action.payload.id]: (newDishQuantity[action.payload.id] || 0) + 1};

			result = {...basket, dishQuantity: newDishQuantity};
			break;

		case actions.BASKET_QUANTITY_CHANGE:
			if (action.payload.opration === 'increase') {
				newDishQuantity = {...newDishQuantity, [action.payload.id]: (newDishQuantity[action.payload.id] || 0) + 1};
			}
			if (action.payload.opration === 'decrease' && newDishQuantity[action.payload.id] > 1) {
				newDishQuantity = {...newDishQuantity, [action.payload.id]: (newDishQuantity[action.payload.id] || 0) - 1};
			}
			result = {...userState, dishQuantity: newDishQuantity};
			break;

		case actions.DISH_OPTIONS_QUANTITY_CHANGE:
			let newDishOption = {...userState.dishOptionQuantity};
			if (action.payload.opration === 'increase') {
				newDishOption[action.payload.id] = (newDishOption[action.payload.id] || 0) + 1;
			}
			if (action.payload.opration === 'decrease' && newDishOption[action.payload.id] > 0) {
				newDishOption[action.payload.id] = newDishOption[action.payload.id] - 1;
			}

			result = {...userState, dishOptionQuantity: newDishOption};

			break;

		case actions.BASKET_STATUS:
			result = {...userState, status: action.payload.status};
			break;

		case actions.REMOVE_FROM_BASKET:
			const newItems = userState.items.filter((item) => item.id !== action.payload.id);
			result = {...userState, items: newItems, message: 'removed from basket'};
			break;

		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
