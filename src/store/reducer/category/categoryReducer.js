import {actions} from '../../actions';

// category: {categories:[],slug:'all'}

const reducer = (categoryState, action) => {
	let result = categoryState;
	switch (action.type) {
		case actions.CATEGORIES:
			result = {...categoryState, categories: action.payload.categories};
			break;
		case actions.ADD_CATEGORY_SLUG:
			result = {...categoryState, slug: action.payload.slug};
			break;

		default:
			result = categoryState;
			break;
	}
	return result;
};

export default reducer;
