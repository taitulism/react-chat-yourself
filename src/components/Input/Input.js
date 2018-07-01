import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
	// constructor (props) {
	// 	super(props);

	// 	this.state = {
	// 		text: ''
	// 	};
	// }

	handleChange = (ev) => {
		this.setState({text: ev.target.value});
	}

	handleClick = (ev) => {
		const {text} = this.state;

		this.props.sendHandler(text);

		this.setState({text: ''});
	}

	render () {
		const {text, onUpdate, onEnter} = this.props;

		return (
				<input
					className="Input"
					type="text"
					value={text}
					onChange={(ev) => {
						onUpdate(ev.target.value, ev);
					}}
					onKeyPress={(ev) => {
						if (onEnter && ev.key === "Enter") {
							onEnter(ev);
						}
					}}
				/>
		);
	}
}

Input.propTypes = {
	text: PropTypes.string,
	onEnter: PropTypes.func,
	onUpdate: PropTypes.func.isRequired,
};

Input.defaultProps = {
	text: '',
	onEnter: function noop () {},
};

export default Input;
