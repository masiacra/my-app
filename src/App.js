import React from 'react';
import { connect } from "react-redux";
import "./App.css"

class App extends React.Component {
	render() {
		const { user, page } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<p>Привет, {user.name}!</p>
				<p>
				  У тебя {page.photos.length} фотографий 
				  за {page.year} год
				</p>
				
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


export default connect(mapStateToProps)(App);
