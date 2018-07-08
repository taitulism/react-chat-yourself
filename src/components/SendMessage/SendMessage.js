import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input/Input';
import Button from './Button/Button';
import './SendMessage.css';

class SendMessage extends Component {
	static propTypes = {
		userName: PropTypes.string.isRequired,
		onSend: PropTypes.func.isRequired,
	}

	constructor (props) {
		super(props);
	
		this.state = {
			messageText: ''
		};
	}

	updateMsg = (text) => {
		this.setState({messageText: text});
	}

	validate = (text) => {
		if (text === '') return false;

		return true;
	}

	send = () => {
		const {userName} = this.props;
		const {messageText} = this.state;
		const isValid = this.validate(messageText);

		if (isValid) {
			this.props.onSend(userName, messageText);
			this.setState({messageText: ''});
		}
	}

	render () {
		const {messageText} = this.state;

		return (
			<div className="SendMessage">
				<Input
					text={messageText}
					onChange={this.updateMsg}
					onEnter={this.send}
				/>
				<Button
					label="➤"
					clickHandler={this.send}
				/>
			</div>
		);
	}
}

export default SendMessage;
