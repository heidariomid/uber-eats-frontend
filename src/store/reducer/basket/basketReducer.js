import {actions} from '../../actions';

// users: {items: [], messages: '',hasError: false, errorMessages: '',status:false}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.ADD_TO_BASKET:
			result = {...userState, items: [...userState.items, action.payload.items]};
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
