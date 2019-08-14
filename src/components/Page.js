import React, { Component } from "react";
import PropTypes from "prop-types";


class Page extends Component {
	render() {
		const { year, photos } = this.props;
		return (
			<div>
				<p>
				  У тебя {photos.length} фотографий 
				  за {year} год
				</p>
			</div>
		);
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired
};

export default Page;

