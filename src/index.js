import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';


import store from "./store/configureStore.js";

import "./index.css";


//Provider позволяет получать данные из store нашего приложения
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
