import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index.js";
import { ping } from "../enhancers/ping";


const store = createStore(rootReducer, applyMiddleware(ping));

export default store;
