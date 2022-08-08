import {basketItemVar, isBasketItemVar} from '../../../apollo/GlobalVar';
import {actions} from '../../actions';

// basket: {items: [], message: '',hasError: false, errorMessages: '',status:false,dishQuantity: {},dishOptionQuantity: {},restaurantId: ''}

const reducer = (userState, action) => {
	const basket = JSON.parse(sessionStorage.getItem('basket') || 'null');
	const isBasket = Boolean(basket);

	let result = userState;
	let newDishQuantity = userState.dishQuantity;
	let dishOptionQuantity = basket?.dishOptionQuantity;
	let basketDishQuantity = basket?.dishQuantity;

	switch (action.type) {
		case actions.ADD_TO_BASKET:
			if (isBasket) {
				const state = {...basket, items: [...basket.items, action.payload.item], message: action.payload.message, restaurantId: action.payload.restaurantId};
				basketDishQuantity = {...basketDishQuantity, [action.payload.id]: (basketDishQuantity[action.payload.id] || 0) + 1};
				result = {...state, dishQuantity: basketDishQuantity};
				if (!isBasket) {
					sessionStorage.setItem('basket', JSON.stringify(result));
					isBasketItemVar(true);
					basketItemVar(result);
				} else {
					sessionStorage.setItem('basket', JSON.stringify(result));
					isBasketItemVar(true);
					basketItemVar(result);
				}
			} else {
				const state = {...userState, items: [...userState.items, action.payload.item], message: action.payload.message, restaurantId: action.payload.restaurantId};
				newDishQuantity = {...newDishQuantity, [action.payload.id]: (newDishQuantity[action.payload.id] || 0) + 1};
				result = {...state, dishQuantity: newDishQuantity};
				if (!isBasket) {
					sessionStorage.setItem('basket', JSON.stringify(result));
					isBasketItemVar(true);
					basketItemVar(result);
				} else {
					sessionStorage.setItem('basket', JSON.stringify(result));
					isBasketItemVar(true);
					basketItemVar(result);
				}
			}
			break;

		case actions.BASKET_QUANTITY_CHANGE:
			if (action.payload.opration === 'increase') {
				basketDishQuantity = {...basketDishQuantity, [action.payload.id]: (basketDishQuantity[action.payload.id] || 0) + 1};
				result = {...basket, dishQuantity: basketDishQuantity};
				sessionStorage.setItem('basket', JSON.stringify(result));
			}
			if (action.payload.opration === 'decrease' && newDishQuantity[action.payload.id] > 1) {
				basketDishQuantity = {...basketDishQuantity, [action.payload.id]: (basketDishQuantity[action.payload.id] || 0) - 1};
				result = {...basket, dishQuantity: basketDishQuantity};
				sessionStorage.setItem('basket', JSON.stringify(result));
			}

			result = {...userState, dishQuantity: isBasket ? basketDishQuantity : newDishQuantity};

			break;

		case actions.DISH_OPTIONS_QUANTITY_CHANGE:
			let newDishOption = {...userState.dishOptionQuantity};
			if (action.payload.opration === 'increase') {
				if (!isBasket) {
					newDishOption[action.payload.id] = (newDishOption[action.payload.id] || 0) + 1;
					sessionStorage.setItem('basket', JSON.stringify({...userState, dishOptionQuantity: newDishOption}));
				} else {
					dishOptionQuantity = {...dishOptionQuantity, [action.payload.id]: (dishOptionQuantity[action.payload.id] || 0) + 1};
					sessionStorage.setItem('basket', JSON.stringify({...basket, dishOptionQuantity: dishOptionQuantity}));
				}
			}
			if (action.payload.opration === 'decrease' && (newDishOption[action.payload.id] > 0 || dishOptionQuantity[action.payload.id] > 0)) {
				if (!isBasket) {
					newDishOption[action.payload.id] = (newDishOption[action.payload.id] || 0) - 1;
					sessionStorage.setItem('basket', JSON.stringify({...userState, dishOptionQuantity: newDishOption}));
				} else {
					dishOptionQuantity = {...dishOptionQuantity, [action.payload.id]: (dishOptionQuantity[action.payload.id] || 0) - 1};
					sessionStorage.setItem('basket', JSON.stringify({...basket, dishOptionQuantity: dishOptionQuantity}));
				}
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
