import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
	static propTypes = {
		label: PropTypes.string.isRequired,
		clickHandler: PropTypes.func.isRequired,
	}

	render () {
		const {label, clickHandler} = this.props;

		return (
			<button className="Button"
				onClick={(ev) => clickHandler(ev)}>{label}
			</button>
		);
	}
}

export default Button;
