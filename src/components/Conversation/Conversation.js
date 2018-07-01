import React, { Component } from 'react';
import * as setClassName from 'classnames';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import './Conversation.css';

class Conversation extends Component {
	renderMessages (messages) {
		const {replyTarget, onReply} = this.props;

		return messages.map((msg, i) => {
			const otherSide = (msg.from === 'B')? true : false;
			// const isReplyTarget = (msg.msgId === replyTarget);

			const liClassname = setClassName('message-row', {'other': otherSide});
			
			return (
				<li key={i} className={liClassname}>
					<Message
						msgId={i}
						text={msg.text}
						otherSide={otherSide}
						repliesTo={msg.repliesTo}
						isReplyTarget={msg.msgId === replyTarget}
						onReply={onReply}
					/>
				</li>
			);
		});		
	}

	render() {
		const {messages} = this.props;

		return (
			<ul className="Conversation">
				{this.renderMessages(messages)}
			</ul>
		);
	}
}

Conversation.propTypes = {
	messages: PropTypes.array,
	replyTarget: PropTypes.number,
	onReply: PropTypes.func.isRequired,
};

Conversation.defaultProps = {
	messages: [],
	replyTarget: null,
};

export default Conversation;
