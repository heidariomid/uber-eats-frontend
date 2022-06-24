import {actions} from '../../actions';

// users: {rooms: [], messages: '', isLogin:false,hasError: false, errorMessages: '',status:false}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.SEND_MESSAGE_SUCCESS:
			result = {...userState, messages: action.payload.messages};
			break;
		case actions.SEND_MESSAGE_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.CHAT_STATUS_SUCCESS:
			result = {...userState, status: action.payload.status};
			break;
		case actions.CHAT_STATUS_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.FETCH_ROOM_SUCCESS:
			result = {...userState, rooms: [...action.payload.rooms]};
			break;
		case actions.FETCH_ROOM_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.AUTHENTICATION_SUCCESS:
			result = {...userState, items: action.payload.data.user, isLogin: action.payload.data.isLogin};
			break;
		case actions.AUTHENTICATION_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
