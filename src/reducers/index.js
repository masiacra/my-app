import { combineReducers } from "redux";
import { userReducer } from "./user.js";
import { pageReducer } from "./page.js";

export const rootReducer = combineReducers({
	user: userReducer,
	page: pageReducer
});
