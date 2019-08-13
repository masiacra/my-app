import React from 'react';
import { connect } from "react-redux";
import "./App.css"

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<p className="App-intro">
					Здесь будут мои самые залайканные фото
				</p>
				<p>Мое имя: {this.props.name}</p>
				<p>Мое фамилия: {this.props.surname}</p>
				<p>Мой возраст: {this.props.age}</p>
				{/*Добавили данные из props*/}
			</div>
		);
	}

}


//функция приклеиваинья данных из store
const mapStateToProps = store => {
	console.log(store);
	return {
		name: store.name,
		surname: store.surname, 
		age: store.age
	};
};


export default connect(mapStateToProps)(App);
