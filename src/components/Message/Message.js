import React, { Component } from 'react';
import * as setClassName from 'classnames';
import PropTypes from 'prop-types';
import './Message.css';

class Message extends Component {
	reply = () => {
		const {isReplyTarget, msgId, onReply} = this.props;

		if (isReplyTarget) {
			onReply(null);		
		}
		else {
			onReply(msgId);		
		}
	}

	render() {
		const {text, otherSide, repliesTo, isReplyTarget} = this.props;

		const WrapperClsNm = setClassName('message-wrapper', {'other': otherSide});
		const messageClsNm = setClassName('Message', {'other': otherSide, 'selected': isReplyTarget});
		const replyClsNm = setClassName('reply', {'other': otherSide, 'selected': isReplyTarget});
		// const mainClassName = setClassName('message-main', {'reply-target': isReplyTarget});

		const replyArrow = otherSide ? '↶' : '↷';

		return (
			<div className={WrapperClsNm}>
				<div className={messageClsNm}>
					{repliesTo && <div className="quote">"{repliesTo.text}"</div> }
					<div className="message-text">{text}</div>
				</div>
				<div className={replyClsNm} onClick={this.reply}>{replyArrow}</div>
			</div>
		);
	}
}

Message.propTypes = {
	msgId: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	otherSide: PropTypes.bool,
	repliesTo: PropTypes.object,
	isReplyTarget: PropTypes.bool,
	onReply: PropTypes.func.isRequired,
};

Message.defaultProps = {
	otherSide: false,
	isReplyTarget: false,
};

export default Message;