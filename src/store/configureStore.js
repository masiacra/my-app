import { createStore } from "redux";
import { initialState, rootReducer } from "../reducers/index.js";

const store = createStore(rootReducer, initialState);

export default store;
