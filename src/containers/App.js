import React from 'react';
import { connect } from "react-redux";
import "./App.css"

import User from "../components/User.js";
import Page from "../components/Page.js";
import setYear from "../actions/pageActions";



class App extends React.Component {
	render() {
		const { user, page, setYearAction } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<User name={user.name} />
				<Page 
					photos={page.photos} 
					year={page.year} 
					setYear={setYearAction}
				/>
				
				{/*Добавили данные из props*/}
			</div>
		);
	}

}


//функция приклеиваинья данных из store
const mapStateToProps = store => {
	console.log(store);
	return {
		user: store.user,
		page: store.page
	};
};


//приклеиваем наш action к контейнеру
const mapDispatchToProps = dispatch => {
	return {
		setYearAction: year => dispatch(setYear(year))
	};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
