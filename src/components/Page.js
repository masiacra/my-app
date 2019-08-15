import React, { Component } from "react";
import PropTypes from "prop-types";


class Page extends Component {
	clickHandler = e => {
		const target = e.target;
		const value = Number(target.innerText);
		this.props.setYear(value);
	}
	render() {
		const { year, photos } = this.props;
		return (
			<div>
				<p>
				  У тебя {photos.length} фотографий 
				  за {year} год
				</p>
				<button onClick={this.clickHandler}>2016</button>
				<button onClick={this.clickHandler}>2017</button>
				<button onClick={this.clickHandler}>2018</button>
			</div>
		);
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired
};

export default Page;

