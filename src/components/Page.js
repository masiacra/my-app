import React, { Component } from "react";
import PropTypes from "prop-types";


class Page extends Component {
	clickHandler = e => {
		const target = e.target;
		const value = Number(target.innerText);
		this.props.getPhotos(value);
	}
	render() {
		const { year, photos, isHidden } = this.props;
		return (
			<div className="ib page">
				<p>
				  { isHidden ? 
				   `У тебя ${photos.length} фотографий за ${year} год` :
				   'Loading'
				  }
				  
				</p>
				<button className="btn" onClick={this.clickHandler}>
					2016
				</button>
				<button className="btn" onClick={this.clickHandler}>
					2017
				</button>
				<button className="btn" onClick={this.clickHandler}>
					2018
				</button>
			</div>
		);
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
	isHidden: PropTypes.bool.isRequired
};

export default Page;

