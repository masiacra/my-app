import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
	render() {
		const { name } = this.props;
		return (
			<div className="id user">
				<p>Привет, {name}!</p>
			</div>
		);
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired
};

export default User;
