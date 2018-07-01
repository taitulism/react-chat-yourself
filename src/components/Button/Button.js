import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
	render () {
		const {label, clickHandler} = this.props;

		return (
			<button className="Button"
				onClick={(ev) => clickHandler(ev)}>{label}
			</button>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default Button;
