import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
	static propTypes = {
		text: PropTypes.string,
		onEnter: PropTypes.func,
		onChange: PropTypes.func.isRequired,
	}

	static defaultProps = {
		text: '',
		onEnter: null,
		onChange: null,
	}

	render () {
		const {text, onChange, onEnter} = this.props;

		return (
			<input
				className="Input"
				type="text"
				value={text}
				onChange={(ev) => {
					onChange && onChange(ev.target.value, ev);
				}}
				onKeyPress={(ev) => {
					if (ev.key === "Enter") {
						onEnter && onEnter(ev);
					}
				}}
			/>
		);
	}
}

export default Input;
