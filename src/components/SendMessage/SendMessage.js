import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './SendMessage.css';

class SendMessage extends Component {
	constructor (props) {
		super(props);
	
		this.state = {
			messageText: ''
		};
	}

	// handleChange = (ev) => {
	// 	this.setState({message: ev.target.value});
	// }

	// handleClick = (ev) => {

	// }

	updateMsg = (text) => {
		this.setState({messageText: text});
	}

	send = () => {
		const {userName} = this.props;
		const {messageText} = this.state;

		this.props.onSend(userName, messageText);

		this.setState({messageText: ''});
	}

	render () {
		const {messageText} = this.state;

		return (
			<div className="SendMessage">
				<Input
					text={messageText}
					onUpdate={this.updateMsg}
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

SendMessage.propTypes = {
	userName: PropTypes.string.isRequired,
	onSend: PropTypes.func.isRequired,
};

export default SendMessage;