import { 
	GET_PHOTOS_REQUEST,
	GET_PHOTOS_SUCCESS
} from "../actions/pageActions.js";

const initialState = {
	year: 2018,
	photos: [], 
	isHidden: true
};

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {...state, isHidden: false, year: action.payload};
		case GET_PHOTOS_SUCCESS:
			return {...state, photos: action.payload, isHidden: true};
		default: 
			return state;
	}
}
