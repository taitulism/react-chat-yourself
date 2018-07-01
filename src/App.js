import React, { Component } from 'react';
import SendMessage from './components/SendMessage/SendMessage';
import Conversation from './components/Conversation/Conversation';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			messages: [],
			replyTarget: null,
		}
	}

	// save message. add to "messages" array
	sendMessage = (from, messageText) => {
		const {messages, replyTarget} = this.state;
		const nextIndex = messages.length;

		const msg = {
			msgId: nextIndex,
			repliesTo: messages[replyTarget],
			from,
			text: messageText,
		};

		this.setState({
			messages: [...messages, msg],
			replyTarget: null,
		});

		// scroll to bottom
		// elm.scrollTop = elm.scrollHeight - elm.clientHeight;
	}
	
	// on click on "reply"
	setReplyTarget = (msgId = null) => {
		this.setState({
			replyTarget: msgId,
		});
	}

	render() {
		const {messages, replyTarget} = this.state;

		return (
			<div className="App">
				<section className="conversation-wrapper">
					<Conversation
						replyTarget={replyTarget}
						messages={messages}
						onReply={this.setReplyTarget}
					/>
				</section>
				<section className="inputs-wrapper">
					<SendMessage userName="A" onSend={this.sendMessage} />
					<SendMessage userName="B" onSend={this.sendMessage} />
				</section>
			</div>
		);
	}
}

export default App;
