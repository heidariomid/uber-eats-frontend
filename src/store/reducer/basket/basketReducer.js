import {actions} from '../../actions';

// users: {items: [], messages: '',hasError: false, errorMessages: '',status:false}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.ADD_TO_BASKET:
			console.log(action);
			// result = {...userState, items: action.payload.data.user, isLogin: action.payload.data.isLogin};
			break;
		case actions.ADD_TO_BASKET_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
