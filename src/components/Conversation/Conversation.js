import React, { Component } from 'react';
import * as setClassName from 'classnames';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import './Conversation.css';

class Conversation extends Component {
	static propTypes = {
		messages: PropTypes.array,
		replyTarget: PropTypes.number,
		onReply: PropTypes.func.isRequired,
	}
	
	static defaultProps = {
		messages: [],
		replyTarget: null,
	}
	
	constructor (props) {
		super(props);
    	this.myRef = React.createRef();
	}

	componentDidUpdate(prevProps) {
		const curLen = this.props.messages.length;
		const prevLen = prevProps.messages.length;

		if (curLen > prevLen) {
			this.scrollConversationDown();
		}
	}
	
	scrollConversationDown () {
		const elm = this.myRef.current;
		
		if (!elm) return;

		/*
		 * `elm.scrollTop = elm.scrollHeight - elm.clientHeight;`
		 * 
		 * Description:
		 * 		Pulls the scroll down to the bottom by setting the reminder on top.
		 * 
		 * More Info:
		 *   The container (e.g. <UL>) has its height (clientHeight) but if it's overflowed
		 *   with items (e.g. <LI>) it gets an additional "scroll potential".
		 *   clientHeight + "scroll potential" = scrollHeight.
		 *   That scroll reminder is kept at the bottom of the scroll-bar by default.
		 *   This sets the scroll reminder at the top of the scroll-bar (scrolls down)
		*/
		elm.scrollTop = elm.scrollHeight - elm.clientHeight;
	}

	renderMessages (messages) {
		const {replyTarget, onReply} = this.props;

		return messages.map((msg, i) => {
			const otherSide = (msg.from === 'B')? true : false;
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
			<ul className="Conversation" ref={this.myRef}>
				{this.renderMessages(messages)}
			</ul>
		);
	}
}

export default Conversation;
